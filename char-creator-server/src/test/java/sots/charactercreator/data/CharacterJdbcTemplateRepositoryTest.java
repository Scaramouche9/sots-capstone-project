package sots.charactercreator.data;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sots.charactercreator.models.Character;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CharacterJdbcTemplateRepositoryTest {

    @Autowired
    CharacterJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Character> all = repository.findAllCharacters();
        assertTrue(4 >= all.size() && all.size() >= 3);
        System.out.println(all.get(0).getDescription());
    }

    @Test
    void shouldFindExisting() {
        Character c = repository.findCharacterById(1);
        assertNotNull(c);
        assertEquals("Sir Brobert", c.getCharacterName());
    }

    @Test
    void shouldNotFindMissing() {
        Character c = repository.findCharacterById(1000);
        assertNull(c);
    }

    @Test
    void shouldFindByUser() {
        List<Character> allUser = repository.findCharactersByUser(2);
        assertTrue(4 >= allUser.size() && allUser.size() >= 3);
        System.out.println(allUser.get(0).getDescription());
    }

    @Test
    void shouldAddValid() {
        Character c = new Character();
        c.setCharacterName("Aloros");
        c.setSpeciesId(2);
        c.setClassId(2);
        c.setBackgroundId(5);
        c.setAlignmentId(7);
        c.setAppUserId(2);
        int previousSize = repository.findAllCharacters().size();
        assertNotNull(repository.addCharacter(c));
        assertEquals(previousSize + 1, repository.findAllCharacters().size());
    }

    @Test
    void shouldUpdate() {
        Character c = repository.findCharacterById(3);
        System.out.println(c.getCharacterName());
        c.setCharacterName("Lame Elf");
        repository.updateCharacter(c);
        System.out.println(repository.findCharacterById(3).getCharacterName());
        assertEquals("Lame Elf", repository.findCharacterById(3).getCharacterName());
    }

    @Test
    void shouldDeleteExisting() {
        int previousSize = repository.findAllCharacters().size();
        assertTrue(repository.deleteCharacter(4));
        assertEquals(previousSize - 1, repository.findAllCharacters().size());
    }

    @Test
    void shouldNotDeleteMissing() {
        int previousSize = repository.findAllCharacters().size();
        assertFalse(repository.deleteCharacter(400));
        assertEquals(previousSize, repository.findAllCharacters().size());
    }

}