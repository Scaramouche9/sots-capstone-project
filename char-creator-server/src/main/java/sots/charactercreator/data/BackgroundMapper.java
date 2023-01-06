package sots.charactercreator.data;

import org.springframework.jdbc.core.RowMapper;
import sots.charactercreator.models.Background;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BackgroundMapper implements RowMapper<Background> {

    @Override
    public Background mapRow(ResultSet resultSet, int i) throws SQLException {
        Background background = new Background();
        background.setBackgroundId(resultSet.getInt("background_id"));
        background.setBackgroundName(resultSet.getString("background_name"));

        return background;
    }
}


