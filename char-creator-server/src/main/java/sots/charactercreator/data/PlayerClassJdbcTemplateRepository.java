package sots.charactercreator.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import sots.charactercreator.models.PlayerClass;

import java.util.List;

@Repository
public class PlayerClassJdbcTemplateRepository implements PlayerClassRepository {
    private final JdbcTemplate jdbcTemplate;

    public PlayerClassJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<PlayerClass> findAllPlayerClasses() {
        final String sql = "select class_id, class_name from player_class limit 5000;";
        return jdbcTemplate.query(sql, new PlayerClassMapper());
    }

    @Override
    public PlayerClass findPlayerClassById(int classId) {
        List<PlayerClass> all = findAllPlayerClasses();
        for (int i = 0; i < all.size(); i++) {
            if (all.get(i).getClassId() == classId) {
                return all.get(i);
            }
        }
        return null;
    }
}
