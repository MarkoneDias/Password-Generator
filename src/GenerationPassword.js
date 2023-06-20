import { numberPassword, textOfPassword } from "./form/form";

function generatePassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*";
  const passwordLength = numberPassword - textOfPassword.length;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  if (textOfPassword.length > 0) return textOfPassword + password;
  else return password;
}

export default generatePassword;
