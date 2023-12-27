package si.um.feri.ris.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import si.um.feri.ris.models.Oskodovanec;
import si.um.feri.ris.models.Uporabnik;
import si.um.feri.ris.models.Donacija;
import si.um.feri.ris.repository.PregledDonacij;

@RestController
@RequestMapping("/uporabniki")
public class UporabnikController {

    @Autowired
    private PregledDonacij donacijaDao;
    @GetMapping("/donacije")
    public Iterable<Donacija> seznamDonacij() {
        return donacijaDao.findAll();
    }

    @PostMapping
    public Donacija dodajDonacijo(Uporabnik uporabnik, Donacija donacija) {
        return uporabnik.dodajDonacijo(donacija);
    }


}