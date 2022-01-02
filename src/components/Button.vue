<template>
    <button :class="theme"><i :class="icon"></i>{{text}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        theme: String,
        icon: String,
    }
}
</script>

<style scoped>
button {
    font-size: 1em;
    border: none;
    outline: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.1s linear;
    border-radius: 25px;
    font-weight: bold;
  }

  .login {
    height: 48px;
    width: 100%;
    color: var(--bg-light);
    border-radius: 4px;
    background: linear-gradient(
      120deg,
      var(--bg-primary),
      var(--bg-primary-hover),
      var(--bg-primary)
    );
    background-size: 200%;
    transition: 0.5s ease-in-out;
    margin: 30px 0;
  }

  .login:hover {
    background-position: right;
  }

  button:focus {
      outline: none;
  }

    .green {
    background: var(--bg-primary);
    color: var(--bg-light);
    margin: 0 5px;
  }
  
  .green:hover {
    background: var(--bg-primary-hover);
  }

  .white {
    background-color: var(--bg-light);
    color: var(--bg-secondary);
  }

  .white:hover {
    background: var(--bg-light-hover);
  }

  .dark {
    background-color: var(--bg-secondary);
    color: var(--bg-light);
  }

  .dark:hover {
    background: var(--bg-secondary-hover);
  }

  .red {
    background-color: var(--bg-error);
    color: var(--bg-light);
  }

  .red:hover {
    background-color: var(--bg-error-hover);
  }

  i {
      margin-right: 5px;
  }
  
  
</style>