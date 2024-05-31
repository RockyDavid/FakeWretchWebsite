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
        <h1>
            <a href="." class="fun_click" data-tagname="blog_1">{{ banner.title }}</a>
            <span class="description">{{ banner.description }}</span>
            <div class="likopt">
                <i @click="like.countOfLikes++"><span class="ic-hart"></span><b>{{ like.countOfLikes }}</b>愛的鼓勵</i>
                <i @click="subscript"><span class="ic-start"></span><b>{{ like.countOfSubscript }}</b>訂閱站台</i>
            </div>
        </h1>    
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
        padding: 90px 0 0 225px;
        margin: 0px;
        text-align: left;
    } 
    
    #welcome h1 a {
        color: #3F51B5;
        background: rgba(200, 200, 200, 0.5);
        border-radius: 5px;
    }
    
    #welcome .description {
        position: absolute;
        font-size:11px;
        top: 140px;
        left: 230px;
        z-index: 10;
        font-weight:normal;
        color: #3F51B5;
        background: rgba(200, 200, 200, 0.5);
        border-radius: 5px;
    }
    .ic-hart:before {
        content: '♥';
    }
    .ic-start:before {
        content: '★';
    }
    
.likopt {
    margin-top:35px;
}
.likopt i {
    display:block; 
    float: left; 
    height: 25px; 
    margin: 5px;
    line-height: 25px; 
    width: 140px; 
    font-style: normal; 
    color: #00eeff; 
    font-size: 12px; 
    text-align: left; 
    box-shadow: 1px 1px 7px rgba(0,0,0,0.3);  
    text-shadow: 1px 1px 5px rgba(0,0,0,0.3); 
    cursor: pointer; 
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEdJREFUeNqckEEKACAIBAt6rI/tSbp2CXQPC5G3YVZRp5ntcWtl5igACqIDGcgYIpohkDHvoA1Pc1fmAx635h55Dxv13iPAAF/AWJ5ev2QbAAAAAElFTkSuQmCC);
}
    .likopt i span{ display: block; float: left; overflow: hidden; width: 25px; height: 25px; line-height: 25px; text-align: center; border-right: 1px solid #514b4a; font-size: 15px;}
    .likopt i b{ margin: 0 5px; font-size: 14px;}
    .likopt i.actv span{ color: #797979; text-shadow:none; cursor:text;}
    .likopt i.actv{ color: #dddddd; cursor:text;}

</style>