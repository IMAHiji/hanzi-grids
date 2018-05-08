<template>
  <div class="page-container">
    <h3>Character: {{ activeCharacter }}</h3>
    <div class="grid-container">
      <GridElement
        v-for="index in total"
        :key=index />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import GridElement from '@/components/GridElement.vue';

export default {
  name: 'PrintGrid',
  components: {
    GridElement,
  },
  data() {
    return {
      columns: 8,
      rows: 11,
      total: 80,
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

.page-container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin:0 auto;
  height:11in;
  width:8.5in;
}
.grid-container{

  border: 1px solid black;
  width:8.5in;
  height: 10in;
  display:flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin:0 auto;
}

@media print {
  body * {
    display:none;
  }
  .grid-container, .grid-container *, .page-container,  #app, h3 {
    display:flex;
    margin: 0 auto;
  }
  .page-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin:0 auto;
    height:11in;
    width:8.5in;
  }
  .grid-container {
    border: 1px solid black;
    display:flex;
    flex-wrap: wrap;
    margin:0 auto;
  }
}
</style>
