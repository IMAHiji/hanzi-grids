<template>
  <div class="grid-builder-container">
    <h1>Grid Builder</h1>
    <div class="grid-options">
      <div class="option-wrap">
        <label for="character-input">Choose Character</label>
        <input
          name="character-input"
          type="text"
          :maxlength="maxInput"
          @keyup="updateActiveCharacter">

      </div>
      <div class="option-wrap">
        <label for="element-size">Size</label>
        <input
          name="element-size"
          type="range"
          min="0.5"
          max="1"
          step="0.1"
          @input="updateSize">

      </div>
      <div class="option-wrap">
        <p>Grid Type</p>
        <select
          name="grid-type"
          id="grid-type"
          :value="gridType"
          @input="updateGridType">
          <option value="field">田</option>
          <option value="rice">米</option>
        </select>

      </div>
      <nuxt-link to="/PrintGrid">
        <button>Print</button>
      </nuxt-link>
    </div>

    <div class="page-preview">
      <div class="header-preview">
        <h2>Character: {{ activeCharacter }}</h2>
        <h2>Grid type: {{ gridType }}</h2>
        <h2>Size: {{ gridElement.side }} inch</h2>
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
      'gridElement',
    ]),
    ...mapState([
      'numberOfElements',
      'gridType',

    ])
  },
  methods: {
    updateActiveCharacter(e) {
      this.$store.commit('updateActiveCharacter', e.target.value);
    },
    populateElements(){
      this.$store.dispatch('updateNumberOfElements')
    },
    updateGridType(e){
      console.log('Dispatch update grid type', e.target.value)
      this.$store.commit('updateGridType', e.target.value)
    },
    updateSize(e){
      this.$store.dispatch('updateSize', e.target.value)
      this.$store.dispatch('updateNumberOfElements', e.target.value)
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
.grid-options {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.option-wrap {
  margin:10px;
}
.grid-builder-container{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
