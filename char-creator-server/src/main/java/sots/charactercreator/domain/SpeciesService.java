package sots.charactercreator.domain;

import org.springframework.stereotype.Service;
import sots.charactercreator.data.SpeciesRepository;
import sots.charactercreator.models.Species;

import java.util.List;

@Service
public class SpeciesService {
    private final SpeciesRepository repository;

    public SpeciesService(SpeciesRepository repository) {
        this.repository = repository;
    }

    public List<Species> findAllSpecies() {
        return repository.findAllSpecies();
    }

    public Species findSpeciesById(int speciesId) {
        return repository.findSpeciesById(speciesId);
    }
}

