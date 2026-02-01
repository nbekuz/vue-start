<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 383.6 204.11"
    :width="size"
    :height="size"
    class="icon"
    aria-hidden="true"
    :style="{ color }"
  >
    <polygon
      points="342.42 0 297.35 35.62 297.35 79.58 342.42 44.55 342.42 204.11 383.6 204.11 383.6 0 342.42 0"
    />
    <path
      d="M107.19,165.87H40.57V0H0v204.11h137.73v-.14c-13.61-9.34-24.31-22.57-30.54-38.1Z"
    />
    <path
      d="M241.01,57.76c-13.78-11.61-31.39-18.59-50.58-18.59-44.18,0-79.99,36.92-79.99,82.47s35.81,82.47,79.99,82.47c19.19,0,36.8-6.97,50.58-18.59v18.59h41.02V43.22h-41.02v14.55ZM196.42,167.69c-24.63,0-44.59-20.58-44.59-45.97s19.96-45.97,44.59-45.97,44.59,20.58,44.59,45.97-19.96,45.97-44.59,45.97Z"
    />
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
  fill: currentColor;
  vertical-align: middle;
}
</style>

<script>
export default {
  name: 'LogoIcon',
  props: {
    size: {
      type: [Number, String],
      default: '1em'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
