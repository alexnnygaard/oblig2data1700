package data1700oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class controller {
    private List<Billett> billetter = new ArrayList<>();

    @PostMapping("/lagreBilett")
    public void lagre(Billett billettene){
        billetter.add(billettene);
    }

    @GetMapping("/hentBilett")
    public List<Billett> retur() {
        return billetter;
    }

    @GetMapping("/slettAlle")
    public void slettalle() {
        billetter.clear();
    }
}

