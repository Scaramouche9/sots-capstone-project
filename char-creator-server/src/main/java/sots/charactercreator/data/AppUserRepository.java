package sots.charactercreator.data;

import org.springframework.transaction.annotation.Transactional;
import sots.charactercreator.models.AppUser;

public interface AppUserRepository {

    @Transactional
    AppUser findByUsername(String username);

    @Transactional
    AppUser findByUserId(int id);

    @Transactional
    AppUser create(AppUser user);

    @Transactional
    boolean update(AppUser user);
}
