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
        <h2 class="post-head"> {{ post.title }} </h2>
        <div class="post-body">
            <p style="text-align: center;"> {{ recipe.name }} </p>
            <img width="300px" :src="recipe.image" />
            <ul style="text-align: left;width: 312px;margin: 0 auto;font-size: 12px;"><li v-for="text in recipe.instructions"> {{ text }} </li></ul> 
            <p style="text-align: left;"> {{ post.body }} </p>
            <iframe src="https://www.youtube.com/embed/d6SLsUv7tlw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  }
      .post-board {
          width: 100%;
          margin: 0px auto;
          background-color: #f8f8f8;
          border: 2px solid #ccc;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
  .post-head {
    position: relative;
    display: block;
    color: #333;
    text-align: left;
  }
  .post-body {
    position: relative;
    display: block;
    text-align: center;
  }
    iframe {
      margin: 0 auto;
      width: 850px;
      height: 478px;
    }

  /* 美化留言板 */
  .message-board {
      width: 100%;
      margin: 20px auto;
      background-color: #f8f8f8;
      border: 2px solid #ccc;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-align: left;
  }
  .message-board h2 {
      color: #333;
      text-align: center;
  }
  .message-board p {
      color: #666;
      line-height: 1.5;
  }
  .message-board input[type="text"],
  .message-board textarea {
      width: calc(100% - 22px);
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
  }
  .message-board input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
  }
  .message-board input[type="submit"]:hover {
      background-color: #45a049;
  }
</style>