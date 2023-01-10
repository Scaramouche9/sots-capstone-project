package sots.charactercreator.controllers;

import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sots.charactercreator.domain.PlayerClassService;
import sots.charactercreator.models.PlayerClass;

import java.util.List;

@RestController
@RequestMapping("/charactercreator/playerclass")
public class PlayerClassController {
    private final PlayerClassService service;

    public PlayerClassController(PlayerClassService service) {
        this.service = service;
    }

    @GetMapping
    public List<PlayerClass> findAll() {
        return service.findAllPlayerClasses();
    }

    //finds a list of characters by user id
    @GetMapping("/{id}")
    public PlayerClass findById(@PathVariable Integer id) throws DataAccessException {
        return service.findPlayerClassById(id);
    }
}
