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

    public Character findCharacterById(int characterId) {
        return repository.findCharacterById(characterId);
    }

    public List<Character> findCharactersByUser(int userId) {
        return repository.findCharactersByUser(userId);
    }

    public Result<Character> addCharacter(Character character) {
        Result<Character> result = validate(character);
        if (!result.isSuccess()) {
            return result;
        }

        repository.addCharacter(character);

        return result;
    }

    public Result<Character> updateCharacter(Character character) {
        Result<Character> result = validate(character);
        if (character.getCharacterId() < 0) {
            result.addMessage("Invalid Character ID", ResultType.INVALID);
            return result;
        }

        if (!result.isSuccess()) {
            return result;
        }

        if (!repository.updateCharacter(character)) {
            result.addMessage("Character not found", ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteCharacter(int characterId) {
        return repository.deleteCharacter(characterId);
    }

    private Result<Character> validate(Character character) {
        Result<Character> result = new Result<>();
        result.setPayload(character);
        if (character == null) {
            result.addMessage("Character cannot be null", ResultType.INVALID);
            return result;
        }

        if (character.getSpeciesId() < 1) {
            result.addMessage("Invalid Species ID", ResultType.INVALID);
        }

        if (character.getClassId() < 1) {
            result.addMessage("Invalid Class ID", ResultType.INVALID);
        }

        if (character.getBackgroundId() < 1) {
            result.addMessage("Invalid Background ID", ResultType.INVALID);
        }

        if (character.getAlignmentId() < 1) {
            result.addMessage("Invalid Alignment ID", ResultType.INVALID);
        }

        if (character.getAppUserId() < 1) {
            result.addMessage("Invalid User ID", ResultType.INVALID);
        }

        return result;
    }
}
