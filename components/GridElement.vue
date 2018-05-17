<template>
  <div
    class="grid-element"
    :style="{ width: gridElement.side+'in', height: gridElement.side+'in' }">
    <span class="center-horizontal" />
    <span class="center-vertical" />
    <p
      class="character"
      :style="{ fontSize: `${gridElement.fontSize}px` }" >{{ activeCharacter }}</p>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
export default {
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
    ])
  },
};
</script>
<style >
  .grid-element {
    border:1px solid black;
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
    color: rgba(0,0,0,0.2);
    font-weight:300;
  }


  .center-vertical {
    position: absolute;
    left:50%;
    width: 1px;
    height:100%;
    border: 0.5px dotted rgba(0,0,0,0.5);
  }
  .center-horizontal {
    position: absolute;
    top:50%;
    width: 100%;
    height:1px;
    border: 0.5px dotted rgba(0,0,0,0.5);
  }
</style>
