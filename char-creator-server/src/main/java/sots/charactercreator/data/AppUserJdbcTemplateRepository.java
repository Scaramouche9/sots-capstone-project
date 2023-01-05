package sots.charactercreator.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import sots.charactercreator.models.AppUser;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.Collection;
import java.util.List;

@Repository
public class AppUserJdbcTemplateRepository implements AppUserRepository {

    private final JdbcTemplate jdbcTemplate;

    public AppUserJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    @Transactional
    public AppUser findByUsername(String username) {
        List<String> roles = getRolesByUsername(username);

        final String sql = """
                select app_user_id, username, password_hash, enabled
                from app_user
                where username = ?;""";

        return jdbcTemplate.query(sql, new AppUserMapper(roles), username)
                .stream()
                .findFirst().orElse(null);
    }

    @Override
    @Transactional
    public AppUser findByUserId(int id) {
        List<String> roles = getRolesById(id);

        final String sql = """
                select app_user_id, username, password_hash, enabled
                from app_user
                where app_user_id = ?;""";

        return jdbcTemplate.query(sql, new AppUserMapper(roles), id)
                .stream()
                .findFirst().orElse(null);
    }

    @Override
    @Transactional
    public AppUser create(AppUser user) {

        final String sql = """
                insert into app_user (username, password_hash) values (?, ?);""";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }
        user.setAppUserId(keyHolder.getKey().intValue());
        updateRoles(user);
        return user;
    }

    @Override
    @Transactional
    public boolean update(AppUser user) {

        final String sql = """
                update app_user set
                username = ?,
                enabled = ?
                where app_user_id = ?""";

        boolean updated = jdbcTemplate.update(sql,
                user.getUsername(), user.isEnabled(), user.getAppUserId()) > 0;

        if (updated) {
            updateRoles(user);
        }

        return updated;
    }

    private void updateRoles(AppUser user) {

        jdbcTemplate.update("delete from app_user_role where app_user_id = ?;", user.getAppUserId());

        Collection<GrantedAuthority> authorities = user.getAuthorities();

        if (authorities == null) {
            return;
        }

        for (GrantedAuthority role : authorities) {
            String sql = "insert into app_user_role (app_user_id, app_role_id) "
                    + "select ?, app_role_id from app_role where `name` = ?;";
            jdbcTemplate.update(sql, user.getAppUserId(), role.getAuthority());
        }
    }

    private List<String> getRolesByUsername(String username) {
        final String sql = """
                select ar.name
                from app_user_role aur
                inner join app_role ar on aur.app_role_id = ar.app_role_id
                inner join app_user au on aur.app_user_id = au.app_user_id
                where au.username = ?""";
        return jdbcTemplate.query(sql, (rs, rowId) -> rs.getString("name"), username);
    }
    private List<String> getRolesById(int id) {
        final String sql = """
                select ar.name
                from app_user_role aur
                inner join app_role ar on aur.app_role_id = ar.app_role_id
                inner join app_user au on aur.app_user_id = au.app_user_id
                where au.app_user_id = ?""";
        return jdbcTemplate.query(sql, (rs, rowId) -> rs.getString("name"), id);
    }
}

