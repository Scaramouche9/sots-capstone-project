package sots.charactercreator.controllers;

import org.apache.coyote.Response;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sots.charactercreator.domain.CharacterService;
import sots.charactercreator.models.Character;

import java.util.List;


@RestController
@RequestMapping("/charactercreator")
public class CharacterController {

    private final CharacterService service;

    public CharacterController(CharacterService service) {
        this.service = service;
    }

    @GetMapping
    public List<Character> findAll() {
        return service.findAllCharacters();
    }

    //Anyone can access
    @GetMapping("/{id}")
    public ResponseEntity<?> findBySection(@PathVariable Integer id) throws DataAccessException {

        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }


    //Users and admins
    @PostMapping
    public ResponseEntity<?> create(@RequestBody(required = false) Character character) throws DataAccessException {

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    //Admins only
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) throws DataAccessException {

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
