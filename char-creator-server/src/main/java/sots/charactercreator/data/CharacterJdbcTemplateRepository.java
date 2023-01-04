package sots.charactercreator.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import sots.charactercreator.models.Character;

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
                "speed, `level`, hitpoints, `description` from `character` limit 5000;";
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
    public Character addCharacter(Character character) {

        return null;
    }

    @Override
    public boolean updateCharacter(Character character) {
        return false;
    }

    @Override
    @Transactional
    public boolean deleteCharacter(int characterId) {
        return false;
    }
}
