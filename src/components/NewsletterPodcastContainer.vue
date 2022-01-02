<template>
  <section class="newsletter-podcast" id="newsletter-podcast">
      <div class="container"> 
      <div class="newsletter">
        <h1>Newsletter</h1>
        <p>
          Assine nosso newsletter e receba os principais artigos para
          programadores.
        </p>
        <form class="newsletter__form">
          <input type="email" placeholder="Seu email" class="input" />
          <Button text="Assinar" theme="green"/>
        </form>
      </div>
      <div class="podcast">
        <h1>Podcast</h1>
        <p>
          Acesse nosso podcast e saiba tudo sobre o mundo dev a todo momento.
        </p>
        <Button text="Acessar podcast" theme="green"/>
      </div>
      </div>
    </section>
</template>

<script>
import Button from "./Button.vue"
export default {
    name: "NewsletterPodcastContainer",
    components: {
        Button
    }
}
</script>

<style>
    .newsletter-podcast {
    position: relative;
    padding-top: 60px;
    padding-bottom: 30px;
  }
  
  .newsletter {
    margin-bottom: 50px;
  }
  
  .newsletter h1::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 35px;
    background: var(--bg-primary);
    margin-right: 10px;
  }
  
  .newsletter .input {
    margin: 10px 0 15px;
  }
  
  .newsletter button, .podcast button  {
    margin: 10px 0; 
  }
  
  .newsletter button {
    display: block;
  }
  
  .podcast {
    text-align: right;
  }
  
  .podcast h1::after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 35px;
    background: var(--bg-primary);
    margin-left: 10px;
  }
</style>