package sots.charactercreator.domain;

import org.junit.jupiter.api.Test;
import sots.charactercreator.data.CharacterJdbcTemplateRepositoryDouble;
import sots.charactercreator.models.Character;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CharacterServiceTest {

    CharacterService service = new CharacterService(new CharacterJdbcTemplateRepositoryDouble());

    @Test
    void shouldFindAll() {
        List<Character> all = service.findAllCharacters();
        assertEquals(3, all.size());
    }
}