<template>

  <div class="theme-container">

    <div class="theme-default-content">

      <h1>404 Not found</h1>

      <p>{{ randomMsg }}</p>

      <RouterLink to="/">Take me home.</RouterLink>

    </div>

  </div>

</template>

<script>

  const msgs = [

    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`,
    `This egg haven't hatched yet.`,
    `This is not the page you're looking for.`

  ]

  export default {

    computed: {

      randomMsg () {

        return msgs[Math.floor(Math.random() * msgs.length)]

      }

    }

  }

</script>

<style lang="stylus" scoped>

  h1
    font-size 4vw
    font-weight bold
    background -webkit-linear-gradient(45deg, #22c1c3, #fdbb2d)
    background-clip text
    -webkit-background-clip text
    -webkit-text-fill-color transparent

  p
    margin-top 0 !important

</style>