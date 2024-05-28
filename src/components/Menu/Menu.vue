<script setup lang="ts">
    import { ref } from 'vue'
    import { Service, getService }  from '../../repositories/Service.ts'

    var services = ref<Service>(new Service(-1, '', ''));
        getService().then( response => { 
       services.value = response 
    })

</script>

<template>
    <div id="menu">
        <div class="service">
            <nav class="serviceList">
                  <RouterLink v-for="child in services" :key="child.id" :to="child.link">{{ child.title }}</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    #menu {
        display: block;
        width: 703px;
        margin: 0 auto;
        padding: 0 10px;
    }
    .service { 
        float:right; 
        width:100%;
    }
    .service nav a {
        display: inline-block;
        margin:0 0 0 10px; 
        line-height: 28px;
        text-align: center;
        width: 45px;
    }
    .serviceList {
        margin:0px;
        padding:0px;
        text-align: right;
    }
    .serviceList a{color:#000;weight: ;}
</style>