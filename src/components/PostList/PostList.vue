<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router';
  import PostListRow from './PostListRow.vue';
  import Pagination from './Pagination.vue';
  import { Post, getPostsAsync }  from '../../repositories/Post.ts';

  const router = useRouter();
  const posts = ref<Post[]>([]);
  const pageCurrent = ref<number>(1); 
  const pageCount = ref<number>(10); 
  const pageEnd = ref<number>(27); 
  const PostListRows = ref<Array>([]);
  
  
  function updatePageCurrent(page: number)
  {
    pageCurrent.value = page
    var arrIdx = page - 1;
    getPostsAsync(arrIdx, pageCount.value).then((response: Post[]) => { 
        posts.value = response;
    });
  }

  function goToPost(postId: number, showId: number)
  {
    router.push('/post/' + postId + '/' + showId);
  }


  const divPostList = ref<HTMLDivElement>(null);
  const Show = () => {
    divPostList.value.style.display = "block";
  };
  const Hide = () => {
    divPostList.value.style.display = "none";
  };
  defineExpose({ Show, Hide });
</script>

<template>
  <div ref="divPostList" class="post-list none w:100% h:415px m:0|auto bc:transparent p:0|8px|0|0">
    <PostListRow :post="post" :showId="showId" v-for="post in posts" :key="post.id" @click="goToPost(post.id, post.showId)" />
  </div>
  <Pagination :pageCurrent="pageCurrent" :pageCount="pageCount" @update:pageCurrent="updatePageCurrent" :pageEnd="pageEnd" />
</template>

<style scoped>
  .post-list {
    position: relative;
    overflow-y: scroll;
  }
</style>