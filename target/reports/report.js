$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "Eu como usuário do sistema\r\nQuero fazer login\r\nPara fazer uma compra no site",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Login com sucesso",
  "description": "",
  "id": "login;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "preencho login \"Fulano.Ciclano@gmail.com\" e senha \"123456\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "vejo mensagem MINHA CONTA",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 10309424900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano.Ciclano@gmail.com",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 51
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 227061701,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 2359071200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.vejo_mensagem_MINHA_CONTA()"
});
formatter.result({
  "duration": 80726400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Senha errada",
  "description": "",
  "id": "login;senha-errada",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-senha-errada"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "preencho login \"Fulano.Ciclano@gmail.com\" e senha \"1234567\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "eu vejo a mensagem de erro de senha",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 6965652400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano.Ciclano@gmail.com",
      "offset": 16
    },
    {
      "val": "1234567",
      "offset": 51
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 154764401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 970387400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_vejo_a_mensagem_de_erro_de_senha()"
});
formatter.result({
  "duration": 76369600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Email errado",
  "description": "",
  "id": "login;email-errado",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 23,
      "name": "@login-email-errado"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "preencho login \"Fulano.Ciclano@gmail.comx\" e senha \"123456\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "eu vejo a mensagem de erro de email",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 7074067799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano.Ciclano@gmail.comx",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 52
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 151853001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 873042700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_vejo_a_mensagem_de_erro_de_email()"
});
formatter.result({
  "duration": 70784499,
  "status": "passed"
});
});