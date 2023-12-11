package si.um.feri.ris.models;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
public class Hisa {
    private int hisnaStevilka;
    private String naslov;
    private double velikost;
    private boolean vrt;
    @OneToMany(mappedBy = "hisa", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    Collection<Soba> sobe;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public int getHisnaStevilka() {
        return hisnaStevilka;
    }

    public void setHisnaStevilka(int hisnaStevilka) {
        this.hisnaStevilka = hisnaStevilka;
    }

    public String getNaslov() {
        return naslov;
    }

    public void setNaslov(String naslov) {
        this.naslov = naslov;
    }

    public double getVelikost() {
        return velikost;
    }

    public void setVelikost(double velikost) {
        this.velikost = velikost;
    }

    public boolean isVrt() {
        return vrt;
    }

    public void setVrt(boolean vrt) {
        this.vrt = vrt;
    }

    public Collection<Soba> getSobe() {
        return sobe;
    }

    public void setSobe(Collection<Soba> sobe) {
        this.sobe = sobe;
    }
}
