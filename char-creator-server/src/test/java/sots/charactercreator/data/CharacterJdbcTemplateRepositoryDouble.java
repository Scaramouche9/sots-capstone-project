package sots.charactercreator.data;

import sots.charactercreator.models.Character;

import java.util.ArrayList;
import java.util.List;

public class CharacterJdbcTemplateRepositoryDouble implements CharacterRepository {

    private List<Character> characterList = new ArrayList<>();

    public CharacterJdbcTemplateRepositoryDouble() {
        characterList.add(new Character(1, "Bobby", 1, 1, 1, 1,2));
        characterList.add(new Character(2, "Jobby", 2, 2, 2, 2,2));
        characterList.add(new Character(3, "Hobby", 3, 3, 3, 3,2));
    }
    @Override
    public List<Character> findAllCharacters() {
        return characterList;
    }

    @Override
    public Character findCharacterById(int characterId) {
        return characterList.get(characterId - 1);
    }

    @Override
    public List<Character> findCharactersByUser(int AppUserId) {
        return characterList;
    }

    @Override
    public Character addCharacter(Character character) {
        characterList.add(character);
        return character;
    }

    @Override
    public boolean updateCharacter(Character character) {
        for (int i = 0; i < characterList.size(); i++) {
            if (character.getCharacterId() == characterList.get(i).getCharacterId()) {
                characterList.remove(i);
                characterList.add(character);
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean deleteCharacter(int characterId) {
        for (int i = 0; i < characterList.size(); i++) {
            if (characterId == characterList.get(i).getCharacterId()) {
                characterList.remove(i);
                return true;
            }
        }
        return false;
    }
}
