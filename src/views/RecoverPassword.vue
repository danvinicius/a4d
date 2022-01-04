<template>
  <div class="big-form-container">
    <div class="small-form-container">
      <h2>Insira sua nova senha</h2>
      <p>Email: {{email}}</p>
    <form action="">
      <input
        type="password"
        placeholder="Escolha uma senha"
        name="password"
        id="password-cadastro"
        v-model="newPassword"
        @keyup="validatePassword"
        required
      />
      <span :class="passwordError.length > 0 ? 'error' : ''"></span>
      <small :class="passwordError.length > 0 ? 'error' : ''">{{passwordError[0]}}</small>
      <input
        type="password"
        placeholder="Confirme sua senha"
        name="password2"
        id="password-cadastro-2"
        v-model="newPasswordConfirm"
        @keyup="confirmPassword"
        required
      />
      <span :class="newPasswordConfirmError.length > 0 ? 'error' : ''"></span>
      <small :class="newPasswordConfirmError.length > 0 ? 'error' : ''">{{newPasswordConfirmError[0]}}</small>
      <button type="submit" id="cadastro-button" @click.prevent="updatePassword" :disabled="disabledButton">Criar conta</button>
      <small :class="recoverPasswordError.length > 0 ? 'error' : ''">{{recoverPasswordError[0]}}</small>
  </form>
  </div>
  </div>

</template>


<script>
import api from "../../services/api"
export default {
    name: "RecoverPassword",
    data(){
      return {
        newPassword: "",
        newPasswordConfirm: "",
        disabledButton: false,
        passwordError: [],
        newPasswordConfirmError: [],
        recoverPasswordError: [],
        email: localStorage.getItem("email")
      }
    }, 
    methods: {
      validatePassword() {
      this.registerError = []
      //senha forte
      const passwordRegex =
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
      const passwordTest = passwordRegex.test(this.newPassword.trim());
      if (!passwordTest) {
        this.disabledButton = true
        this.passwordError.push("A senha precisa ter no mínimo 8 caracteres, letras maiúsculas, minúsculas e números")
      } else {
        this.disabledButton = false
        this.passwordError = []
      }
    },
      confirmPassword() {
        this.registerError = []
        if (this.newPasswordConfirm !== this.newPassword) {
          this.disabledButton = true
          this.newPasswordConfirmError.push("As senhas não coincidem")
        } else {
          this.disabledButton = false
          this.newPasswordConfirmError = []
        }
      },
      updatePassword(){
        api.patch("/user/changepassword", {
            email: this.email,
            newPassword: this.newPasswordConfirm
        }).then(res => {
            localStorage.setItem("token", res.data.token)
            this.$router.push({name: "User"})
        }).catch(err=> this.recoverPasswordError.push(err.response.data.message));
      }
    }
}
</script>

<style scoped>
.big-form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.small-form-container {
  padding: 22px;
  border-radius: 8px;
  background: var(--bg-light);
  margin: 75px 0;
  box-shadow: 2px 2px 10px #aaa;
  min-width: 20%;
}
 h2 {
  font-size: 2em;
  color: var(--bg-secondary-hover);
  margin-bottom: 10px;
}
p {
  margin-bottom: 32px;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form input {
  height: 48px;
  width: 100%;
  padding-left: 8px;
  border: unset;
  outline: none;
}

form input:focus + span::after {
  width: 100%;
}

form span {
  height: 1px;
  width: 100%;
  margin-bottom: 2px;
  background-color: #ccc;
  transition: 0.3s ease-in-out;
}

form small {
    margin-bottom: 18px;
    font-size: 12px;
    align-self: flex-start;
}

form small.error {
  color: #f42;
}

form span::after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  margin-bottom: 16px;
  background: var(--bg-primary);
  transition: 0.3s ease-in-out;
}

form span.error::after {
  background-color: #f42;
}

form button {
  height: 48px;
  width: 100%;
  color: var(--bg-light);
  border: none;
  outline: none;
  border-radius: 4px;
  background: linear-gradient(
    120deg,
    var(--bg-primary),
    var(--bg-primary-hover),
    var(--bg-primary)
  );
  background-size: 200%;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s ease-in-out;
  margin: 30px 0;
}

form button:hover {
  background-position: right;
}
</style>