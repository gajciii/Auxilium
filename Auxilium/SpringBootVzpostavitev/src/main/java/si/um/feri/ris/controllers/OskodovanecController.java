package si.um.feri.ris.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

    @PostMapping
    public Oskodovanec dodajOskodovanca(Oskodovanec oskodovanec) {
        return oskodovanecDao.save(oskodovanec);
    }


    public void prikaziSeznam() {
        // Logic to display a list of harmed persons
    }
}