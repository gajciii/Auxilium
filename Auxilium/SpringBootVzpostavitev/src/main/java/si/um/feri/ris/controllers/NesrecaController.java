package si.um.feri.ris.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Nesreca;
import si.um.feri.ris.repository.ListNesrec;
@RestController
@RequestMapping("/nesrece")
public class NesrecaController {

    @Autowired
    private ListNesrec nesrecaDAO;
    @GetMapping("/nesrece")
    public Iterable<Nesreca> vrniNesrece(){
        return nesrecaDAO.findAll();
    }

    @PostMapping
    public Nesreca dodajNesreco(Nesreca nesreca){
        return nesrecaDAO.save(nesreca);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nesreca> vrniNesrecoPoId(@PathVariable Long id) {
        try {
            // Uporabite nesrecaDAO za iskanje nesreče po ID
            Nesreca nesreca = nesrecaDAO.findById(Math.toIntExact(id)).orElseThrow(() -> new Exception("Nesreca not found with id: " + id));

            return ResponseEntity.ok(nesreca);
        } catch (Exception e) {
            System.out.println(e + "\n napaka pri pridobivanju Id-ja");;
            return ResponseEntity.notFound().build();
        }
    }
}