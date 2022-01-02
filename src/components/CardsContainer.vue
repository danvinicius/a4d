<template>
  <section class="cards-container">
      <div class="container">
        <h1>
          Baixe nosso app para ler<br />
          e ouvir em qualquer lugar
        </h1>
      <div class="cards">
        <Card icon="fas fa-bookmark" title="Leitura dinâmica" text="Use bookmarks para continuar lendo de onde você parou."/>
        <Card icon="fas fa-headphones" title="A4D Podcast" text="Ouça nosso podcast voltado totalmente para o mundo dev."/>
        <Card icon="fas fa-globe-americas" title="Download grátis" text="Baixe artigos e episódios do podcast para ler e ouvir em qualquer lugar, mesmo sem conexão."/>
      </div>
      </div>
    </section>
</template>

<script>
import Card from "./Card.vue"
export default {
    name: "CardsContainer",
    components: {
        Card
    }
}
</script>

<style>
    .cards-container {
      padding-top: 40px;
  }

  .cards-container h1 {
      margin-bottom: 50px;
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 10px;
  }
</style>