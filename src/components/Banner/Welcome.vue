<script setup lang="ts">
    import { Banner }  from '../../repositories/Banner.ts'
    import { Like }  from '../../repositories/Like.ts'
    const props = defineProps({
        banner: {
          type: [Object as PropType<Banner>, null],
          required: true
        },
        like: {
          type: [Object as PropType<Like>, null],
          required: true
        },
    })

    var isAlertShow = false;
    function subscript(event) {
        if(isAlertShow)
        {
            return;
        }
        isAlertShow = true;
        
        window.dispatchEvent(new CustomEvent('alertwarn', { detail: { message: '請先登入再訂閱！' }}));

        setTimeout(function(){
            isAlertShow = false;
        }, 5000);
    }

</script>

<template>
    <div id="welcome">
        <!-- h1><a href="." class="fun_click" data-tagname="blog_1">╯✧∇✧╯ 歡迎來到阿哲領地 ╯✧∇✧╯</a></h1 -->  
        <div class="margin-top:50"></div>
        <span class="description">旅遊✈️ 美食🥘 運動🏃‍♀️ 開箱📦️ 手作🙌 攝影📷 </span>
        <span class="description">自煮料理🍱 校園生活📒 優惠訊息📰</span>
        <span class="description">聯絡我：📬️devicten97@gmail.com</span>
        <div class="likopt">
            <i id="optLike" @click="like.countOfLikes++"><span class="ic-hart"></span><b>{{ like.countOfLikes }}</b>愛的鼓勵</i>
            <i id="optSubscript" @click="subscript"><span class="ic-start"></span><b>{{ like.countOfSubscript }}</b>訂閱站台</i>
        </div>  
    </div>
</template>

<style scoped>

    #welcome  {
        width: calc(100% / 2 - 15px);
        display: inline-block;
        vertical-align: top;
    }
    
    #welcome h1 {
        font-size: 32px;
        margin: 0px;
        text-align: left;
    } 
    
    #welcome h1 a {
        color: var(--vt-text-dark);
    }
    
    #welcome .description {
        font-size:14px;
        z-index: 10;
        font-weight:normal;
        color: var(--vt-text-dark);
        position: relative;
        display: block;
        text-align: left;
    }
    .likopt {
      margin-top:35px;
    }
    .likopt i {
      display:block; 
      float: left; 
      margin: 5px;
      width: 125px; 
      height: 30px;
      line-height: 24px;
      font-style: normal; 
      font-size: 12px; 
      text-align: left; 
      color: var(--vt-text-dark);
      cursor: pointer;
      background-color: black; 
      }
      .ic-hart:before {
          content: '♥';
      }
      .ic-start:before {
          content: '★';
      }
      .likopt i span{ display: block; float: left; overflow: hidden; width: 25px; height: 25px; line-height: 25px; text-align: center; border-right: 1.5px solid #FFF; font-size: 15px;}
      .likopt i b{ margin: 0 5px; font-size: 14px;}
      .likopt i.actv span{ color: #797979; text-shadow:none; cursor:text;}
      .likopt i.actv{ color: #dddddd; cursor:text;}


</style>