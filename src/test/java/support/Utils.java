package support;


import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;
import java.util.Random;


public class Utils extends RunCucumberTest {

//    public static void esperarElementoEstarPresente(By element, Integer tempo) {
//        WebDriverWait wait = new WebDriverWait(getDriver(), tempo);
//        wait.until(ExpectedConditions.elementToBeClickable(element));
//    }


    public static String gerarEmailAleatorio() {
        String email_init = "teste_";
        String email_final = "@teste.com.br";

        Random random = new Random();
        int minimo = 1;
        int maximo = 999999999;
        int resultado = random.nextInt(maximo - minimo) + minimo;

        return email_init + resultado + email_final;
    }

    public static String gerarSenhaAleatoria() {
        String senha_init = "ABCD_";
        String senha_final = "wxyz";

        Random random = new Random();
        int minimo = 1;
        int maximo = 999999999;
        int resultado = random.nextInt(maximo - minimo) + minimo;

        return senha_init + resultado + senha_final;
    }
}
