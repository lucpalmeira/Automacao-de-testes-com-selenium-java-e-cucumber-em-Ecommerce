package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;


public class LoginPage extends RunCucumberTest {

    private String URL = "http://lojaebac.ebaconline.art.br/minha-conta/";
    private By pEmail = By.id("username");
    private By pSenha = By.id("password");
    private By cLogin = By.cssSelector("#customer_login > div:nth-child(1) > form > input.button");
    private By msErrado = By.cssSelector("#main > div > div.woocommerce-notices-wrapper > ul > li");
    private By meErrado = By.cssSelector("#main > div > div.woocommerce-notices-wrapper > ul > li");


    public void acessandoSite() {
        getDriver(System.getProperty("browser")).get(URL);
    }

    public void preenchendoEmail(String email) {
        getDriver().findElement(pEmail).sendKeys(email);
    }

    public void preenchendoSenha(String senha) {
        getDriver().findElement(pSenha).sendKeys(senha);
    }

    public void clicandoEmLogin() {
        getDriver().findElement(cLogin).click();
    }

    public void vejoMinhaConta() {
        String sair = getDriver().findElement(By.xpath("//*[@id=\"main\"]/div/nav/ul/li[6]/a")).getText();
        Assert.assertEquals("Não acessou a sua conta!", "SAIR", sair);
    }

    public void mensagemSenhaErrada() {
        getDriver().findElement(msErrado).getText();
    }

    public void mensagemEmailErrado() {
        getDriver().findElement(meErrado).getText();
    }

}
