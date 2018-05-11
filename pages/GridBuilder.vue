<template>
  <div class="grid-builder-container">
    <h1>Grid Builder</h1>
    <div class="grid-options">
      <label for="character-input">Choose Character</label>
      <input
        name="character-input"
        type="text"
        :maxlength="maxInput"
        @input="updateActiveCharacter">
      <nuxt-link to="/PrintGrid">
        <button>Print</button>
      </nuxt-link>
    </div>

    <div class="page-preview">
      <div class="header-preview">
        <h2>Character: {{ activeCharacter }}</h2>
      </div>
      <div
        class="grid-container"
        size="A4">
        <grid-element
          v-for="index in numberOfElements"
          :key="index"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import GridElement from '@/components/GridElement.vue';
import calculateNumberOfGridElements from '~/plugins/gridCalc'
export default {
  name: 'GridBuilder',
  components: {
    GridElement,
  },
  data() {
    return {
      maxInput: 1,
    };
  },
  computed: {
    ...mapGetters([
      'activeCharacter',
    ]),
    ...mapState([
      'numberOfElements'
    ])
  },
  methods: {
    updateActiveCharacter(e) {
      this.$store.commit('updateActiveCharacter', e.target.value);
    },
    populateElements({store}){
      this.$store.dispatch('updateNumberOfElements')
    }
  },
  async fetch({store}){
    await store.dispatch('updateNumberOfElements')
  }
}
</script>
<style>
.page-preview{
  height:11in;
  width:8.5in;
  margin:0 auto;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-preview{
  border: 1px solid red;
  height: 1in;
  width:8.5in;
}
.grid-container {
  border: 2px solid green;
  height:9.5in;
  width:8in;
  margin:0 auto;
  display:flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}
.grid-options{
  display: flex;
  justify-content: center;
}
.grid-builder-container{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
