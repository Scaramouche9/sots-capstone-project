package sots.charactercreator.controllers;

import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sots.charactercreator.domain.BackgroundService;
import sots.charactercreator.models.Background;

import java.util.List;

@RestController
@RequestMapping("/charactercreator/background")
public class BackgroundController {
    private final BackgroundService service;

    public BackgroundController(BackgroundService service) {
        this.service = service;
    }

    @GetMapping
    public List<Background> findAll() {
        return service.findAllBackgrounds();
    }

    //finds a list of characters by user id
    @GetMapping("/{id}")
    public Background findById(@PathVariable Integer id) throws DataAccessException {
        return service.findBackgroundById(id);
    }
}
