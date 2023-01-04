package sots.charactercreator.data;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sots.charactercreator.models.Character;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CharacterJdbcTemplateRepositoryTest {

    @Autowired
    CharacterJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @Test
    void findAllCharacters() {
        List<Character> all = repository.findAllCharacters();
        assertEquals(4, all.size());
        System.out.println(all.get(0).getDescription());
    }

}