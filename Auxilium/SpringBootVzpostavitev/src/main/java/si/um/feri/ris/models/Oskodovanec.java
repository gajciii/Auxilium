package si.um.feri.ris.models;
import jakarta.persistence.*;
import si.um.feri.ris.repository.PregledOskodovancev;

import java.util.List;

@Entity
public class Oskodovanec {

	@Id
	@GeneratedValue
	private long id;

	@ManyToMany
	@JoinTable(
			name = "Oskodovanec_Nesreca",
			joinColumns = @JoinColumn(name = "oskodovanec_id"),
			inverseJoinColumns = @JoinColumn(name = "nesreca_id")
	)
	List<Nesreca> nesrece;

	@ManyToMany
	@JoinTable(
			name = "Oskodovanec_Donacija",
			joinColumns = @JoinColumn(name = "oskodovanec_id"),
			inverseJoinColumns = @JoinColumn(name = "donacija_id")
	)
	List<Donacija> donacije;

	@ManyToOne
	@JoinColumn(name = "administrator_id")
	private Administrator administrator;

	private String ime;
	private String priimek;


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPriimek() {
		return priimek;
	}

	public void setPriimek(String priimek) {
		this.priimek = priimek;
	}

	public void dodajDonacijo(Donacija donacija) {
	}
}