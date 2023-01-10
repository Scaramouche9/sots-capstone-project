package sots.charactercreator.data;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sots.charactercreator.models.Background;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BackgroundJdbcTemplateRepositoryTest {
    @Autowired
    BackgroundJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Background> all = repository.findAllBackgrounds();
        assertNotNull(all);
        assertEquals(6, all.size());
    }

    @Test
    void shouldFindExisting() {
        Background b = repository.findBackgroundById(1);
        assertNotNull(b);
        assertEquals("Acolyte", b.getBackgroundName());
    }

    @Test
    void shouldNotFindMissing() {
        Background b = repository.findBackgroundById(1000);
        assertNull(b);
    }
}