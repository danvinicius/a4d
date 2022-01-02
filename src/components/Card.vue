<template>
  <div class="card">
          <div class="card__icon">
            <i :class="icon"></i>
          </div>
          <div class="card__content">
            <h3>{{title}}</h3>
            <p>{{text}}</p></div>
        </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        icon: String,
        title: String,
        text: String
    }
}
</script>

<style scoped>
    .card {
      border-radius: 10px;
      border: 2px solid var(--bg-primary);
      padding: 0 5px;
      text-align: center;
      overflow: hidden;
      transition: .3s ease;
      cursor: pointer;
      
  }
  
  .card__icon {
      padding: 30px;
  }

  .card__icon i {
      font-size: 4rem;
      color: var(--bg-primary);
  }

  .card__content {
      padding: 5px;
  }

  .card__content h3 {
      font-size: 24px;
      margin: 10px;
  }

  .card__content p {
      line-height: 1.5;
  }

  .card:hover {
    background: var(--bg-primary);
  }

  .card:hover .card__icon i, .card:hover .card__content h3, .card:hover .card__content p {
      color: var(--bg-light);
  }
</style>