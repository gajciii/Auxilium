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

}