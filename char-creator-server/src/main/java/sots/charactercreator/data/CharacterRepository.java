package sots.charactercreator.data;

import sots.charactercreator.models.Character;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CharacterRepository {

    List<Character> findAllCharacters();
    Character findCharacterById(int characterId);
    List<Character> findCharactersByUser(int appUserId);
    Character addCharacter(Character character);
    boolean updateCharacter(Character character);
    @Transactional
    boolean deleteCharacter(int characterId);

}
