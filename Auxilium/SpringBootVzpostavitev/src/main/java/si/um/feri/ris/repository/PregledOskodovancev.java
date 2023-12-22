package si.um.feri.ris.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.um.feri.ris.models.Oskodovanec;

import java.util.List;

public interface PregledOskodovancev extends CrudRepository<Oskodovanec, Integer> {


	@Query("select o from Oskodovanec o join o.nesrece n where n.id = :nesrecaId")
	List<Oskodovanec> findOskodovanciByNesrecaId(long nesrecaId);

}