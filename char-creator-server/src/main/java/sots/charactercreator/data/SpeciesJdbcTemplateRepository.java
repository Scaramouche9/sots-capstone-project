package sots.charactercreator.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import sots.charactercreator.models.Species;

import java.util.List;

@Repository
public class SpeciesJdbcTemplateRepository implements SpeciesRepository {
    private final JdbcTemplate jdbcTemplate;

    public SpeciesJdbcTemplateRepository (JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Species> findAllSpecies() {
        final String sql = "select species_id, species_name from species limit 5000;";
        return jdbcTemplate.query(sql, new SpeciesMapper());
    }

    @Override
    public Species findSpeciesById(int speciesId) {
        List<Species> all = findAllSpecies();
        for (int i = 0; i < all.size(); i++) {
            if (all.get(i).getSpeciesId() == speciesId) {
                return all.get(i);
            }
        }
        return null;
    }
}
