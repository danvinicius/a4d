<template>
    <header class="header">
  <div class="container flex">
    <div class="header__logo" title="A4D">
      <a href="/"><img src="../assets/A4d-logo.png" /></a>
    </div>
    <nav class="header__menu" :class="{'active': isHamburguerMenuActive}">
      <ul>
        <li>
          <a href="#" @click="isHamburguerMenuActive=false"
            ><i class="fab fa-google-play download--icon"></i>Download</a
          >
        </li>
        <li>
          <a href="#newsletter-podcast" @click="isHamburguerMenuActive=false"
            ><i class="fas fa-microphone-alt podcast--icon"></i>Podcast</a
          >
        </li>
        <li>
          <a href="#newsletter-podcast" @click="isHamburguerMenuActive=false"
            ><i class="far fa-newspaper news--icon"></i>Newsletter</a
          >
        </li>
      </ul>
        <router-link to="/login" @click="isHamburguerMenuActive=false" class="btn dark">Login <i class="fas fa-sign-out-alt"></i></router-link>
    </nav>
    <div class="hamburguer__btn">
      <i class="fas fa-align-right" :class="{'fa-times': isHamburguerMenuActive}" @click="isHamburguerMenuActive = !isHamburguerMenuActive"></i>
    </div>
  </div>
</header>
</template>

<script>
import Button from "./Button.vue"

export default {
  name: 'Header',
  components: Button,
  props: {
  },
  data(){
    return{
      isHamburguerMenuActive: false
    }
  }
}
</script>

<style scoped>
.header {
    background: var(--bg-primary);
    padding: 15px 0;
    position: relative;
    min-width: 100%;
  }
  
  .header__logo img {
    max-width: 5.2em;
  }
  
  .header__menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
  }
  
  .header__menu ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  .header__menu ul a {
    padding: 10px 0 10px;
    margin-right: 25px;
    color: var(--bg-secondary);
    font-size: 1em;
    cursor: pointer;
    transition: color 0.2s ease-out;
  }
  
  .header__menu ul a:hover {
    color: var(--bg-secondary-hover);
  }

  .download--icon, .podcast--icon, .news--icon {
    display: none;
  }
  
  .hamburguer__btn {
    color: var(--bg-secondary);
    font-size: 1.5em;
    padding: 10px;
    display: none;
  }

  .btn {
    font-size: 1em;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.1s linear;
    border-radius: 25px;
    font-weight: bold;
  }

  .dark {
    background-color: var(--bg-secondary);
    color: var(--bg-light);
  }

  .dark:hover {
    background: var(--bg-secondary-hover);
  }
  @media (max-width: 662px) {
    .hamburguer__btn {
      display: block;
    }
    .header__menu {
      display: none;
      position: absolute;
      top: 80px;
      right: 0;
      background: var(--bg-primary);
      width: 100%;
      max-width: 300px;
      padding: 20px 10px;
    }
  
    .header__menu.active {
      display: block;
    }
  
    .header__menu ul a {
      font-size: 1.2em;
      display: block;
      padding: 10px;
      margin: 0;
    }
    .header__menu ul {
      display: block;
      margin-bottom: 20px;
    }
  
    .header__menu ul li {
      margin: 0;
    }
  
    .header__menu .btn {
      margin: 5px;
    }

    .download--icon, .podcast--icon, .news--icon {
      display: inline-block;
      width: 30px;
  }
  }
  
</style>
