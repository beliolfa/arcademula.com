<template>
  <div class="my-4 w-full">
    <progress class="nes-progress is-pattern" value="100" max="100"></progress>
    <div class="my-4 flex flex-col sm:flex-row items-center justify-around w-full flex-wrap">
      <a href="#about" class="nes-badge">
        <span class="is-dark">Nosotros</span>
      </a>
      <a href="#goals" class="nes-badge mr-2">
        <span class="is-primary">Fines</span>
      </a>
      <a href="#support" class="nes-badge mr-2">
        <span class="is-success">Hazte socio</span>
      </a>
      <a href="#saloon" class="nes-badge mr-2">
        <span class="is-warning">El local</span>
      </a>
      <!-- <a href="#events" class="nes-badge mr-2">
        <span class="is-error">Eventos</span>
      </a> -->
      <a href="#social" class="nes-badge mr-2">
        <span class="is-error">Síguenos</span>
      </a>
    </div>
    <progress class="nes-progress is-pattern" value="100" max="100"></progress>
  </div>
</template>

<script>
  export default {
    name: 'MainMenu'
  }
</script>
