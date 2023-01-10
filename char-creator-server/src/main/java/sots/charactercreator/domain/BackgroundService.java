package sots.charactercreator.domain;

import org.springframework.stereotype.Service;
import sots.charactercreator.data.BackgroundRepository;
import sots.charactercreator.models.Background;

import java.util.List;

@Service
public class BackgroundService {

    private final BackgroundRepository repository;

    public BackgroundService(BackgroundRepository repository) {
        this.repository = repository;
    }

    public List<Background> findAllBackgrounds() {
        return repository.findAllBackgrounds();
    }

    public Background findBackgroundById(int backgroundId) {
        return repository.findBackgroundById(backgroundId);
    }
}
