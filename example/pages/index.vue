<template>
  <div>
    {{ $scss && $scss.variable }}
    {{ exported && exported.js }}
  </div>
</template>

<script>
import scssExported from '~/assets/scss/scss.js'
export default {
  computed: {
    exported () {
      return scssExported
    }
  }

}
</script>
