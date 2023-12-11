package si.um.feri.ris.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.um.feri.ris.models.Hisa;

import java.util.List;

public interface HisaRepository extends CrudRepository<Hisa, Long> {
//?1 -> vstavi prvi parameter v query
    @Query("select h from Hisa h, Soba s where s.hisa = h and s.velikost >= ?1")
    List<Hisa> vrniHisePoVelikostiSob(double velikost);
}
