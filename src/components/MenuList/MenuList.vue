<script setup lang="ts">
  import { ref } from 'vue'
  import { Menu, getMenuAsync }  from '../../repositories/Menu.ts'

  var menus = ref<Menu>(new Menu(-1, '', ''));
  getMenuAsync().then( response => { 
    menus.value = response 
  })
</script>

<template>
    <div id="menu">
        <nav class="navMenu">
          <RouterLink v-for="m in menus" :key="m.id" :to="m.link" >{{ m.title }}</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    #menu {
        position: relative;
        display: block;
        width: 100%;
        margin: 6px 0;
        padding: 0 10px;
        height: 35px;
    }
    
    .navMenu {
      position: absolute;
      top: 0;
      left: 0;
    }

    .navMenu > a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2em;
      text-transform: uppercase;
      font-weight: 500;
      display: inline-block;
      width: 80px;
      border-bottom:4px solid transparent;
    }
  
    .navMenu > a.active {
      cursor: default;
      border-bottom:4px solid #FFF;
    }
</style>