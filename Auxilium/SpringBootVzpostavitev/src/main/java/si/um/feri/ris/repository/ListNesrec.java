package si.um.feri.ris.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.um.feri.ris.models.Nesreca;

import java.util.List;

public interface ListNesrec extends CrudRepository<Nesreca, Long> {


//	@Query("select n from Nesreca n join n.oskodovanci o where o.id = :id")
//	List<Nesreca> prikaziSeznam(String opis);

}
