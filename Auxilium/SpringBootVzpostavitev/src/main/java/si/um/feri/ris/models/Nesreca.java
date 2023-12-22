package si.um.feri.ris.models;
import jakarta.persistence.*;
import si.um.feri.ris.repository.ListNesrec;
import si.um.feri.ris.repository.PregledOskodovancev;

import java.util.Collection;
import java.util.List;
@Entity
public class Nesreca{

	@Id
	@GeneratedValue
	private long id;

	@ManyToMany(mappedBy = "nesrece", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Oskodovanec> oskodovanci;

	private int datum;
	private String opis;
	private String lokacija;

	public int getDatum() {
		return this.datum;
	}

	public void setDatum(int datum) {
		this.datum = datum;
	}

	public String getLokacija() {
		return this.lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
}