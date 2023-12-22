package si.um.feri.ris.models;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import si.um.feri.ris.models.Nesreca;
import si.um.feri.ris.models.Oskodovanec;
public class Administrator {

	@Id
	@GeneratedValue
	private long id;

	//TODO - NAREDI CEL CLASS

	private String uporabniskoIme;
	private String geslo;


	public String getUporabniskoIme() {
		return uporabniskoIme;
	}

	public void setUporabniskoIme(String uporabniskoIme) {
		this.uporabniskoIme = uporabniskoIme;
	}

	public String getGeslo() {
		return geslo;
	}

	public void setGeslo(String geslo) {
		this.geslo = geslo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}