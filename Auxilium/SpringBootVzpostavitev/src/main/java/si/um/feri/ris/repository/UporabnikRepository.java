package si.um.feri.ris.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import si.um.feri.ris.models.Uporabnik;

import java.util.List;
import java.util.Optional;

public interface UporabnikRepository extends JpaRepository<Uporabnik, Long> {
    List<Uporabnik> findByIme(String ime);

    @Query("SELECT u FROM Uporabnik u")
    Optional<Uporabnik> findUporabnikById(Long id);
}
