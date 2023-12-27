package si.um.feri.ris.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Oskodovanec;
import si.um.feri.ris.models.Uporabnik;
import si.um.feri.ris.models.Donacija;
import si.um.feri.ris.repository.PregledDonacij;
import si.um.feri.ris.repository.UporabnikRepository;

import java.util.List;

@RestController
@RequestMapping("/uporabniki")
public class UporabnikController {

    @Autowired
    private PregledDonacij donacijaDao;

    @Autowired
    private UporabnikRepository uporabnikDao;
    @GetMapping("/donacije")
    public Iterable<Donacija> seznamDonacij() {
        return donacijaDao.findAll();
    }


    @PostMapping
    public Donacija dodajDonacijo(Uporabnik uporabnik, Donacija donacija) {
        return uporabnik.dodajDonacijo(donacija);
    }


    @DeleteMapping("/uporabniki/{ime}")
    public ResponseEntity<String> odstraniUporabnikePoImenu(@PathVariable String ime) {
        List<Uporabnik> uporabniki = uporabnikDao.findByIme(ime);
        if (!uporabniki.isEmpty()) {
            uporabnikDao.deleteAll(uporabniki);
            return ResponseEntity.ok("Uporabniki z imenom " + ime + " uspešno odstranjeni.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}