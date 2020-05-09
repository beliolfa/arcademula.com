<template>
  <div class="w-full">
    <div class="my-4">
      <i class="nes-icon star"></i>
      <span>Truco: Click en la imágen para verla en detalle</span>
    </div>
    <div class="w-full flex-col sm:flex-row flex justify-around items-center flex-wrap">
      <PixelatedImage
        v-for="(image, index) in images"
        :key="index"
        :low-res-image="image.low_res_image"
        :image="image.image"
        class="min-w-full sm:min-w-third my-2"
        @click="showImage"
      />
    </div>
    <modal
      name="image-modal"
      width="95%"
      :max-width="600"
      :adaptive="true"
      height="auto"
    >
      <img :src="image">
    </modal>
  </div>
</template>

<script>
  import PixelatedImage from '@/components/PixelatedImage'

  export default {
    name: 'SectionSaloon',

    components: { PixelatedImage },

    data() {
      return {
        image: null,
        images: [
          {
            low_res_image: 'https://user-images.githubusercontent.com/12644599/81474394-6e39e080-9205-11ea-827e-b5d319a0b9bb.jpg',
            image: 'https://user-images.githubusercontent.com/12644599/81475206-0a1a1b00-920b-11ea-81af-7dd0cfbc8a42.jpg',
          },
          {
            low_res_image: 'https://user-images.githubusercontent.com/12644599/81474422-ab9e6e00-9205-11ea-8d6f-c55d4a5989f6.jpg',
            image: 'https://user-images.githubusercontent.com/12644599/81475452-9bd65800-920c-11ea-8126-57b8dfc27395.jpg',
          },
          {
            low_res_image: 'https://user-images.githubusercontent.com/12644599/81474436-bc4ee400-9205-11ea-8a27-3ea4a1d5c51b.jpg',
            image: 'https://user-images.githubusercontent.com/12644599/81475471-ba3c5380-920c-11ea-848b-c504c6ca770b.jpg',
          },
          {
            low_res_image: 'https://user-images.githubusercontent.com/12644599/81474456-e0aac080-9205-11ea-8feb-3ea7555c4360.jpg',
            image: 'https://user-images.githubusercontent.com/12644599/81475495-e952c500-920c-11ea-9db0-60d15d863ca4.jpg',
          },
          {
            low_res_image: 'https://user-images.githubusercontent.com/12644599/81474450-d25ca480-9205-11ea-85e5-6be41a383597.jpg',
            image: 'https://user-images.githubusercontent.com/12644599/81475486-d17b4100-920c-11ea-8d06-feab29f03088.jpg',
          },
          {
            low_res_image: 'https://user-images.githubusercontent.com/12644599/81474470-eaccbf00-9205-11ea-950c-f82c6efc8ef0.jpg',
            image: 'https://user-images.githubusercontent.com/12644599/81475505-fa9bd180-920c-11ea-8836-b7ca0d155515.jpeg',
          },
        ]
      }
    },

    methods: {
      showImage(image) {
        this.image = image
        this.$modal.show('image-modal')
      }
    }
  }
</script>
