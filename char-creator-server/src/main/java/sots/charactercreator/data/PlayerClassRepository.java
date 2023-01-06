package sots.charactercreator.data;

import sots.charactercreator.models.Background;
import sots.charactercreator.models.PlayerClass;

import java.util.List;

public interface PlayerClassRepository {

    List<PlayerClass> findAllPlayerClasses();
    PlayerClass findPlayerClassById(int playerClassId);
}
