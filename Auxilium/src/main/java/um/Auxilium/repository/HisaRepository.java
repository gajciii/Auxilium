package um.Auxilium.repository;

import org.springframework.data.repository.CrudRepository;
import um.Auxilium.models.Hisa;

public interface HisaRepository extends CrudRepository<Hisa, Long> {
    Iterable<Hisa> findByVelikost(double velikost);
}
