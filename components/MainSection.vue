<template>
  <div>
    <div
      class="nes-container"
      :class="{
        'is-dark': dark,
        'with-title': title,
      }"
    >
      <p class="title">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainSection',

    props: {
      title: {
        type: String,
        default: ''
      },
      dark: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
