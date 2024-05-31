<script setup lang="ts">
  import { ref } from 'vue'
  import { Post, getPostByIdAsync }  from '../../repositories/Post.ts';
  import { Recipe, getRecipeByIdAsync }  from '../../repositories/Recipe.ts';

  const props = defineProps({
    postId: {
      type: Number,
      required: true
    }
  })

  const post = ref<Post>(null);
  const recipe = ref<Recipe>(null);

      console.log('props.postId', props.postId);
  getPostByIdAsync(props.postId).then(response => { 
      console.log('getPostByIdAsync', response);
    post.value = response;
  });
  getRecipeByIdAsync(props.postId).then(response => { 
    recipe.value = response;
  });
</script>

<template>
    <div class="post-content">
      <div class="post-board">
        <h2 class="post-head">AAA</h2>
        <div class="post-body">
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
          margin: 20px auto;
          background-color: #f8f8f8;
          border: 2px solid #ccc;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: left;
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