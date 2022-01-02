<template>
    <footer class="footer">
        <div class="container flex">
        <p>A4D {{ano}} e todos os direitos reservados</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Header',
    data(){
      return {
        ano: new Date().getFullYear()
      }
    }
}
</script>

<style scoped>
    .footer {
    height: 100px;
    background: var(--bg-primary);
    margin-top: auto;
  }
  
  .footer .container {
    height: 100%;
  }
  
  .footer p {
    font-size: 1.1em;
    margin: 0 auto;
  }
  @media (max-width: 662px) {
    .footer p {
      font-size: .9em;
    }
  }
</style>>
