package sots.charactercreator.controllers;

import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sots.charactercreator.domain.SpeciesService;
import sots.charactercreator.models.Species;

import java.util.List;

@RestController
@RequestMapping("/charactercreator/species")
public class SpeciesController {
    private final SpeciesService service;

    public SpeciesController(SpeciesService service) {
        this.service = service;
    }

    @GetMapping
    public List<Species> findAll() {
        return service.findAllSpecies();
    }

    //finds a list of characters by user id
    @GetMapping("/{id}")
    public Species findById(@PathVariable Integer id) throws DataAccessException {
        return service.findSpeciesById(id);
    }
}
