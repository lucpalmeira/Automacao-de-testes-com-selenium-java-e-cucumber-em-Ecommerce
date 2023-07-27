# language: pt

@login
Funcionalidade: Login
  Eu como usuário do sistema
  Quero fazer login
  Para fazer uma compra no site

  @login-sucesso
  Cenário: Login com sucesso
    Dado que estou na tela de login
    Quando preencho login "Fulano.Ciclano@gmail.com" e senha "123456"
    E clico em Login
    Então vejo mensagem MINHA CONTA

  @login-senha-errada
  Cenário: Senha errada
    Dado que estou na tela de login
    Quando preencho login "Fulano.Ciclano@gmail.com" e senha "1234567"
    E clico em Login
    Então eu vejo a mensagem de erro de senha

  @login-email-errado
  Cenário: Email errado
    Dado que estou na tela de login
    Quando preencho login "Fulano.Ciclano@gmail.comx" e senha "123456"
    E clico em Login
    Então eu vejo a mensagem de erro de email