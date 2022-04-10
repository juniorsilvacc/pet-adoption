import React from "react";
import Input from "../../form/Input";

export default function Register() {
  function handleOnChange(e) {}

  return (
    <section>
      <h1>Register</h1>
      <form action="">
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleOnChange}
        />

        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu Telefone"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Confirmação de Senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleOnChange}
        />

        <input type="submit" value="Cadastrar" />
      </form>
    </section>
  );
}
