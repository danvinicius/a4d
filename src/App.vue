<template>
    <Header/>
      <router-view/>
    <Footer/>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --bg-primary: #35f09f;
    --bg-primary-hover: #31d68f;
    --bg-secondary: #000;
    --bg-secondary-hover: #111;
    --bg-error: #f42;
    --bg-error-hover: rgb(255, 15, 15);
    --bg-light: #fff;
    --bg-light-hover: #eee;
  }
  
  #app {
    min-height: 100vh;
    font-family: "Poppins", Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    background: var(--bg-light);
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    color: var(--bg-secondary-hover);
  }
  
  .input {
    max-width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--bg-secondary);
    background: transparent;
    font-size: 1.2em;
  }
  
  .input:focus {
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
