package sots.charactercreator.data;

import org.springframework.jdbc.core.RowMapper;
import sots.charactercreator.models.Species;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SpeciesMapper implements RowMapper<Species> {

    @Override
    public Species mapRow(ResultSet resultSet, int i) throws SQLException {
        Species species = new Species();
        species.setSpeciesId(resultSet.getInt("species_id"));
        species.setSpeciesName(resultSet.getString("species_name"));

        return species;
    }
}
