package si.um.feri.ris.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/uporabniki")
    public Iterable<Uporabnik> seznamUporabnikov() {
        return uporabnikDao.findAll();
    }

    @GetMapping("/uporabnik/{id}")
    public ResponseEntity<Uporabnik> uporabnikID(@PathVariable Long id) {
        Optional<Uporabnik> uporabnik = uporabnikDao.findUporabnikById(id);
        if (uporabnik.isPresent()) {
            return ResponseEntity.ok(uporabnik.get());
        } else {
            return ResponseEntity.notFound().build();

        }
    }

    @GetMapping("/TopDonatorji")
    public List<Uporabnik> pridobiTopDonatorje() {
        return uporabnikDao.pridobiUporabnikeZVisokimiDonacijami();
    }


//    @PostMapping("/dodajDonacijo")
//    public Donacija dodajDonacijo(Uporabnik uporabnik, Donacija donacija) {
//        return uporabnik.dodajDonacijo(donacija);
//    }

    @PostMapping("/dodajDonacijoUporabniku/{uporabnikId}")
    public ResponseEntity<String> dodajDonacijoUporabniku(@PathVariable Long uporabnikId, @RequestBody Donacija novaDonacija) {
        Optional<Uporabnik> najdenUporabnik = uporabnikDao.findById(uporabnikId);
        if (najdenUporabnik.isPresent()) {
            Uporabnik uporabnik = najdenUporabnik.get();

            Donacija novaDonacijaEntiteta = new Donacija();
            novaDonacijaEntiteta.setZnesekDonacije(novaDonacija.getZnesekDonacije());
            novaDonacijaEntiteta = donacijaDao.save(novaDonacijaEntiteta);

            uporabnik.dodajDonacijo(novaDonacijaEntiteta);
            uporabnikDao.save(uporabnik);

            return ResponseEntity.ok("Donacija uspešno dodana uporabniku.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Uporabnik ni bil najden.");
        }
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
    public ResponseEntity<Uporabnik> urediPodatkeUporabnika(@PathVariable Long id, @RequestBody Uporabnik posodobljenUporabnik) {
        Uporabnik obstojecUporabnik = uporabnikDao.findById(id).orElse(null);

        if (obstojecUporabnik != null) {
            if (posodobljenUporabnik.getIme() != null) {
                obstojecUporabnik.setIme(posodobljenUporabnik.getIme());
            }
            if (posodobljenUporabnik.getPriimek() != null) {
                obstojecUporabnik.setPriimek(posodobljenUporabnik.getPriimek());
            }
            if (posodobljenUporabnik.getUporabniskoIme() != null) {
                obstojecUporabnik.setUporabniskoIme(posodobljenUporabnik.getUporabniskoIme());
            }
            if (posodobljenUporabnik.getGeslo() != null) {
                obstojecUporabnik.setGeslo(posodobljenUporabnik.getGeslo());
            }

            Uporabnik novUporabnik = uporabnikDao.save(obstojecUporabnik);
            return ResponseEntity.ok(novUporabnik);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/registracija")
    public ResponseEntity<String> regisracijaUporabnika(@RequestBody Uporabnik novUporabnik) {
        try {
            List<Uporabnik> obstojecUporabnik = uporabnikDao.findByUporabniskoIme(novUporabnik.getUporabniskoIme());
            if (obstojecUporabnik.isEmpty()) {
                uporabnikDao.save(novUporabnik);
                return ResponseEntity.ok(novUporabnik.getUporabniskoIme() + " uspešno registriran");
            } else {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Uporabnik s tem uporabniškim imenom že obstaja " + novUporabnik.getUporabniskoIme());
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Napaka pri registraciji uporabnika: " + e.getMessage());
        }
    }

    @PostMapping("/prijava")
    public ResponseEntity<String> prijavaUporabnika(@RequestBody Uporabnik prijavljenUporabnik) {
        try {
            if (prijavljenUporabnik.getUporabniskoIme() == null || prijavljenUporabnik.getGeslo() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Uporabniško ime ali geslo manjka.");
            }

            List<Uporabnik> uporabnik = uporabnikDao.findByUporabniskoIme(prijavljenUporabnik.getUporabniskoIme());

            if (uporabnik.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Uporabnik s tem uporabniškim imenom ne obstaja");
            } else if (!uporabnik.get(0).getGeslo().equals(prijavljenUporabnik.getGeslo())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Napačno geslo");
            } else {
                return ResponseEntity.ok("Prijava uspešna");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Napaka pri prijavi uporabnika: " + e.getMessage());
        }
    }

    @GetMapping("veckratniDonatorji")
    public List<Uporabnik> pridobiVeckratneDonatorje() {
        return uporabnikDao.najdiUporabnikeKiSoDonirali();
    }


    @GetMapping("/DonatorjiNad10")
    public List<Uporabnik> pridobiDonatorjeZnesekVecjiOd10() {
        return uporabnikDao.findDonatorjiZnesekVecjiOd10();
    }

    @GetMapping("/DonatorjiNad100")
    public List<Uporabnik> pridobiDonatorjeZnesekVecjiOd100() {
        return uporabnikDao.findDonatorjiZnesekVecjiOd100();
    }

    @GetMapping("/DonatorjiNad1000")
    public List<Uporabnik> pridobiDonatorjeZnesekVecjiOd1000() {
        return uporabnikDao.findDonatorjiZnesekVecjiOd1000();
    }

    @GetMapping("/DonatorjiNad10000")
    public List<Uporabnik> pridobiDonatorjeZnesekVecjiOd10000() {
        return uporabnikDao.findDonatorjiZnesekVecjiOd10000();
    }
}