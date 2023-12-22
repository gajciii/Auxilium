package si.um.feri.ris.models;
import si.um.feri.ris.repository.ListNesrec;
import si.um.feri.ris.repository.PregledOskodovancev;

import java.util.List;

public class Nesreca implements ListNesrec, PregledOskodovancev {

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


	@Override
	public List<Nesreca> prikaziSeznam(String opis) {
		return null;
	}

	@Override
	public Oskodovanec prikaziSeznam() {
		return null;
	}
}