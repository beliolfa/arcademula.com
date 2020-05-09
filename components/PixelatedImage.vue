<template>
  <div>
    <img
      :src="lowResImage"
      style="image-rendering: pixelated;"
      class="w-full"
      @click="$emit('click', image)"
    >
  </div>
</template>

<script>
  export default {
    name: 'PixelatedImage',

    props: {
      lowResImage: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  }
</script>
