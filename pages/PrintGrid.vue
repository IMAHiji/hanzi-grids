<template>
  <div class="grid-builder-container">
    <div class="card">
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
      'numberOfLines',
      'lineLength'
    ]),
    ...mapState([
      'numberOfElements',
      'numberOfLines',
      'lineLength',
      'gridType',
      'gridElement'
    ])
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
  justify-content: center;
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
}
</style>
