package sots.charactercreator.controllers;

import org.apache.coyote.Response;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sots.charactercreator.domain.CharacterService;
import sots.charactercreator.domain.Result;
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

    //finds a list of characters by user id
    @GetMapping("/user/{id}")
    public List<Character> findByUser(@PathVariable Integer id) throws DataAccessException {
        return service.findCharactersByUser(id);
    }

    //finds a character by character id
    @GetMapping("/characters/{id}")
    public Character findCharacterById(@PathVariable Integer id) throws DataAccessException {
        return service.findCharacterById(id);
    }

    //Users and admins
    @PostMapping
    public ResponseEntity<?> create(@RequestBody(required = false) Character character) throws DataAccessException {
        Result<Character> result = service.addCharacter(character);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //Users and admins
    @PutMapping("/characters/{id}")
    public ResponseEntity<?> update(@PathVariable int characterId, @RequestBody Character character) throws DataAccessException {
        if (characterId != character.getCharacterId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Character> result = service.updateCharacter(character);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //Admins only
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer characterId) throws DataAccessException {
        if (service.deleteCharacter(characterId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
