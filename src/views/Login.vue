<template>
  <div class="home">
    <div class="container">
      <div class="login-cadastro-container">

        <div class="login-cadastro login">
          <h2>Login</h2>
          <form method="POST" action="/login">
            <input
              type="email"
              placeholder="Email"
              id="email-login"
              v-model="loginEmail"
              @keyup="loginError = []"
              required
            />
            <span></span>
            <small></small>
            <input
              type="password"
              placeholder="Senha"
              id="password-login"
              v-model="loginPassword"
              required
            />
            <span></span>
            <small></small>
            <Button theme="login" text="Entrar" @click.prevent="login"/>
            <small :class="loginError.length > 0 ? 'error' : ''">{{loginError[0]}}</small>
            <a @click.prevent="isSearchEmailModalActive = true" class="login__reset">Esqueci minha senha</a>
          </form>
        </div>

        <div class="login-cadastro cadastro">
          <h2>Ainda não possui uma conta? Cadastre-se</h2>
          <form method="POST" action="/register">
            <input
              type="text"
              placeholder="Nome completo"
              id="nome-cadastro"
              v-model="registerName"
              @keyup="validateName"
              required
            />
            <span :class="nameError.length > 0 ? 'error' : ''"></span>
            <small :class="nameError.length > 0 ? 'error' : ''">{{nameError[0]}}</small>
            <input
              type="email"
              placeholder="Email"
              id="email-cadastro"
              v-model="registerEmail"
              @blur="validateEmail"
              required
            />
            <span :class="emailError.length > 0 ? 'error' : ''"></span>
            <small :class="emailError.length > 0 ? 'error' : ''">{{emailError[0]}}</small>
            <input
              type="password"
              placeholder="Escolha uma senha"
              id="password-cadastro"
              v-model="registerPassword"
              @blur="validatePassword"
              required
            />
            <span :class="passwordError.length > 0 ? 'error' : ''"></span>
            <small :class="passwordError.length > 0 ? 'error' : ''">{{passwordError[0]}}</small>
            <input
              type="password"
              placeholder="Confirme sua senha"
              id="password-cadastro-2"
              v-model="registerPasswordConfirm"
              @blur="confirmPassword"
              required
            />
            <span :class="passwordConfirmError.length > 0 ? 'error' : ''"></span>
            <small :class="passwordConfirmError.length > 0 ? 'error' : ''">{{passwordConfirmError[0]}}</small>
            <Button theme="login" text="Criar conta" @click.prevent="register" :disabled="disabledButton"/>
            <small :class="registerError.length > 0 ? 'error' : ''">{{registerError[0]}}</small>
          </form>
        </div>
      </div>
      <div class="modal-container" v-if="isSearchEmailModalActive == true">
        <div class="container">
                <div class="modal search-email-modal">
                  <button class="close-btn" @click="isSearchEmailModalActive = false"><i class="fas fa-times"></i></button>
                    <h2>Encontre sua conta através do seu email</h2>
                    <input type="email" v-model="emailToBeFound" required autofocus @keyup="emailNotFoundError = []">
                    <Button text="Buscar" theme="green" class="btn" @click.prevent="searchEmail"/>
                    <small :class="emailNotFoundError.length > 0 ? 'error' : ''">{{emailNotFoundError[0]}}</small>
                </div>
            </div>
      </div>
      <div class="modal-container" v-if="isSendEmailModalActive == true">
        <div class="container">
                <div class="modal send-email-modal">
                  <button class="close-btn" @click="isSendEmailModalActive = false"><i class="fas fa-times"></i></button>
                    <h2>Podemos te enviar um email?</h2>
                  <div>
                    <p>Enviaremos um código de recuperação de senha para o seu email:</p>
                    <small><b>{{emailToBeFound}}</b></small>
                  </div>
                    <Button text="Enviar" theme="green" class="btn" @click.prevent="sendEmail"/>
                    <small :class="emailNotSentError.length > 0 ? 'error' : ''">{{emailNotSentError[0]}}</small>
                </div>
            </div>
      </div>
      <div class="modal-container" v-if="isRecoverCodeModalActive == true">
        <div class="container">
                <div class="modal recover-code-modal">
                  <button class="close-btn" @click="isRecoverCodeModalActive = false"><i class="fas fa-times"></i></button>
                    <h2>Insira o código que lhe enviamos</h2>
                    <input type="text" autofocus v-model="recoverCode" @keyup="notValidateCodeError = []">
                    <Button text="Enviar" theme="green" class="btn" @click.prevent="sendCode"/>
                    <small :class="notValidateCodeError.length > 0 ? 'error' : ''">{{notValidateCodeError[0]}}</small>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue"
import api from "../../services/api"

export default {
  name: 'Home',
  data(){
    return {
      loginEmail: "",
      loginPassword: "",
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerPasswordConfirm: "",
      nameError: [],
      emailError: [],
      passwordError: [],
      passwordConfirmError: [],
      registerError: [],
      loginError: [],
      disabledButton: false,
      isSearchEmailModalActive: false,
      emailToBeFound: "",
      emailNotFoundError: [],
      emailNotSentError: [],
      notValidateCodeError: [],
      isSendEmailModalActive: false,
      isRecoverCodeModalActive: false,
      recoverCode: ""
    }
  },
  components: {
    Button
  },
  methods: {
    login(){
      api.post("/user/login", {
           email: this.loginEmail,
           password: this.loginPassword
       })
       .then((res)=> {
            localStorage.setItem("token", res.data.token)
           this.$router.push({name: "User"})

       })
       .catch(err=> this.loginError.push(err.response.data.message)
         );
    },
    register() {
       api.post("/user/register", {
           name: this.registerName,
           email: this.registerEmail,
           password: this.registerPasswordConfirm
       })
       .then((res)=> {
           localStorage.setItem("token", res.data.token)
            this.$router.push({name: "User"})
       })
       .catch(err=> this.registerError.push(err.response.data.message));
      },
      validateName() {
        this.registerError = []
      //no minimo dois nomes
      const nomeRegex = /[a-z]* [a-z]*/;
      const nomeTest = nomeRegex.test(this.registerName.trim());
      if (!nomeTest || this.registerName.trim() == "") {
        this.disabledButton = true
        this.nameError.push("Nome completo é obrigatório")
      } else {
        this.disabledButton = false
        this.nameError = []
      }
    },
    validateEmail() {
      this.registerError = []
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailTest = emailRegex.test(this.registerEmail.trim().toLowerCase());
      if(this.registerEmail.trim() == ""){
        this.disabledButton = true
        this.emailError.push("O campo de email é obrigatório")
      } else {
        this.disabledButton = false
        this.emailError = []
      } 
      
      if (this.registerEmail != "" && !emailTest) {
        this.disabledButton = true
        this.emailError.push("Insira um email válido")
      } else {
        this.disabledButton = false
        this.emailError = []
      }
    },
    validatePassword() {
      this.registerError = []
      //senha forte
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      const passwordTest = passwordRegex.test(this.registerPassword.trim());
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
      if (this.registerPasswordConfirm !== this.registerPassword) {
        this.disabledButton = true
        this.passwordConfirmError.push("As senhas não coincidem")
      } else {
        this.disabledButton = false
        this.passwordConfirmError = []
      }
    },
    searchEmail(){
      api.get(`/user/${this.emailToBeFound}`).then(()=> {
          this.isSearchEmailModalActive = false
          this.isSendEmailModalActive = true
      }).catch(err=> this.emailNotFoundError.push(err.response.data.message));
    },
    sendEmail(){
      api.post("/user/recoverpassword", {
          email: this.emailToBeFound
      }).then(()=> {
          this.isSendEmailModalActive = false
          this.isRecoverCodeModalActive = true
      }).catch(err=> {
          this.isSendEmailModalActive = false
          this.isSearchEmailModalActive = true
          this.emailNotFoundError.push(err.response.data.message)
        });
    },
    sendCode(){
      api.post("/user/validaterecovercode", {
          email: this.emailToBeFound,
          code: this.recoverCode.trim().toUpperCase()
      }).then((res)=> {
          this.isRecoverCodeModalActive = false
          localStorage.setItem("email", res.data.email)
          this.$router.push({name: "RecoverPassword"})
      }).catch(err=> this.notValidateCodeError.push(err.response.data.message ));
    },
  }
}
</script>

<style scoped>
  .login-cadastro-container {
  display: grid;
  grid-template-columns: 2.2fr 3fr;
  gap: 20px;
}

.login-cadastro {
  padding: 22px;
  border-radius: 8px;
  background: var(--bg-light);
  margin: 75px 0;
  box-shadow: 2px 2px 10px #aaa;
}

.login-cadastro-container h2 {
  font-size: 2em;
  margin-bottom: 32px;
  color: var(--bg-secondary-hover);
}

.login-cadastro-container form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-cadastro-container input {
  height: 48px;
  width: 100%;
  padding-left: 8px;
  border: unset;
  outline: none;
}

.login-cadastro-container input:focus + span::after {
  width: 100%;
}

.login-cadastro-container span {
  height: 1px;
  width: 100%;
  margin-bottom: 2px;
  background-color: #ccc;
  transition: 0.3s ease-in-out;
}

.login-cadastro-container small {
    margin-bottom: 18px;
    font-size: 12px;
    align-self: flex-start;
}

small.error {
  color: #f42;
}

.login-cadastro-container span::after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  margin-bottom: 16px;
  background: var(--bg-primary);
  transition: 0.3s ease-in-out;
}

.login__reset {
  font-size: 12px;
  color: #888;
  cursor: pointer;
}

.login-cadastro-container span.error::after {
  background-color: #f42;
}

.modal-container {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #fff;
    border-radius: 15px;
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    position: relative;
}

.modal input {
        padding: 15px;
        border: 1px solid var(--bg-primary);
        outline: none;
        border-radius: 25px;
        font-size: 18px;
    }
    .close-btn {
      outline: none;
      border: none;
      font-size: 20px;
      position: absolute;
      top: 10px;
      right: 15px;
      cursor: pointer;
    }

@media (max-width: 662px) {
    .login-cadastro-container {
      display: block;
    }
  }
</style>
