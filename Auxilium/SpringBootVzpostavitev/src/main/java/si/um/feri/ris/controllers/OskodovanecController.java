package si.um.feri.ris.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Oskodovanec;
import si.um.feri.ris.repository.PregledOskodovancev;

@RestController
@RequestMapping("/oskodovanci")
public class OskodovanecController {

    @Autowired
    private PregledOskodovancev oskodovanecDao;

    @GetMapping("/oskodovanci")
    public Iterable<Oskodovanec> vrniOskodovance() {
        return oskodovanecDao.findAll();
    }

    @GetMapping("/oskodovanci/{id}")
    public Oskodovanec vrniOskodovanca(long id) {
        return oskodovanecDao.findById(id).get();
    }

    @PostMapping
    public Oskodovanec dodajOskodovanca(Oskodovanec oskodovanec) {

        return oskodovanecDao.save(oskodovanec);
    }

    @DeleteMapping("/izbrisiOskodovanca/{id}")
    public ResponseEntity<Object> izbrisiOskodovanca(@PathVariable long id){
        try {
            Oskodovanec oskodovanec = oskodovanecDao.findById(id).orElse(null);
            if (oskodovanec != null) {
                oskodovanecDao.delete(oskodovanec);
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Napaka pri brisanju podatkov: " + e.getMessage());
        }
    }

    @PutMapping("/urediOskodovanca/{id}")
    public ResponseEntity<Oskodovanec> urediOskodovanca(@PathVariable long id, @RequestBody Oskodovanec posodobljenOskodovanec){
        Oskodovanec obstojecOskodovanec = oskodovanecDao.findById(id).orElse(null);

        try {
            if(obstojecOskodovanec != null){
                if(posodobljenOskodovanec.getIme() != null){

                    obstojecOskodovanec.setIme(obstojecOskodovanec.getIme());
                }
                if(posodobljenOskodovanec.getPriimek() != null){

                    obstojecOskodovanec.setPriimek(posodobljenOskodovanec.getPriimek());
                }
                oskodovanecDao.save(obstojecOskodovanec);
                return ResponseEntity.ok(obstojecOskodovanec);
            }
            else{
                return ResponseEntity.notFound().build();
            }
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(obstojecOskodovanec);
        }
    }


}