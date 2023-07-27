package steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import pages.LoginPage;
import runner.RunCucumberTest;


public class LoginSteps extends RunCucumberTest {


    LoginPage loginPage = new LoginPage();

    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() {
        loginPage.acessandoSite();

    }

    @Quando("^preencho login \"([^\"]*)\" e senha \"([^\"]*)\"$")
    public void preencho_login_e_senha(String email, String senha) {
        loginPage.preenchendoEmail(email);
        loginPage.preenchendoSenha(senha);
    }

    @Quando("^clico em Login$")
    public void clico_em_Login() {
        loginPage.clicandoEmLogin();

    }

    @Então("^vejo mensagem MINHA CONTA$")
    public void vejo_mensagem_MINHA_CONTA() {
        loginPage.vejoMinhaConta();
    }

    @Então("^eu vejo a mensagem de erro de senha$")
    public void eu_vejo_a_mensagem_de_erro_de_senha() {
        loginPage.mensagemSenhaErrada();
    }

    @Então("^eu vejo a mensagem de erro de email$")
    public void eu_vejo_a_mensagem_de_erro_de_email() {
        loginPage.mensagemEmailErrado();
    }
}
