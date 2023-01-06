package sots.charactercreator.data;

import org.springframework.jdbc.core.RowMapper;
import sots.charactercreator.models.PlayerClass;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlayerClassMapper implements RowMapper<PlayerClass> {

    @Override
    public PlayerClass mapRow(ResultSet resultSet, int i) throws SQLException {
        PlayerClass playerClass = new PlayerClass();
        playerClass.setClassId(resultSet.getInt("class_id"));
        playerClass.setClassName(resultSet.getString("class_name"));

        return playerClass;
    }
}
