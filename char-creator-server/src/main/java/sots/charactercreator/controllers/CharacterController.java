package sots.charactercreator.controllers;

import org.apache.coyote.Response;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/character-creator")
public class CharacterController {


    //Anyone can access
    @GetMapping
    public ResponseEntity<?> findAll() throws DataAccessException {
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
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
