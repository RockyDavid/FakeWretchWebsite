<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Post, getPostByIdAsync }  from '../../repositories/Post.ts';
  import { Message, getMessagesAsync }  from '../../repositories/Message.ts';
  import { Loading }  from '../Global/Loading.ts';

  onMounted(() => {
    Loading.ShowAsync(() => {
      var divPostContent = document.getElementById('postContent');
      divPostContent.style.display = "block";
      Loading.HideAsync();
    });
  });

  const props = defineProps({
    postId: {
      type: Number,
      required: true
    },
    showId: {
      type: Number,
      required: true    
    }
  })

  var divPostContent = ref<HTMLDivElement>(null);
  var post = ref<Post>(new Post(0, 0, '', '', '', 0, 0, 0, 0, '', ''));
  var msgs = ref<Message[]>([]);
  
  getPostByIdAsync(props.postId, props.showId).then(response => { 
    post.value = response;
  });
  getMessagesAsync(props.postId).then(response => { 
    msgs.value = response;
  });

  function append()
  {
      var divPostContent = document.getElementById('postContent');
      var txtName = document.getElementById('txtName');
      var txtMsg = document.getElementById('txtMsg');
      msgs.value.push(new Message(msgs.value.length+1, txtName.value, txtName.value));
      divPostContent.scrollTo(0, divPostContent.scrollHeight+20);
  }
</script>

<template>
    <div id="postContent" class="post-content">
      <div class="post-board r:10 bd:blur(3) b:1;solid;white/.1 bg:black/.3 blend:hard-light">
        <h1 class="post-head"> {{ props.showId + '. ' + post.title }} </h1>
        <div class="post-body">
            <div class="post-body-text" v-html="post.body"></div>
            <div class="wrapper">
                <div class="h-fix-iframe">
                    <iframe src="https://www.youtube.com/embed/d6SLsUv7tlw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="clear-both"></div>
        </div>
      </div>
      <div class="message-board r:10 bd:blur(3) b:1;solid;white/.1 bg:black/.3 blend:hard-light">
          <h2>留言板</h2>
          <form>
              <input id="txtName" type="text" name="name" placeholder="您的姓名">
              <textarea id="txtMsg" name="message" rows="4" placeholder="您的留言"></textarea>
              <a class="submit" @click="append">發表留言</a>
              <div class="clear-both"></div>
          </form>
          <p>歡迎留下您的留言！</p>
          <p v-for="msg in msgs" :key="msg.id"><strong>{{ msg.name }}:</strong> {{ msg.message }}</p>
      </div>
    </div>
</template>

<style scoped>
  .post-content {
      position: relative;
      display: none;
      width: 100%;
      margin: 0 auto;
      padding: 0px 8px 0px 0px;
      overflow-y: scroll;
      height: 775px;
  }
      .post-board {
          width: 100%;
          margin: 0px auto;
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
      padding: 15px;
      text-align: left;
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
      border-radius: 8px;
    }
    .message-board a.submit {
      padding: 4px 12px;
      margin-bottom: 6px;
      border-radius: 5px;
      cursor: pointer;
      display: inline-block;
      background-color: #42b883;
      color: #FFF;
    }
    
    .wrapper { width: 100%; height: 100%; margin:0 auto; background: #CCC; clear: both;}
    .h-fix-iframe        {position:relative; padding-top: 56%;}
    .h-fix-iframe iframe {position:absolute;top:0;left:0;width:100%; height:100%;}
</style>