<template>
  <div class="grid-element">
    <span class="center-horizontal" />
    <span class="center-vertical" />
    <p class="character">{{ activeCharacter }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
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
    ]),
  },
};
</script>
<style>
  .grid-element {
    border:1px solid black;
    font-size:20px;
    height:1in;
    width: 1in;
    display:flex;
    flex:0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin:2px auto;
  }
  .character {
    font-family: "KaiTi TC" , "楷体", STKaiti, "华文楷体", serif ;
    padding:0;
    margin:0 auto;
    display: block;
    color: rgba(0,0,0,0.2);
    font-size: 70px;
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
