package um.Auxilium.models;

import jakarta.persistence.*;

import java.util.Collection;
@Entity
public class Hisa {
    private int hisna_stevilka;
    private String naslov;
    private double velikost;
    private boolean vrt;
    @OneToMany(mappedBy = "hisa", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    Collection<Soba> sobe;

    public void setHisna_stevilka(int hisna_stevilka) {
        this.hisna_stevilka = hisna_stevilka;
    }

    public void setNaslov(String naslov) {
        this.naslov = naslov;
    }

    public void setVelikost(double velikost) {
        this.velikost = velikost;
    }

    public void setVrt(boolean vrt) {
        this.vrt = vrt;
    }

    public void setSobe(Collection<Soba> sobe) {
        this.sobe = sobe;
    }

    public int getHisna_stevilka() {
        return hisna_stevilka;
    }

    public String getNaslov() {
        return naslov;
    }

    public double getVelikost() {
        return velikost;
    }

    public boolean isVrt() {
        return vrt;
    }

    public Collection<Soba> getSobe() {
        return sobe;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
