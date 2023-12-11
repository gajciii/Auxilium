package um.Auxilium.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Soba {

    private double velikost;

    private String ime;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public void setVelikost(double velikost) {
        this.velikost = velikost;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public void setHisa(Hisa hisa) {
        this.hisa = hisa;
    }

    public double getVelikost() {
        return velikost;
    }

    public String getIme() {
        return ime;
    }

    public Hisa getHisa() {
        return hisa;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="hisa_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    Hisa hisa;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
