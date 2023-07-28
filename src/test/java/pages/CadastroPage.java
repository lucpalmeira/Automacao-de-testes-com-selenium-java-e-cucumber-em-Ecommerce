package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;

import static support.Utils.gerarEmailAleatorio;
import static support.Utils.gerarSenhaAleatoria;

public class CadastroPage extends RunCucumberTest {

    private String URL = "http://lojaebac.ebaconline.art.br/minha-conta/";
    private By cEmail = By.id("reg_email");
    private By cSenha = By.id("reg_password");
    private By cCadastrar = By.xpath("//*[@id=\"customer_login\"]/div[2]/form/p[3]/input[3]");


    public void acessandoSite() {
        getDriver(System.getProperty("browser")).get(URL);
    }

    public void cadastrandoEmail() {
        getDriver().findElement(cEmail).sendKeys(gerarEmailAleatorio());
    }

    public void cadastrandoSenha() {
        getDriver().findElement(cSenha).sendKeys(gerarSenhaAleatoria());

    }

    public void clicandoCadastrar() {
        getDriver().findElement(cCadastrar).click();
    }

    public void vendoCadastroConcluido() {
        String sair = getDriver().findElement(By.xpath("//*[@id=\"main\"]/div/nav/ul/li[6]/a")).getText();
        Assert.assertEquals("Não acessou a sua conta!", "SAIR", sair);
    }
}
