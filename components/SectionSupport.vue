<template>
  <div>
    <div>
      <i class="nes-icon coin is-large" />
      <span>Puedes pertenecer a la Asociación como Socio, la cuota mensual es de 20€, ser socio te da derecho a acceder al local siempre que quieras. También participarás en la toma de decisiones de la asociación.</span>
    </div>

    <button
      type="button"
      class="nes-btn is-primary my-4"
      @click="$modal.show('mail-modal')">
      Hazte Socio
    </button>

    <div>Unas cuantas veces al mes la asociación realizará jornadas de apertura para no socios, que
        denominamos “Eventos”. La entrada para los no socios a estos “Eventos” es gratuita. Todas las Arcades están en modo free-play (Sin moneda).
        Puedes colaborar adquiriendo productos en nuestra cantina o haciendo pequeñas donaciones en el local o por Paypal.
    </div>

    <a href="https://paypal.me/arcademula" class="nes-btn is-success my-4">Hacer donación</a>

    <div>Arcade Mula es una asociación sin ánimo de lucro, todo lo recaudado por la asociación va destinado al mantenimiento del local y la adquisición de nuevo material y su conservación.</div>

  </div>
</template>

<script>
  export default {
    name: 'SectionSupport'
  }
</script>
