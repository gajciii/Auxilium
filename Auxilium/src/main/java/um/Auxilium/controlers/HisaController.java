package um.Auxilium.controlers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import um.Auxilium.models.Hisa;
import um.Auxilium.repository.HisaRepository;

@RestController
@RequestMapping("/hise")
public class HisaController {
@Autowired
    private HisaRepository hisaDao;
    @GetMapping("/hello")
    public String hello() {
        return "Hello hisa";

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
    public Iterable<Hisa> vrniHisePoVelikosti(@PathVariable(name="velikost") double velikost){
        return hisaDao.findByVelikost(velikost);
    }
}
