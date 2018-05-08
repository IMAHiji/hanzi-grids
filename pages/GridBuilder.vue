<template>
  <div class="grid-builder-container">
    <h1>Grid Builder</h1>
    <input
      type="text"
      :maxlength="maxInput"
      @change="updateActiveCharacter">
    <div class="page-preview">
      <div class="header-preview">
        <h2>Character: {{ activeCharacter }}</h2>
      </div>
      <div
        class="grid-container"
        size="A4">
        <grid-element
          v-for="index in testNum"
          :key="index"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
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
      testNum: calculateNumberOfGridElements(9.5, 7.5, 1)
    };
  },
  computed: {
    ...mapGetters([
      'activeCharacter',
    ]),
  },
  methods: {
    updateActiveCharacter(e) {
      this.$store.commit('updateActiveCharacter', e.target.value);
    },
  },
};
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
  justify-content: space-between;
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
</style>
