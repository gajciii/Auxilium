package si.um.feri.ris.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Soba;
import si.um.feri.ris.repository.HisaRepository;
import si.um.feri.ris.repository.SobaRepository;

import java.util.Optional;

@RestController
@RequestMapping("/sobe")
public class SobaController {
    @Autowired
    private SobaRepository sobaDao;

    @Autowired
    private HisaRepository hisaDao;

    @GetMapping("/hello")
    public String hello(){
        return "Hello Sobe";
    }

    @GetMapping
    public Iterable<Soba> vrniSobe(){
        return  sobaDao.findAll();
    }

    @PostMapping("/{id_hise}")
    public Optional<Soba> dodajSobo(@RequestBody Soba soba, @PathVariable(name = "id_hise") Long id){
        return hisaDao.findById(id).map(hisa -> {
           soba.setHisa(hisa);
           return sobaDao.save(soba);
        });
    }
}
