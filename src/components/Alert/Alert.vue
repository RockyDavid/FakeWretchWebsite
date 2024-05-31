<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import Message from './Message.vue';
    
    interface iMessage {
      id: string; 
      type: string
      message: string
      timeout: number
    }
    const children = ref<iMessage[]>([]);
    
    const generateUniqueId = (): string => {
      return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };
    
    const addMessage = (type: string, message: string, timeout: number) => {
      const id = generateUniqueId();
      children.value.push({ id, type, message, timeout });
    };

    const removeMessage = (id: string) => {
      children.value = children.value.filter(child => child.id !== id);
    };

    const handleRemoveMessage = (event: CustomEvent) => {
      removeMessage(event.detail.id);
    };
    
    const handleAlertinfo = (event: CustomEvent) => {
      addMessage('info', event.detail.message, 5000);
    };
    const handleAlertWarning = (event: CustomEvent) => {
      addMessage('warning', event.detail.message, 5000);
    };

    onMounted(() => {
      window.addEventListener('alertMessageRemove', handleRemoveMessage as EventListener);
      window.addEventListener('alertinfo', handleAlertinfo as EventListener);
      window.addEventListener('alertwarn', handleAlertWarning as EventListener);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('alertMessageRemove', handleRemoveMessage as EventListener);
      window.removeEventListener('alertinfo', handleAlertinfo as EventListener);
      window.removeEventListener('alertwarn', handleAlertWarning as EventListener);
    });
    
</script>

<template>
  <div class="alertbox">
      <Message v-for="child in children" :key="child.id" :id="child.id"  :type="child.type"  :message="child.message"  :timeout="child.timeout" />
  </div>
</template>

<style scoped>
    .alertbox {
      z-index: 999;
      right: 0;
      bottom: 0;
      padding: 5px;
      position: fixed;
      display: block;
      /* border: 1px solid #000; */
      width: calc(100% / 4);
      height: calc(100% / 4);
      overflow:hidden;
      pointer-events: none;
    }
</style>