package sots.charactercreator.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import sots.charactercreator.models.Background;

import java.util.List;

@Repository
public class BackgroundJdbcTemplateRepository implements BackgroundRepository{

    private final JdbcTemplate jdbcTemplate;

    public BackgroundJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Background> findAllBackgrounds() {
        final String sql = "select background_id, background_name from background limit 5000;";
        return jdbcTemplate.query(sql, new BackgroundMapper());
    }

    @Override
    public Background findBackgroundById(int backgroundId) {
        List<Background> all = findAllBackgrounds();
        for (int i = 0; i < all.size(); i++) {
            if (all.get(i).getBackgroundId() == backgroundId) {
                return all.get(i);
            }
        }
        return null;
    }
}
