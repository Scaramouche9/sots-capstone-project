package sots.charactercreator.data;

import sots.charactercreator.models.Character;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CharacterMapper implements RowMapper<Character> {

    @Override
    public Character mapRow(ResultSet resultSet, int i) throws SQLException {
        Character character = new Character();
        character.setCharacterId(resultSet.getInt("character_id"));
        character.setCharacterName(resultSet.getString("character_name"));

        character.setSpeciesId(resultSet.getInt("species_id"));
        character.setClassId(resultSet.getInt("class_id"));
        character.setBackgroundId(resultSet.getInt("background_id"));
        character.setAlignmentId(resultSet.getInt("alignment_id"));

        character.setStrength(resultSet.getInt("strength"));
        character.setDexterity(resultSet.getInt("dexterity"));
        character.setConstitution(resultSet.getInt("constitution"));
        character.setIntelligence(resultSet.getInt("intelligence"));
        character.setWisdom(resultSet.getInt("wisdom"));
        character.setCharisma(resultSet.getInt("charisma"));

        character.setArmorClass(resultSet.getInt("armor_class"));
        character.setProficiencyBonus(resultSet.getInt("proficiency_bonus"));
        character.setSpeed(resultSet.getInt("speed"));
        character.setLevel(resultSet.getInt("level"));
        character.setHitpoints(resultSet.getInt("hitpoints"));

        character.setDescription(resultSet.getString("description"));
        character.setImage(resultSet.getString("image"));
        character.setAppUserId(resultSet.getInt("app_user_id"));
        character.setImage(resultSet.getString("image"));

        return character;
    }
}
