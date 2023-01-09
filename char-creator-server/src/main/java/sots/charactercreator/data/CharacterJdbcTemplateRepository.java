package sots.charactercreator.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import sots.charactercreator.models.Character;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CharacterJdbcTemplateRepository implements CharacterRepository {
    private final JdbcTemplate jdbcTemplate;

    public CharacterJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Character> findAllCharacters() {
        final String sql = "select character_id, character_name, species_id, class_id, background_id, alignment_id, " +
                "strength, dexterity, constitution, intelligence, wisdom, charisma, armor_class, proficiency_bonus," +
                "speed, `level`, hitpoints, `description`, app_user_id, image from `character` limit 5000;";
        return jdbcTemplate.query(sql, new CharacterMapper());
    }

    @Override
    public Character findCharacterById(int characterId) {
        List<Character> all = findAllCharacters();
        for (int i = 0; i < all.size(); i++) {
            if (all.get(i).getCharacterId() == characterId) {
                return all.get(i);
            }
        }
        return null;
    }

    @Override
    public List<Character> findCharactersByUser(int appUserId) {
        List<Character> result = new ArrayList<>();
        List<Character> all = findAllCharacters();
        for (int i = 0; i < all.size(); i++) {
            if (all.get(i).getAppUserId() == appUserId) {
                result.add(all.get(i));
            }
        }
        return result;
    }


    @Override
    public Character addCharacter(Character character) {

        final String sql = "insert into `character` (character_name, species_id, class_id, background_id, alignment_id," +
                " strength, dexterity, constitution, intelligence, wisdom, charisma," +
                "armor_class, speed, `level`, hitpoints, `description`, app_user_id, image)"
                + "values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, character.getCharacterName());
            ps.setInt(2, character.getSpeciesId());
            ps.setInt(3, character.getClassId());
            ps.setInt(4, character.getBackgroundId());
            ps.setInt(5, character.getAlignmentId());
            ps.setInt(6, character.getStrength());
            ps.setInt(7, character.getDexterity());
            ps.setInt(8, character.getConstitution());
            ps.setInt(9, character.getIntelligence());
            ps.setInt(10, character.getWisdom());
            ps.setInt(11, character.getCharisma());
            ps.setInt(12, character.getArmorClass());
            ps.setInt(13, character.getSpeed());
            ps.setInt(14, character.getLevel());
            ps.setInt(15, character.getHitpoints());
            ps.setString(16, character.getDescription());
            ps.setInt(17, character.getAppUserId());
            ps.setString(18, character.getImage());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        character.setCharacterId(keyHolder.getKey().intValue());
        return character;
    }

    @Override
    public boolean updateCharacter(Character character) {
        final String sql = "update `character` set " +
                "character_name = ?, " +
                "species_id = ?, " +
                "class_id = ?, " +
                "background_id = ?, " +
                "alignment_id = ?, "+
                "strength = ?, " +
                "dexterity = ?, " +
                "constitution = ?, " +
                "intelligence = ?, " +
                "wisdom = ?, " +
                "charisma = ?, " +
                "armor_class = ?, " +
                "speed = ?, " +
                "`level` = ?, " +
                "hitpoints = ?, " +
                "`description` = ?, " +
                "app_user_id = ?, " +
                "image = ? " +
                "where character_id = ?;";

        return jdbcTemplate.update(sql,
                character.getCharacterName(),
                character.getSpeciesId(),
                character.getClassId(),
                character.getBackgroundId(),
                character.getAlignmentId(),
                character.getStrength(),
                character.getDexterity(),
                character.getConstitution(),
                character.getIntelligence(),
                character.getWisdom(),
                character.getCharisma(),
                character.getArmorClass(),
                character.getSpeed(),
                character.getLevel(),
                character.getHitpoints(),
                character.getDescription(),
                character.getAppUserId(),
                character.getImage(),
                character.getCharacterId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteCharacter(int characterId) {
        return jdbcTemplate.update(
                "delete from `character` where character_id = ?", characterId) > 0;
    }
}
