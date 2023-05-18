<template>
<div  >
  <nav-bar />

  <div class="is-widescreen" >
    <div class="columns" style="max-height: calc(100vh - 2.8rem)" >
      <side-menu />

      <div class="column content" style="height: calc(100vh - 2.72rem)">
        <grid />
      </div >
    </div>

  </div>






</div>
</template>

<script>
//survey
//download
//grid
//batch_import
//help


// https://jsbin.com/wejomuf/edit?html,css,output
// https://github.com/jgthms/bulma/issues/2560


// import 'bulma/css/bulma.css'

import NavBar   from './components/NavBar.vue'
import SideMenu from './components/SideMenu.vue'
import Grid from     './components/Grid.vue'



export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  components: {
    NavBar,
    SideMenu,
    Grid
  },


  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style lang="scss">
// body {
//   overflow-y: hidden; /* Hide vertical scrollbar */
//   overflow-x: hidden; /* Hide horizontal scrollbar */
// }
// @import 'bulma/css/bulma.css';

@import "./assets/bulma.scss";

.menu {
  position: sticky;
  display: inline-block;
  vertical-align: top;
  max-height: 100vh;
  overflow-y: auto;
  width: 230px;
  top: 0;
  bottom: 0;
  padding: 20px;
}

.content {
  display: inline-block;
}

</style>
