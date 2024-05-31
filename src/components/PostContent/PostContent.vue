<script setup lang="ts">
  import { ref } from 'vue'
  import { Post, PostReactions, getPostByIdAsync }  from '../../repositories/Post.ts';
  import { Recipe, getRecipeByIdAsync }  from '../../repositories/Recipe.ts';

  const props = defineProps({
    postId: {
      type: Number,
      required: true
    }
  })

  var recipe = ref<Recipe>(null);
  var posts = ref<Post[]>([]);
  getRecipeByIdAsync(props.postId).then(response => { 
    recipe.value = response;
        getPostByIdAsync(props.postId).then(response => { 
          posts.value.push(response);;
        });
  })
</script>

<template>
    <div class="post-content">
      <div class="post-board" v-for="post in posts" :key="post.id">
        <h1 class="post-head"> {{ recipe.id + '. ' + recipe.name }} </h1>
        <div class="post-body">
            <h2 class="recipe-name"> {{ post.title }} </h2>
            <img class="recipe-img" :src="recipe.image" />
            <ul class="recipe-instructions"><li v-for="text in recipe.instructions"> {{ text }} </li></ul> 
            <p class="post-body-detail"> {{ post.body }} </p>
            <div class="clear-both"></div>
        </div>
      </div>
      <div class="message-board">
          <h2>留言板</h2>
          <form>
              <input type="text" name="name" placeholder="您的姓名">
              <textarea name="message" rows="4" placeholder="您的留言"></textarea>
              <input type="submit" value="發表留言">
          </form>
          <p>歡迎留下您的留言！</p>
          <p><strong>阿明:</strong> 你好啊！這裡真漂亮！</p>
          <p><strong>小美:</strong> 喜歡你的照片輪撥牆，真的很酷！</p>
          <p><strong>大強:</strong> 這個音樂播放器不錯，我也想要一個！</p>
      </div>
    </div>
</template>

<style scoped>
  .post-content {
      position: relative;
      display: block;
      width: 100%;
      margin: 0 auto;
      color: #000;
  }
      .post-board {
          width: 100%;
          margin: 0px auto;
          background-color: #f8f8f8;
          padding: 15px;
      }
  .post-head {
    position: relative;
    display: block;
    text-align: left;
    margin: 0;
  }
  .post-body {
    position: relative;
    display: block;
  }
    .recipe-name {
        width: 100%;
        text-align: left;
        display: block;
        position: relative;
        margin: 0;
    }
    .recipe-img {
        float: left;
        width: 350px;
        margin-right: 30px;
        margin-bottom: 6px;
    }
    .post-body-detail {
        float: left;
        display: inline-block;
        width: calc(100% - 380px);
        margin-top: -12px;
        margin-left: -20px;
        text-indent: 2em;
    }
    iframe {
      margin: 0 auto;
      width: 850px;
      height: 478px;
    }

  /* 美化留言板 */
  .message-board {
      width: 100%;
      margin: 6px auto;
      background-color: #f8f8f8;
      padding: 15px;
      text-align: left;
      color: #000;
  }
  .message-board h2 {
      text-align: center;
  }
  .message-board p {
      line-height: 1.5;
  }
      .message-board input[type="text"],
      .message-board textarea {
          width: calc(100% - 22px);
          padding: 10px;
          margin: 5px 0;
      }
      .message-board input[type="submit"] {
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
      }
</style>