package si.um.feri.ris.models;
import si.um.feri.ris.repository.ListNesrec;

import java.util.List;

public class Uporabnik implements ListNesrec {

	private String uporabniskoIme;
	private String geslo;
	private String ime;
	private String priimek;

	public void seznamDonacij() {
		// TODO - implement Uporabnik.seznamDonacij
		throw new UnsupportedOperationException();
	}

	public void dodajDonacijo() {
		// TODO - implement Uporabnik.dodajDonacijo
		throw new UnsupportedOperationException();
	}

	public void odstraniDonacijo() {
		// TODO - implement Uporabnik.odstraniDonacijo
		throw new UnsupportedOperationException();
	}


	@Override
	public List<Nesreca> prikaziSeznam(String opis) {
		return null;
	}
}