<template>
  <div>
    {{ $scss && $scss.variable }}
    {{ scss && scss.js }}
  </div>
</template>

<script>
import scss from '~/assets/scss/scss.js'
export default {
  data(){return{
    scss
  }}

}
</script>
