package sots.charactercreator.domain;

import org.springframework.stereotype.Service;
import sots.charactercreator.data.PlayerClassRepository;
import sots.charactercreator.models.PlayerClass;

import java.util.List;

@Service
public class PlayerClassService {
    private final PlayerClassRepository repository;

    public PlayerClassService(PlayerClassRepository repository) {
        this.repository = repository;
    }

    public List<PlayerClass> findAllPlayerClasses() {
        return repository.findAllPlayerClasses();
    }

    public PlayerClass findPlayerClassById(int playerClassId) {
        return repository.findPlayerClassById(playerClassId);
    }
}
