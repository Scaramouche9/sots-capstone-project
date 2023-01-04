package sots.charactercreator.domain;

import org.springframework.stereotype.Service;
import sots.charactercreator.data.CharacterRepository;
import sots.charactercreator.models.Character;

import java.util.List;

@Service
public class CharacterService {

    private final CharacterRepository repository;

    public CharacterService(CharacterRepository repository) {
        this.repository = repository;
    }

    public List<Character> findAllCharacters() {
        return repository.findAllCharacters();
    }
}
