<template>
  <div class="grid-builder-container">
    <section class="grid-options">
      <div class="option-wrap">
        <label>Choose Character</label>
        <input
          name="character-input"
          type="text"
          :maxlength="maxInput"
          @input="updateActiveCharacter"/>
      </div>

      <div class="option-wrap">
        <label> Size Display</label>
        <input
          name="element-size"
          type="number"
          min="0.6"
          max="1"
          step="0.2"
          @input="updateSize" />
      </div>

      <div class="option-wrap">
        <label>Grid Type</label>
        <select
          placeholder="Grid Type"
          name="grid-type"
          id="grid-type"
          :value="gridType"
          @input="updateGridType">
          <option value="field">田</option>
          <option value="rice">米</option>
        </select>
      </div>
      <div class="option-wrap">
        <nuxt-link to="/PrintGrid">
          <button class="button">Print Grid</button>
        </nuxt-link>
      </div>
    </section>

    <div class="print-container">
      <div class="card-content">
        <div class="content">
          <p>Name: </p>
          <p>Date: </p>
          <p>Character: {{ activeCharacter }}</p>
        </div>
      </div>
      <div
        class="grid-container"
        size="A4">
        <ul class="ul-list-wrapper">
          <li
            class="line-wrapper"
            v-for="index in numberOfLines"
            :key="index">
            <grid-element
              v-for="index in lineLength"
              :key="index"/>
          </li>
        </ul>

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
      'numberOfLines',
      'lineLength'
    ]),
    ...mapState([
      'numberOfElements',
      'numberOfLines',
      'lineLength',
      'gridType',
      'gridElement'
    ]),
    sizeDisplay(){
      return `${this.gridElement.side}-in.`;
    }
  },
  methods: {
    updateActiveCharacter(e) {
      console.log('Active character ', e)
      this.$store.commit('updateActiveCharacter', e.target.value);
    },
    updateGridType(e){
      console.log('Dispatch update grid type', e)
      this.$store.commit('updateGridType', e)
    },
    updateSize(e){
      this.$store.dispatch('updateSize', e.target.value)
      this.$store.dispatch('updateNumberOfElements', e.target.value)
    },
    print(){
      window.print();
    },
  },
  mounted: ()=> {
    console.log('Mounted')
  },
  fetch({store}){
    console.log('Fetch fired')
    store.dispatch('updateNumberOfElements', 1)
  },
}
</script>
<style lang="scss">
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

.grid-container {
  height:9.5in;
  width:8in;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
}
.grid-options {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
}
.field{
  margin: 0 20px;
}
.option-wrap {
  margin:10px;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.grid-builder-container{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.ul-list-wrapper{
  list-style-type: none;
  padding:0;
  margin:0;
  width:100%;
  display:flex;
  flex-direction: column;
}
.line-wrapper{
  display:flex;
  flex-direction: row;
  flex-wrap:nowrap;
  justify-content: center;
}

@media print {
  @page {margin:0;}
  nav.navbar {
    display:none;
  }
  .grid-options{
    display:none;
  }

}



</style>
