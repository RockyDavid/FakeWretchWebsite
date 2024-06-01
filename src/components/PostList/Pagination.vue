<script setup lang="ts">
  import { ref, onMounted, watch, nextTick  } from 'vue';
  import { Post, PostReactions, hasNextPage }  from '../../repositories/Post.ts';
  import { MouseImageEvent }  from '../MouseImage/MouseImageEvent.ts'

  
  const props = defineProps({
    pageCurrent: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    }
  })
  const emit = defineEmits<{
    (e: 'update:pageCurrent', page: number): void
  }>()
  var pages = ref<number[]>([]);
  var pageStart = ref<number>(1);
  var pageEnd = ref<number>(27);
  var pageCanPrev = ref<boolean>(false);
  var pageCanNext = ref<boolean>(false);
  
  function getPages()
  {
    pages.value = [];
    var canNext = true;
    var pageMax = pageStart.value + props.pageCount;
    if (pageEnd.value <= pageMax)
    {
      pageMax = pageEnd.value;
      canNext = false;
    }
    for(var p = pageStart.value; p < pageMax; p++)
    {
      pages.value.push(p);
    }
    pageCanPrev.value = pageStart.value > 1 ? true : false;
    pageCanNext.value = canNext;
  }
  getPages();
  emit('update:pageCurrent', pageStart.value);

  function setPageIndex(pageIndex: number)
  {
    if(props.pageCurrent === pageIndex)
    {
      return;
    }
    emit('update:pageCurrent', pageIndex);
    getPages();
  }

  function doPrev()
  {
    if(props.pageCurrent === 1)
    {
      return;
    }
    var pageIndex = (props.pageCount * (Math.floor(props.pageCurrent / props.pageCount) - 1)) + 1;
    pageStart.value = pageIndex;
    emit('update:pageCurrent', pageIndex);
    getPages();
  }
  
  function doNext()
  {
    if(props.pageCurrent === pageEnd.value)
    {
      return;
    }
    var pageIndex = (props.pageCount * Math.ceil(props.pageCurrent / props.pageCount)) + 1;
    pageStart.value = pageIndex;
    emit('update:pageCurrent', pageIndex);
    getPages();
  }

  onMounted(() => {
      MouseImageEvent.bindElementById('btnPagePrev');
      MouseImageEvent.bindElementById('btnPageNext');
  });
  
  nextTick(() => {
    pages.value.forEach((page) => {
      const element = document.getElementById(`Page$${page}`);
      if (element) {
        MouseImageEvent.bindCustomElement(element);
      }
    });
  });
</script>

<template>
    <div id="pagination">
      <a v-show="pageCanPrev" @click="doPrev" id="btnPagePrev"> « </a>
      <a v-for="p in pages" :class="p === props.pageCurrent ? 'active' : '' " @click="setPageIndex(p)" :id="'Page$' + p"> {{ p }} </a>
      <a v-show="pageCanNext" @click="doNext" id="btnPageNext"> » </a>
    </div>
</template>

<style scoped>
  #pagination {
    display: block;
    position: relative;
    text-align: center;
    height: 46px;
    background-color: transparent;
      border-bottom:4px solid transparent;
  }
  #pagination > a {
    cursor: none;
    font-size: 20px;
    margin: 0 6px;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    color: #FFF;
  }
  #pagination > .router-link-active {
    cursor: default;
    border-bottom:4px solid #FFF;
  }
</style>