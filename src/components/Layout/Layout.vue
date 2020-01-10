<template>
  <div class="layout">
    <Header></Header>

    <main>
      <aside>aside</aside>

      <slot></slot>
    </main>

    <footer>footer</footer>
  </div>
</template>

<script>
  import Header from './Header'

  export default {
    components: {
      Header: Header,
    },
    data() {
      return {

      }
    }
  }
</script>
