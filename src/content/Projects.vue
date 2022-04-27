<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
    <div class="w-100">
      <h2 class="mb-5">Projects</h2>

      <project-item when="May 2014 - Present">
        <template #title>
          MBTA Passenger Counting System
        </template>
        <template #company>
          Monster Software
        </template>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </template>
      </project-item>

      <project-item when="May 2014 - Present">
        <template #title>
          Personal Video Management System
        </template>
        <template #company>
          mThinx
        </template>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </template>
        <template #image>
          <b-img thumbnail fluid src="/images/mThinx-md.png" alt="mThinx Personal Video Management System"></b-img>
        </template>
      </project-item>

    </div>
  </section>
</template>

<script>
import ProjectItem from "~/components/ProjectItem"

export default {
  components: {
    ProjectItem
  }
};
</script>


<style scoped lang="scss">


</style>