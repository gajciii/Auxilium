package si.um.feri.ris.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Donacija;
import si.um.feri.ris.repository.PregledDonacij;

@RestController
@RequestMapping("/donacije")
public class DonacijaController {

    @Autowired
    private PregledDonacij donacijaDao;

    @GetMapping("/donacije")
    public Iterable<Donacija> prikaziDonacijo(){
        return donacijaDao.findAll();
    }

    @GetMapping("/donacije/{id}")
    public Donacija prikaziDonacijo(@PathVariable Long id){
        return donacijaDao.findById(id).orElse(null);
    }

    @DeleteMapping("izbrisiDonacijo/{id}")
    public ResponseEntity<Donacija> izbrisiDonacijo(@PathVariable Long id){
        try {
            Donacija donacija = donacijaDao.findById(id).orElse(null);
            if (donacija != null) {
                donacijaDao.delete(donacija);
                return ResponseEntity.ok(donacija);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e) {
            System.out.println(e + "\nNapaka pri brisanju donacije");
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/urediDonacijo/{id}")
    public ResponseEntity<Donacija> urediDonacijo(@PathVariable Long id, @RequestBody Donacija posodobljenaDonacija){
        Donacija obstojecaDonacija = donacijaDao.findById(id).orElse(null);
        if(obstojecaDonacija != null){
            obstojecaDonacija.setZnesekDonacije(posodobljenaDonacija.getZnesekDonacije());
            obstojecaDonacija.setOskodovanci(posodobljenaDonacija.getOskodovanci());
            donacijaDao.save(obstojecaDonacija);
            return ResponseEntity.ok(obstojecaDonacija);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/dodajDonacijo")
    public ResponseEntity<String> dodajDonacijo(@RequestBody Donacija novaDonacija) {
        try {
            System.out.println("Vrednost zneska donacije: " + novaDonacija.getZnesekDonacije());
            donacijaDao.save(novaDonacija);
            return ResponseEntity.ok("Donacija uspešno dodana. " + novaDonacija.getZnesekDonacije() + "€");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Napaka pri dodajanju donacije: " + e.getMessage());
        }
    }


}

