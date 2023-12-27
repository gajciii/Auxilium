package si.um.feri.ris.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}