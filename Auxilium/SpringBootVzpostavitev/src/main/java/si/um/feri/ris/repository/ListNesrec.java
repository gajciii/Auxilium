package si.um.feri.ris.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.um.feri.ris.models.Nesreca;

import java.util.List;

public interface ListNesrec extends CrudRepository<Nesreca, Integer> {


	@Query("select n from Nesreca n, Oskodovanec o where o.nesrca = n");
	List<Nesreca> prikaziSeznam(String opis);

}