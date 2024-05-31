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
          <div class="dot"></div>
        </nav>
    </div>
</template>

<style scoped>
    #menu {
        position: relative;
        display: block;
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;
        margin-top: -6px;
        height: 50px;
    }
    
    .navMenu {
      position: absolute;
      top: 0;
      right: 0;
    }

    .navMenu a {
      color: #f6f4e6;
      text-decoration: none;
      font-size: 1.2em;
      text-transform: uppercase;
      font-weight: 500;
      display: inline-block;
      width: 80px;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }

    .navMenu a:hover {
      color: #fddb3a;
    }
    .navMenu a.router-link-active {
      border-bottom: 1px solid #FFF;
    }
    

    .navMenu .dot {
         margin-top: 6px;
         margin-left: 6px;
         width: 6px;
         height: 6px;
         background: #fddb3a;
         border-radius: 50%;
         opacity: 0;
         -webkit-transform: translateX(30px);
         transform: translateX(30px);
         -webkit-transform: translateY(15px);
         transform: translateY(15px);
         -webkit-transition: all 0.2s ease-in-out;
         transition: all 0.2s ease-in-out;
    }

    .navMenu a:nth-child(1):hover ~ .dot {
      -webkit-transform: translateX(30px);
      transform: translateX(30px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    .navMenu a:nth-child(2):hover ~ .dot {
      -webkit-transform: translateX(110px);
      transform: translateX(110px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    .navMenu a:nth-child(3):hover ~ .dot {
      -webkit-transform: translateX(200px);
      transform: translateX(200px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }

    .navMenu a:nth-child(4):hover ~ .dot {
      -webkit-transform: translateX(285px);
      transform: translateX(285px);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      opacity: 1;
    }
</style>