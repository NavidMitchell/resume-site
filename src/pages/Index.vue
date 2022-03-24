<template>
  <Layout>
    <div class="container-fluid p-0">
      <About/>
      <hr class="m-0">
      <Skills/>
      <hr class="m-0">
      <Projects/>
      <hr class="m-0">
      <Opensource/>
      <hr class="m-0">
      <Hobbies/>
    </div>
  </Layout>
</template>

<script>
import About from "~/content/About"
import Projects from "~/content/Projects"
import Skills from "~/content/Skills"
import Opensource from "~/content/Opensource"
import Hobbies from "~/content/Hobbies"

export default {
  components: {
    About,
    Projects,
    Skills,
    Opensource,
    Hobbies
  },
  metaInfo: {
    title: "Navid Mitchell",
    titleTemplate: "%s's Resume"
  }
};
</script>

<style lang="scss">

</style>
