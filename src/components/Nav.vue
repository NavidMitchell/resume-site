<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <div v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
      <span class="d-block d-lg-none">Navid Mitchell</span>
      <span class="d-none d-lg-block">
        <g-image
          alt="Image of Navid"
          src="../assets/images/profile-photo.png"
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
        />
      </span>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#about')">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#skills')">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#projects')">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#opensource')">Open Source</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#hobbies')">Hobbies</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>
