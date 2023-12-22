package si.um.feri.ris.models;
import si.um.feri.ris.repository.PregledOskodovancev;
public class Oskodovanec implements PregledOskodovancev {

	private String ime;
	private String priimek;

	@Override
	public Oskodovanec prikaziSeznam() {
		return null;
	}
}