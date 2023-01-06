package sots.charactercreator.data;

import sots.charactercreator.models.Background;
import sots.charactercreator.models.Character;

import java.util.List;

public interface BackgroundRepository {

        List<Background> findAllBackgrounds();
        Background findBackgroundById(int backgroundId);
}
