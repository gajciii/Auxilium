package si.um.feri.ris.controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import si.um.feri.ris.models.Nesreca;
import si.um.feri.ris.models.Oskodovanec;
@RestController
//@RequestMapping()
public class AdministratorController {

    private Nesreca nesreca;

    public void dodajNesreco(Nesreca nesreca) {
        // Logic to add an incident
    }

    public void izbrisiNesreco(Nesreca nesreca) {
        // Logic to delete an incident
    }

    public void urediNesreco(Nesreca nesreca) {
        // Logic to edit an incident
    }

    public void dodajOskodovanca(Oskodovanec oskodovanec) {
        // Logic to add a harmed person
    }

    public void odstraniOskodovanca(Oskodovanec oskodovanec) {
        // Logic to remove a harmed person
    }
}