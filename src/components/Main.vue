<template>
    <main class="main">
      <div class="container">
        <h1>Compartilhe novas <br/>ideias, descubra novos<br/>mundos</h1>
        <Button icon="fab fa-apple" text="Download" theme="dark"/>
        <Button icon="fab fa-google-play" text="Download" theme="white"/>
      </div>
    </main>
</template>

<script>
import Button from "./Button.vue"
export default {
    name: "Main",
    components: {
        Button
    }
}
</script>

<style scoped>
  .main {
    font-family: 'Noto Serif JP', Times, serif;
    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('../assets/reading.jpg');
    background-size: cover;
    height: calc(100vh - 70px);
    background-position: center;
    background-repeat: no-repeat;
    color: var(--bg-light);
    padding-top: 200px;
}

.main h1 {
    font-size: 4rem;
    line-height: 1.2;
    text-shadow: 2px 2px 2px var(--bg-secondary);
    margin-bottom: 50px;
}

.main button {
    font-size: 22px;
    margin-right: 10px;
}

 @media (max-width: 662px) {
    .main {
      padding-top: 50px;
    }

    .main h1 {
      font-size: 2.6rem;
    }

    .main button {
      margin-bottom: 15px;
    }
  }
</style>