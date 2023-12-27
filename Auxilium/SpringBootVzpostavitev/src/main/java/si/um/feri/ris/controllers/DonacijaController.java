package si.um.feri.ris.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import si.um.feri.ris.models.Donacija;
import si.um.feri.ris.repository.PregledDonacij;

@RestController
@RequestMapping("/donacije")
public class DonacijaController {

    @Autowired
    private PregledDonacij donacijaDao;

    @PostMapping
    public Donacija dodajDonacijo(@RequestBody Donacija donacija) {
        return donacijaDao.save(donacija);
    }
}

