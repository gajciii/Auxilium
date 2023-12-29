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
    Optional<Uporabnik> findUporabnikById(long id);

    @Query("SELECT u FROM Uporabnik u " +
            "JOIN u.donacije d " +
            "GROUP BY u.id " +
            "HAVING SUM(d.znesekDonacije) > 500 AND COUNT(DISTINCT d) >= 3")
    List<Uporabnik> pridobiUporabnikeZVisokimiDonacijami();

    @Query("SELECT u FROM Uporabnik u")
    List<Uporabnik> findByUporabniskoIme(String uporabniskoIme);

}
