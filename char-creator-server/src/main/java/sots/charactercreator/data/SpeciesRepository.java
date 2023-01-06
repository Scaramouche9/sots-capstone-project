package sots.charactercreator.data;

import sots.charactercreator.models.Background;
import sots.charactercreator.models.Species;

import java.util.List;

public interface SpeciesRepository {

    List<Species> findAllSpecies();
    Species findSpeciesById(int speciesId);
}
