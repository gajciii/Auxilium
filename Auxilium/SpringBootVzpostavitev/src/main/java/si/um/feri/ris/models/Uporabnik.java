package si.um.feri.ris.models;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import si.um.feri.ris.repository.ListNesrec;

import java.util.List;
@Entity
public class Uporabnik {

    @Id
    @GeneratedValue
    private long id;


    @ManyToMany
    @JoinTable(
            name = "Uporabnik_Donacija",
            joinColumns = @JoinColumn(name = "uporabnik_id"),
            inverseJoinColumns = @JoinColumn(name = "donacija_id")
    )
    List<Donacija> donacije;


    private String uporabniskoIme;
    private String geslo;
    private String ime;
    private String priimek;


    public Donacija dodajDonacijo(Donacija donacija) {
        this.donacije.add(donacija);
        return donacija;
    }
}