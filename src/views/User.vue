<template>
    <div>
        <div class="container">
            <div class="welcome">
                <h1>Olá, {{name}}!</h1>
                <p>
                Obrigado por visitar o meu website. Ele ainda está em desenvolvimento,
                mas logo estará pronto.
                </p>
                <img src="../assets/construcao.svg" alt="" />
                <form>
                    <a @click.prevent="ativarModal">Apagar minha conta</a> &nbsp;  |  &nbsp; <a @click.prevent="logout">Sair</a>
                </form>
            </div>
        </div>
        <div class="modal-container" v-if="isModalActive == true">
            <div class="container">
                <div class="modal">
                    <h2>Tem certeza que deseja apagar sua conta?</h2>
                    <div class="btn-container">
                        <Button text="Cancelar" theme="dark" class="btn" @click="isModalActive = false"/>
                        <Button text="Apagar" theme="red" class="btn" @click="apagarConta"/>
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
    name: "User",
    components: {
        Button
    },
    data(){
        return {
            name: localStorage.getItem("name").split(" ")[0],
            isModalActive: false
        }
    },
    methods: {
        ativarModal(){
            this.isModalActive = true
        },
        apagarConta(){
            api.delete(`/user/${localStorage.getItem("id")}`)
            .then(()=> {
                this.logout()
            }).catch(()=> this.$router.push({name: "User"}));
        },
        logout(){
            localStorage.removeItem(["name"])
            localStorage.removeItem("token")
            localStorage.removeItem("email")
            localStorage.removeItem("id")
            this.$router.push({name: "Login"})
        }
    },
}
</script>

<style scoped>
.welcome {
    background: var(--bg-light);
    padding: 1rem 2rem;
    margin: 50px 0;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #aaa;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.welcome p {
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 50px;
}

.welcome img {
    max-width: 300px;
}

.welcome form {
    align-self: flex-end;
}

.welcome form a {
    font-size: .8rem;
    color: #666;
    background: transparent;
    border: none;
    outline: none;
    text-decoration: underline;
    cursor: pointer;
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
}

.btn-container {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.btn {
    min-width: 40%;
}
</style>