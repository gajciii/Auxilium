package si.um.feri.ris.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.um.feri.ris.models.Oskodovanec;

import java.util.List;

public interface PregledOskodovancev extends CrudRepository<Oskodovanec, Long> {


	@Query("select o from Oskodovanec o join o.nesrece n where n.id = :nesrecaId")
	List<Oskodovanec> findOskodovanciByNesrecaId(long nesrecaId);

	@Query("SELECT o FROM Oskodovanec o WHERE o.mocnejePoskodovan = true AND o.imaDruzino = false")
	List<Oskodovanec> findMocnejePoskodovanBrezDruzine();

}