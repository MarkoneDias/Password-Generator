import { useState, useRef } from "react";
import generatePassword from "./GenerationPassword";
import style from "./App.module.css";
import Form, { getNumberPassword } from "./form/form";
import Message from "./message/message";

export default function App() {
  const [copyBtn, setCopyBtn] = useState("Copiar");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const passwordText = useRef(null);

  function generatePasswordLocal() {
    const numberPassword = getNumberPassword();
    if (numberPassword < 6) {
      setMessage(`Senhas devem possuir um maior número de caracteres para sua segurança`);
      setType("error");
      return;
    } else if (numberPassword > 50) {
      setMessage(
        `Senhas longas demais podem ser um problema para decorar, tente um número menor!`
      );
      setType("error");
      return;
    } else {
      setCopyBtn("Copiar");
      setPassword(generatePassword());
    }
  }

  function copyPassword() {
    setCopyBtn("Copiado");
    passwordText.current.select();
    document.execCommand("copy");
  }

  return (
    <div className={style.container}>
      <h1>Gerador de senha</h1>
      <Form />
      <Message msg={message} type={type} />
      <input type="text" ref={passwordText} value={password} readOnly />
      <div className={style.divButton}>
        <button onClick={generatePasswordLocal}>Gerar</button>
        <button onClick={copyPassword}>{copyBtn}</button>
      </div>
    </div>
  );
}
