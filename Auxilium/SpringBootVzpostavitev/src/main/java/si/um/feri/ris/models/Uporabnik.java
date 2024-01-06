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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Uporabnik(String uporabniskoIme, String ime, String priimek) {
        this.uporabniskoIme = uporabniskoIme;
        this.ime = ime;
        this.priimek = priimek;
    }


    public Donacija dodajDonacijo(Donacija donacija) {
        this.donacije.add(donacija);
        return donacija;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

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
}