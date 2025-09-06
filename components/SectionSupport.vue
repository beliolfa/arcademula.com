<template>
  <div>
    <div>
      <i class="nes-icon coin is-large" />
      <span>Puedes pertenecer a la Asociación como Socio en varias modalidades. Socio por un día: 4€. Socio por un mes: 10€. Además ofrecemos descuentos si traes un acompañante o vienes con tu familia. Ser socio te da derecho a acceder al local siempre que quieras y a participar en la toma de decisiones de la asociación.</span>
    </div>

    <UModal>
    <button
      type="button"
      class="nes-btn is-primary my-4"
>
      Hazte Socio
    </button>

    <template #content>
      <div class="p-8">
          <div class="my-2"><i class="nes-icon is-large heart"></i>Bien!</div>
          <p>Vas a enviarnos un correo para solicitar entrar en este apasaionante proyecto.</p>
          <div class="mt-4">
            <a
              href="mailto:info@arcademula.com?Subject=Quiero ser soci@!"
              class="nes-btn is-primary"
            >Estoy preparado</a>
          </div>
        </div>
    </template>
  </UModal>

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
