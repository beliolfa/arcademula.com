<template>
  <div class="container flex items-center flex-col font-nes px-4">
    <section class="w-full flex flex-col-reverse sm:flex-row items-center justify-between my-8">
      <div class="flex items-center ">
        <i class="nes-ash mt-24"></i>
        <div class="nes-balloon from-left">
          <p>¡Bienvenido a nuestra web!</p>
        </div>
      </div>
      <div class="flex items-center">
        <span class="text-3xl mx-4 nes-text is-primary text-center">Arcade Mula</span>
        <img src="https://user-images.githubusercontent.com/12644599/81475748-54e96200-920e-11ea-9b7a-3685d122de6a.png">
      </div>
    </section>

    <MainMenu />

    <MainSection id="about" title="Quiénes somos" dark>
      <SectionAboutUs />
    </MainSection>

    <MainSection id="goals" title="Nuestros fines">
      <SectionGoals />
    </MainSection>

    <MainSection id="support" title="Cómo colaborar" dark>
      <SectionSupport />
    </MainSection>

    <MainSection id="saloon" title="Nuestro Local" class="w-full">
      <SectionSaloon />
    </MainSection>

    <MainSection id="social" title="Redes Sociales" dark class="w-full">
      <SectionSocialMedia />
    </MainSection>

    <modal
      name="mail-modal"
      width="95%"
      :max-width="600"
      :adaptive="true"
      height="auto"
    >
      <div class="p-8 text-black">
        <div class="my-2"><i class="nes-icon is-large heart"></i>Bien!</div>
        <p>Vas a enviarnos un correo para solicitar entrar en este apasaionante proyecto.</p>
        <div class="mt-4">
          <button class="nes-btn" @click="$modal.hide('mail-modal')">Luego</button>
          <a
            href="mailto:info@arcademula.com?Subject=Quiero ser soci@!"
            class="nes-btn is-primary"
            @click="$modal.hide('mail-modal')"
          >Estoy preparado</a>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import MainSection from '@/components/MainSection'
import SectionAboutUs from '@/components/SectionAboutUs'
import SectionGoals from '@/components/SectionGoals'
import SectionSaloon from '@/components/SectionSaloon'
import SectionSocialMedia from '@/components/SectionSocialMedia'
import SectionSupport from '@/components/SectionSupport'

export default {
  name: 'ArcadeMula',

  components: {
    MainMenu,
    MainSection,
    SectionAboutUs,
    SectionGoals,
    SectionSaloon,
    SectionSocialMedia,
    SectionSupport,
  }
}
</script>
<style lang="postcss">
html, body {
  @apply w-full flex justify-center;
}
</style>