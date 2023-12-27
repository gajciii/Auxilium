package si.um.feri.ris.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import si.um.feri.ris.models.Uporabnik;

import java.util.List;

public interface UporabnikRepository extends JpaRepository<Uporabnik, Long> {
    List<Uporabnik> findByIme(String ime);
}
