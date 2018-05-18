<template>
  <div
    class="grid-element"
    :style="{ width: gridElement.side+'in', height: gridElement.side+'in' }">
    <component :is="gridTypeCalc" />
    <p
      class="character"
      :style="{ fontSize: `${gridElement.fontSize}px` }" >{{ activeCharacter }}</p>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import FieldGrid from './FieldGrid.vue'
import RiceGrid from './RiceGrid.vue'

export default {
  name:'GridElement',
  components: {
    FieldGrid,
    RiceGrid
  },
  props: {
    character: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'activeCharacter',
      'gridElement'
    ]),
    ...mapState([
      'gridType',
    ]),
    gridTypeCalc() {
      switch(this.gridType) {
        case 'rice':
          return RiceGrid;
          break;
        case 'field':
          return FieldGrid;
          break;
        default:
          return FieldGrid;
      }
    }
  },
};
</script>
<style >
  .grid-element {
    border:1px solid rgba(0,0,0,0.3);
    font-size:20px;
    display:flex;
    flex:0 1 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin:1px;
  }
  .grid-element:not(:first-child) p {
    visibility: hidden
  }
  .character {
    font-family: "KaiTi TC" , "楷体", STKaiti, "华文楷体", serif ;
    padding:0;
    margin:0 auto;
    display: block;
    color: rgba(0,0,0,0.1);
    font-weight:300;
  }
</style>
