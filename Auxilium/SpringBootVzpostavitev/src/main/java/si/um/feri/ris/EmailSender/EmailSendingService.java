package si.um.feri.ris.EmailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import si.um.feri.ris.models.Uporabnik;

@Service
public class EmailSendingService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void testemail() {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("adamka32@gmail.com");
        message.setSubject("Test");
        message.setText("Test");
        javaMailSender.send(message);}

    public void sendRegistrationEmail(Uporabnik uporabnik) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(uporabnik.getUporabniskoIme());
        message.setSubject("Registration Confirmation");
        message.setText("Dear " + uporabnik.getUporabniskoIme() + ",\n\nThank you for registering with us!");

        javaMailSender.send(message);
    }
}
