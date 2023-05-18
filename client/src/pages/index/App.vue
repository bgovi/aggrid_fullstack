<template>
<div>
  <nav-bar />

  <div class="is-widescreen">
    <div class="columns">
      <side-menu />

      <div class="column content">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
          </h2>
      </div>
    </div>

  </div>






</div>
</template>

<script>

// https://jsbin.com/wejomuf/edit?html,css,output

import 'bulma/css/bulma.css'

import NavBar   from './components/NavBar.vue'
import SideMenu from './components/SideMenu.vue'




export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  components: {
    NavBar,
    SideMenu
  },


  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style scoped>
.menu {
  position: sticky;
  display: inline-block;
  vertical-align: top;
  max-height: 100vh;
  overflow-y: auto;
  width: 200px;
  top: 0;
  bottom: 0;
  padding: 30px;
}

.content {
  display: inline-block;
}


</style>
