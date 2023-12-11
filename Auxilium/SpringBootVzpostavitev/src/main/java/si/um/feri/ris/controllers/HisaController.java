package si.um.feri.ris.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.um.feri.ris.models.Hisa;
import si.um.feri.ris.repository.HisaRepository;

@RestController
    @RequestMapping("/hise")
public class HisaController {

    @Autowired
    private HisaRepository hisaDao;

        @GetMapping("/Hello")
        public String hello(){
            return "Hello Hisa";
        }

        @PostMapping
        public Hisa dodajHiso(@RequestBody Hisa hisa){
            return hisaDao.save(hisa);
        }

        @GetMapping
    public Iterable<Hisa> vrniHise(){
            return hisaDao.findAll();
        }

        @GetMapping("/velikost-sob/{velikost}")
    public Iterable<Hisa> vrniHisePoVelikosti(@PathVariable(name = "velikost") double velikost){
            return hisaDao.vrniHisePoVelikostiSob(velikost);
        }
}
