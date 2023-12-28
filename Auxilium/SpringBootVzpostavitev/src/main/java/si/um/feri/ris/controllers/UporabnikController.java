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
import java.util.Optional;

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

    @GetMapping("/uporabnik")
    public ResponseEntity<Uporabnik> uporabnikID(@PathVariable Long id){
        Optional<Uporabnik> uporabnik = uporabnikDao.findUporabnikById(id);
        if(uporabnik.isPresent()){
            return ResponseEntity.ok(uporabnik.get());
        }
        else {
            return ResponseEntity.notFound().build();

        }
    }

    @GetMapping("/TopDonatorji")
    public List<Uporabnik> pridobiTopDonatorje(){
        return uporabnikDao.pridobiUporabnikeZVisokimiDonacijami();
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

    @PutMapping("/{id}")
    public ResponseEntity<Uporabnik> urediPodatkeUporabnika(@PathVariable Long id, @RequestBody Uporabnik posodobljenUporabnik){
        Uporabnik obstojecUporabnik = uporabnikDao.findById(id).orElse(null);

        if (obstojecUporabnik != null){
            obstojecUporabnik.setUporabniskoIme(posodobljenUporabnik.getUporabniskoIme());
            obstojecUporabnik.setIme(posodobljenUporabnik.getIme());
            obstojecUporabnik.setPriimek(posodobljenUporabnik.getPriimek());
            obstojecUporabnik.setGeslo(posodobljenUporabnik.getGeslo());

            Uporabnik novUporabnik = uporabnikDao.save(obstojecUporabnik);
            return ResponseEntity.ok(novUporabnik);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

}