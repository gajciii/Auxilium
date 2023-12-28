package si.um.feri.ris.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Nesreca;
import si.um.feri.ris.models.Oskodovanec;
import si.um.feri.ris.repository.ListNesrec;
import si.um.feri.ris.repository.PregledDonacij;
import si.um.feri.ris.repository.PregledOskodovancev;

import java.util.Optional;

@RestController
@RequestMapping("/administratorji")
public class AdministratorController {

    @Autowired
    private ListNesrec nesrecaDAO;
    @Autowired
    private PregledOskodovancev oskodovanciDAO;

    @PostMapping
    public ResponseEntity<Nesreca> dodajNesreco(@RequestBody Nesreca nesreca) {
        nesrecaDAO.save(nesreca);
        return ResponseEntity.ok(nesreca);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> izbrisiNesreco(@PathVariable long id) {
        Optional<Nesreca> nesreca = nesrecaDAO.findById(id);
        if (nesreca.isPresent()) {
            nesrecaDAO.deleteById(id);
            return ResponseEntity.ok("Nesreča uspešno izbrisana");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/urediNesreco")
    public ResponseEntity<Nesreca> urediNesreco(@RequestBody Nesreca nesreca) {
        Optional<Nesreca> existingNesreca = nesrecaDAO.findById(nesreca.getId());

        if (existingNesreca.isPresent()) {
            existingNesreca.get().setDatum(nesreca.getDatum());
            existingNesreca.get().setLokacija(nesreca.getLokacija());
            existingNesreca.get().setOpis(nesreca.getOpis());
            nesrecaDAO.save(existingNesreca.get());

            return ResponseEntity.ok(existingNesreca.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/dodajOskodovanca")
    public ResponseEntity<Oskodovanec> dodajOskodovanca(@RequestBody Oskodovanec oskodovanec) {
        oskodovanciDAO.save(oskodovanec);
        return ResponseEntity.ok(oskodovanec);
    }

    @DeleteMapping("/odstraniOskodovanca/{id}")
    public ResponseEntity<String> odstraniOskodovanca(@PathVariable long id) {
        Optional<Oskodovanec> oskodovanec = oskodovanciDAO.findById(id);
        if (oskodovanec.isPresent()) {
            oskodovanciDAO.deleteById(id);
            return ResponseEntity.ok("Oškodovanec uspešno odstranjen");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Oškodovanec s podanim ID-jem ni bil najden");
        }
    }
}