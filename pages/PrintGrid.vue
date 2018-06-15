<template>
  <div class="grid-builder-container">
    <div class="print-container">
      <div class="sheet-header">
        <p>Name: </p>
        <p>Date: </p>
        <p>Character: {{ activeCharacter }}</p>
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
  name: 'PrintGrid',
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
    print(){
      window.print();
    },
  },
  mounted: ()=> {
    console.log('Mounted')
  },
  fetch({store}){
  },
}
</script>
<style lang="scss">
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
  .sheet-header{
    margin-top:40px;
  }

}



</style>
