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
        assertEquals(all.get(1).getCharacterName(), "Jobby");
    }

    @Test
    void shouldFindByUser() {
        List<Character> allUser = service.findCharactersByUser(2);
        assertEquals(allUser.get(1).getCharacterName(), "Jobby");
    }

    @Test
    void shouldFindById() {
        Character c = service.findCharacterById(2);
        assertEquals("Jobby", c.getCharacterName());
    }

    @Test
    void shouldAddValid() {
        Character c = new Character();
        c.setCharacterName("Dobby");
        c.setSpeciesId(4);
        c.setClassId(4);
        c.setBackgroundId(4);
        c.setAlignmentId(4);
        c.setAppUserId(3);
        int prevSize = service.findAllCharacters().size();
        assertTrue(service.addCharacter(c).isSuccess());
        assertEquals(prevSize + 1, service.findAllCharacters().size());
    }

    @Test
    void shouldNotAddNull() {
        Character c = new Character();
        assertFalse(service.addCharacter(c).isSuccess());
    }

    @Test
    void shouldNotAddMissingSpecies() {
        Character c = new Character();
        c.setCharacterName("Blobby");
        c.setClassId(2);
        c.setBackgroundId(3);
        c.setAlignmentId(4);
        c.setAppUserId(3);
        assertFalse(service.addCharacter(c).isSuccess());
    }

    @Test
    void shouldNotAddMissingClass() {
        Character c = new Character();
        c.setCharacterName("Blobby");
        c.setSpeciesId(1);
        c.setBackgroundId(3);
        c.setAlignmentId(4);
        c.setAppUserId(3);
        assertFalse(service.addCharacter(c).isSuccess());
    }

    @Test
    void shouldNotAddMissingBackground() {
        Character c = new Character();
        c.setCharacterName("Blobby");
        c.setSpeciesId(1);
        c.setClassId(2);
        c.setAlignmentId(4);
        c.setAppUserId(3);
        assertFalse(service.addCharacter(c).isSuccess());
    }

    @Test
    void shouldNotAddMissingAlignment() {
        Character c = new Character();
        c.setCharacterName("Blobby");
        c.setSpeciesId(1);
        c.setClassId(2);
        c.setBackgroundId(3);
        c.setAppUserId(3);
        assertFalse(service.addCharacter(c).isSuccess());
    }

    @Test
    void shouldNotAddMissingUser() {
        Character c = new Character();
        c.setCharacterName("Blobby");
        c.setSpeciesId(1);
        c.setClassId(2);
        c.setBackgroundId(3);
        c.setAlignmentId(4);
        assertFalse(service.addCharacter(c).isSuccess());
    }

    @Test
    void shouldUpdateValid() {
        Character c = new Character(1, "Bobby B Brogubus", 1, 1, 1, 1,2);
        assertTrue(service.updateCharacter(c).isSuccess());
        assertEquals("Bobby B Brogubus", service.findCharacterById(1).getCharacterName());
    }

    @Test
    void shouldNotUpdateInvalid() {
        Character c = new Character(100, "Bobby B Brogubus", 1, 1, 1, 1,2);
        assertFalse(service.updateCharacter(c).isSuccess());
    }

    @Test
    void shouldDeleteExisting() {
        int prevSize = service.findAllCharacters().size();
        assertTrue(service.deleteCharacter(3));
        assertEquals(prevSize - 1, service.findAllCharacters().size());
    }

    @Test
    void shouldNotDeleteMissing() {
        int prevSize = service.findAllCharacters().size();
        assertFalse(service.deleteCharacter(3000));
        assertEquals(prevSize, service.findAllCharacters().size());
    }
}