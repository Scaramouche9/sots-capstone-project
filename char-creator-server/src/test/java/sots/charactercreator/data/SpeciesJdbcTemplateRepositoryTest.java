package sots.charactercreator.data;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sots.charactercreator.models.Species;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SpeciesJdbcTemplateRepositoryTest {

    @Autowired
    SpeciesJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Species> all = repository.findAllSpecies();
        assertNotNull(all);
        assertEquals(4, all.size());
    }

    @Test
    void shouldFindExisting() {
        Species s = repository.findSpeciesById(1);
        assertNotNull(s);
        assertEquals("Dwarf", s.getSpeciesName());
    }

    @Test
    void shouldNotFindMissing() {
        Species s = repository.findSpeciesById(1000);
        assertNull(s);
    }
}