package sots.charactercreator.data;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sots.charactercreator.models.PlayerClass;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PlayerClassJdbcTemplateRepositoryTest {

    @Autowired
    PlayerClassJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<PlayerClass> all = repository.findAllPlayerClasses();
        assertNotNull(all);
        assertEquals(4, all.size());
    }

    @Test
    void shouldFindExisting() {
        PlayerClass c = repository.findPlayerClassById(1);
        assertNotNull(c);
        assertEquals("Cleric", c.getClassName());
    }

    @Test
    void shouldNotFindMissing() {
        PlayerClass c = repository.findPlayerClassById(1000);
        assertNull(c);
    }

}