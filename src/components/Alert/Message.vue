<script setup lang="ts">
  import { defineProps, ref, watch, onMounted } from 'vue';

  const props = defineProps({
      id: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true,
        validator: (prop) => ['trace', 'info', 'success', 'danger', 'warning'].includes(prop)
      },
      message: {
        type: String,
        required: true
      },
      timeout: {
        type: Number,
        default: 5000
      }
  })

    const rawClass = ref('alert alert-secondary');


    watch(
      () => props.type,
      (newType) => {
        switch (newType) {
          case 'info':
            rawClass.value = 'alert alert-info';
            break;
          case 'success':
            rawClass.value = 'alert alert-success';
            break;
          case 'danger':
            rawClass.value = 'alert alert-danger';
            break;
          case 'warning':
            rawClass.value = 'alert alert-warning';
            break;
          default:
            rawClass.value = 'alert alert-secondary';
            break;
        }
      },
      { immediate: true }
    );
    
    onMounted(() => {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('alertMessageRemove', { detail: { id: props.id }}));
      }, props.timeout);
    });
</script>

<template>
  <div :class="rawClass" role="alert">{{ props.message }}</div>
</template>
  
<style scoped>
  .alert-primary .alert-link {
      color: #06357a;
  }
  .alert-secondary .alert-link {
      color: #34383c;
  }
  .alert-success .alert-link {
      color: #0c4128;
  }
  .alert-danger .alert-link {
      color: #6a1a21;
  }
  .alert-warning .alert-link {
      color: #523e02;
  }
  .alert-info .alert-link {
      color: #04414d;
  }
  .alert-link {
      font-weight: 700;
  }
  .alert-primary {
      color: #084298;
      background-color: #cfe2ff;
      border-color: #b6d4fe;
  }
  .alert-secondary {
      color: #41464b;
      background-color: #e2e3e5;
      border-color: #d3d6d8;
  }
  .alert-success {
      color: #0f5132;
      background-color: #d1e7dd;
      border-color: #badbcc;
  }
  .alert-danger {
      color: #842029;
      background-color: #f8d7da;
      border-color: #f5c2c7;
  }
  .alert-warning {
      color: #664d03;
      background-color: #fff3cd;
      border-color: #ffecb5;
  }
  .alert-info {
      color: #055160;
      background-color: #cff4fc;
      border-color: #b6effb;
  }
  .alert {
      position: relative;
      padding: 1rem 1rem;
      margin-bottom: 1rem;
      border: 1px solid transparent;
      border-radius: .25rem;
  }
</style>