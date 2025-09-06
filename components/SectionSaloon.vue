<template>
  <div class="w-full">
    <div class="my-4">
      <i class="nes-logo"></i>
      <span>Estamos en C/ Gran Vía, 1. Mula (Murcia)</span>
    </div>
    <div class="w-full flex-col sm:flex-row flex justify-around items-center flex-wrap">
      <img src="/images/salon.jpeg" class="w-full">
    </div>
  </div>
</template>

<script>
  import PixelatedImage from '@/components/PixelatedImage'

  export default {
    name: 'SectionSaloon',

    components: { PixelatedImage },
  }
</script>
