<template>
  <b-container class="mb-5 p-0" fluid>

    <b-row class="mb-3" no-gutters>
      <b-col cols="12" md="8">
        <h3 class="mb-0">
          <slot name="title">
          </slot>
        </h3>
        <div class="subheading">
          <slot name="company">
          </slot>
        </div>
      </b-col>
      <b-col v-if="when" class="text-md-right" cols="12" md="4">
        <span class="text-primary">{{when}}</span>
      </b-col>
    </b-row>

    <b-row v-if="hasImageSlot()" no-gutters>
      <b-col class="d-none d-sm-block">
        <b-row no-gutters>
          <b-col cols="8">
            <p class="pr-2">
              <slot name="description">
              </slot>
            </p>
          </b-col>
          <b-col cols="4">
            <slot name="image">
            </slot>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="d-block d-sm-none">
        <b-row class="mb-3" no-gutters>
          <b-col>
            <slot name="image">
            </slot>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col>
            <p>
              <slot name="description">
              </slot>
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row v-else gutters>
      <b-col cols="12" md="8">
        <slot name="description">
        </slot>
      </b-col>
    </b-row>

  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
             components: { }
           })
export default class ProjectItem extends Vue {

  @Prop({ required: false })
  public when!: string

  constructor() {
    super()
  }

  hasImageSlot () {
    return !!this.$slots['image']
  }

}
</script>

<style scoped>


</style>
