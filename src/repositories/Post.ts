import { common } from "../helper/common";

export class Post {
  constructor(
    public showId: number,
    public id: number,
    public title: string,
    public body: string,
    public tags: string[],
    public views: number,
    public reply: number,
    public trackback: number,
    public userId: number,
    public createTime: Date,
    public imgSrc: String,
  ) {}
}

const data: Post[] = [
  new Post(
    0,
    1,
    "2024元旦快樂",
    ` <div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #e74c3c;">2024元旦快樂</h1>
        <p>隨著新年的鐘聲即將敲響，我們迎來了2024年的第一天。在這個特殊的時刻，我們不僅告別了過去的一年，更是展望著嶄新的未來。元旦是一個充滿希望和新開始的節日，讓我們一起來慶祝這個美好的日子，共同迎接新的挑戰和機遇。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/1387577/pexels-photo-1387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="New Year Celebration" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>2024年元旦，家家戶戶都沉浸在歡樂的氣氛中。街道上掛滿了燈籠和彩帶，商店裡播放著喜慶的音樂，人們的臉上洋溢著幸福的笑容。在這一天，我們與親朋好友共聚一堂，共同分享這份喜悅。</p>
        <p style="color: #e74c3c; font-weight: bold;">新的一年意味著新的開始。每個人都在這個時刻許下新的願望和目標，希望在未來的一年裡能夠實現心中的夢想。</p>
        <p>元旦也象徵著團圓和感恩。我們感謝過去一年中的收穫和成長，並期待著未來的日子裡能夠更加美好。無論過去的一年裡經歷了多少挑戰和困難，元旦的到來讓我們充滿了希望和力量。</p>
        <p>讓我們舉杯歡慶，為2024年的到來乾杯。願新的一年裡，大家都能夠身體健康、事事順心、心想事成。讓我們一起努力，迎接更加美好的明天。2024元旦快樂！</p>
    </div>`,
    ["日常", "節日"],
    3123,
    3,
    1,
    1,
    new Date("2024-01-01 00:00:32"),
    "https://images.pexels.com/photos/1387577/pexels-photo-1387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    2,
    "春日賞櫻指南",
    `<div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #ff69b4;">春日賞櫻指南</h1>
        <p>春天來臨，櫻花盛開，我們為您準備了一份賞櫻指南。無論是在公園散步，還是參加櫻花節，都能找到最佳的賞櫻地點。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/2235303/pexels-photo-2235303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cherry Blossoms" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>本指南包含了賞櫻的歷史背景、櫻花的種類介紹，以及如何拍攝最美的櫻花照片。讓您的賞櫻之旅更加豐富多彩。</p>
        <p style="color: #ff69b4; font-weight: bold;">帶上您的野餐墊，享受一個悠閒的下午，與家人朋友一起在櫻花樹下共度美好時光。</p>
    </div>`,
    ["旅遊", "自然", "文化"],
    2745,
    12,
    2,
    3,
    new Date("2024-01-05 09:30:00"),
    "https://images.pexels.com/photos/2235303/pexels-photo-2235303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    3,
    "科技展覽會",
    `<div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #2ecc71;">科技展覽會</h1>
        <p>今年的科技展覽會將展出最新的科技創新和發明。從智慧家居到人工智慧，您將有機會親身體驗未來的生活方式。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Technology Expo" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>展覽會還將舉辦一系列講座和工作坊，由業界專家主持，讓您了解科技如何改變我們的世界。</p>
        <p style="color: #2ecc71; font-weight: bold;">不要錯過這個機會，來探索科技的無限可能。</p>
    </div>`,
    ["科技", "創新", "教育"],
    3250,
    27,
    5,
    4,
    new Date("2024-01-08 14:45:00"),
    "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    4,
    "春季踏青：尋找自然之美",
    ` <div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #e74c3c;">春季踏青：尋找自然之美</h1>
        <p>隨著冬季的過去，春天終於到來了。這個季節是踏青的最佳時機，讓我們放下煩憂，走進大自然，尋找身邊的美好。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Spring Outing" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>春天的大地重新披上了翠綠的外衣，鮮花盛開，小草拼命生長。在陽光明媚的日子裡，踏青成為了許多人的首選活動。漫步在青青的田野間，感受微風拂面的清爽，呼吸著花香和泥土的氣息。</p>
        <p style="color: #e74c3c; font-weight: bold;">走出室內，走進大自然，讓我們與自然和諧共處，感受春天的美好。</p>
        <p>除了踏青，春天還是郊遊和野餐的絕佳時機。找一個陽光明媚的日子，帶上親朋好友，一起前往鄉間小徑或郊外公園，享受愜意的時光。</p>
        <p>這個3月，讓我們抛開煩憂，走進大自然，尋找春天的足跡。讓我們與大自然融為一體，享受這個美好的季節。</p>
    </div>`,
    ["春季", "踏青", "大自然"],
    2200,
    12,
    3,
    1,
    new Date("2024-01-10 09:30:00"), // 2024年3月10日早上9:30
    "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    5,
    "夏季星空觀測",
    `<div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #2980b9;">夏季星空觀測</h1>
        <p>夏夜的星空總是特別迷人，我們為您準備了一場夏季星空觀測活動。帶上望遠鏡，一起在這個夏夜尋找那些閃耀的星辰。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Summer Stars" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>我們將有專業的天文學家帶領大家認識不同的星座，並分享觀星的小技巧。無論是業餘愛好者還是專業人士，都能在這裡找到樂趣。</p>
        <p style="color: #2980b9; font-weight: bold;">讓我們在星光下共度一個美妙的夜晚，感受宇宙的浩瀚與神秘。</p>
    </div>`,
    ["自然", "科學", "活動"],
    1987,
    11,
    3,
    5,
    new Date("2024-01-12 21:00:00"),
    "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    6,
    "健康飲食烹飪班",
    `<div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #27ae60;">健康飲食烹飪班</h1>
        <p>關注健康飲食的您不容錯過我們的烹飪班。這裡將教您如何製作美味又營養的佳餚，讓健康飲食成為生活的一部分。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/12673631/pexels-photo-12673631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Healthy Cooking" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>由營養師和廚師聯手打造的課程，不僅教授烹飪技巧，還有食材選擇的建議和營養知識的分享。</p>
        <p style="color: #27ae60; font-weight: bold;">加入我們的烹飪班，學習如何為自己和家人準備健康美食。</p>
    </div>`,
    ["健康", "飲食", "教育"],
    1503,
    9,
    2,
    6,
    new Date("2024-01-18 10:30:00"),
    "https://images.pexels.com/photos/12673631/pexels-photo-12673631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    7,
    "春日午後的咖啡時光",
    ` <div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #e74c3c;">春日午後的咖啡時光</h1>
        <p>在一個溫暖的春日午後，找一家舒適的咖啡廳，點一杯香濃的咖啡，享受屬於自己的寧靜時光。這是一種奢侈，也是一種享受。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Spring Coffee" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>咖啡的香氣在空氣中瀰漫著，讓人心情愉悅。一本好書或是一段輕鬆的對話，都能讓你感受到生活的美好。在咖啡的陪伴下，享受午後的寧靜時光，讓身心放鬆。</p>
        <p style="color: #e74c3c; font-weight: bold;">生活需要一些小確幸，而午後的咖啡時光正是其中之一。</p>
        <p>不僅如此，咖啡廳的舒適環境也是一個放鬆心情的好地方。柔和的音樂、溫暖的燈光，讓人忘卻一切煩惱，專注於眼前的一切。</p>
        <p>這個4月，不妨找一天，來場自己的`,
    ["春日", "咖啡", "午後", "放鬆"],
    1800,
    9,
    2,
    1,
    new Date("2024-01-23 14:00:00"), // 2024年4月15日下午2:00
    "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    8,
    "冬日溫泉之旅：享受身心放鬆",
    ` <div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #e74c3c;">冬日溫泉之旅：享受身心放鬆</h1>
        <p>寒冷的冬日，最適合享受溫泉的溫暖。找一家舒適的溫泉度假村，泡在溫暖的溫泉中，讓身心放鬆，盡情享受冬日的寧靜。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/6621173/pexels-photo-6621173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Winter Hot Spring" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>溫泉有著獨特的魅力，不僅可以舒緩疲憊的身體，還可以放鬆緊繃的神經。在寒冷的冬日，泡在溫暖的溫泉中，讓人感受到一絲絲春天的氣息。</p>
        <p style="color: #e74c3c; font-weight: bold;">冬日溫泉之旅是一種放鬆身心的絕佳方式。讓我們遠離城市的喧囂，來場寧靜愜意的溫泉之旅。</p>
        <p>除了泡溫泉，溫泉度假村還有許多娛樂設施和活動等著你。按摩、美食、溫泉SPA⋯⋯各種享受讓人流連忘返。</p>
        <p>在這個冬季，不妨計劃一場溫泉之旅，放鬆身心，盡情享受冬日的美好。</p>
    </div>`,
    ["冬日", "溫泉", "放鬆", "度假"],
    2800,
    14,
    4,
    1,
    new Date("2024-01-27 12:00:00"), // 2024年1月15日中午12:00
    "https://images.pexels.com/photos/6621173/pexels-photo-6621173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    9,
    "冬日雪景：賞雪遊樂之旅",
    ` <div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #e74c3c;">冬日雪景：賞雪遊樂之旅</h1>
        <p>白雪皚皚的冬日，是一場美麗的雪景盛宴。穿上厚重的衣服，踏上雪地，感受冬日的純淨和寧靜。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Winter Snow" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>雪地中的美景令人心曠神怡，漫步在雪地上，踩出一串串清脆的腳印，讓人感受到冬日的靜謐和祥和。</p>
        <p style="color: #e74c3c; font-weight: bold;">冬日雪景是大自然的恩賜，讓我們珍惜這份美好。無論是賞雪、打雪仗還是堆雪人，都能讓人忘卻一切煩惱，盡情享受冬日的樂趣。</p>
        <p>除了賞雪，冬日還有許多雪地遊樂項目等著你。滑雪、雪橇、雪地摩托⋯⋯各種刺激的遊戲讓人流連忘返。</p>
        <p>在這個冬季，不妨來場賞雪遊樂之旅，感受冬日的純潔和美麗。</p>
    </div>`,
    ["冬日", "雪景", "賞雪", "冬季"],
    3200,
    20,
    7,
    1,
    new Date("2024-02-03 10:30:00"), // 2024年2月10日上午10:30
    "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    10,
    "春季花海：迎接春天的美好",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">春季花海：迎接春天的美好</h1>
          <p>春天，是花的世界。在這個美好的季節裡，找一處花海，盡情欣賞繽紛的花朵，感受春天的美好。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Spring Flower Sea" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>花海中，各種花朵競相怒放，絢麗多彩，彷彿置身於一幅繽紛的畫卷中。櫻花、玫瑰、向日葵⋯⋯各種花卉交織出一幅美麗的春天風景。</p>
          <p style="color: #e74c3c; font-weight: bold;">春季花海是大自然的饋贈，讓我們珍惜這份美好。在這裡，你可以感受到春天的氣息，讓心靈得到淨化。</p>
          <p>除了欣賞花朵，春季花海還有許多活動等著你。賞花、拍照、野餐⋯⋯各種方式讓你盡情享受春天的美好。</p>
          <p>在這個春季，不妨找一處花海，與家人或朋友一起度過愉快的時光，迎接春天的美好。</p>
      </div>`,
    ["春季", "花海", "春天", "賞花"],
    3500,
    25,
    8,
    1,
    new Date("2024-02-08 11:00:00"), // 2024年3月25日上午11:00
    "https://images.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    11,
    "春日郊遊：踏青賞花好時光",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">春日郊遊：踏青賞花好時光</h1>
          <p>春天，正是郊遊的好時機。拋開都市的喧囂，與親友一起踏青賞花，享受春日裡的美好時光。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/1957019/pexels-photo-1957019.jpeg" alt="Spring Outing" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>春日的大地重新披上了翠綠的外衣，各種鮮花盛開，散發出陣陣芬芳。在郊外的小徑上，漫步於綠樹成蔭之間，感受大自然的氣息。</p>
          <p style="color: #e74c3c; font-weight: bold;">春日郊遊是一種放鬆身心的方式，讓我們暫時遠離城市的喧囂，享受大自然的-��靜和美好。</p>
          <p>除了踏青賞花，春日郊遊還有許多活動等著你。野餐、放風箏、騎行⋯⋯各種方式讓你度過愉=c�的時光。</p>
          <p>在這個春天，不妨找一天，與親友一起來場踏青賞花之旅，感受春日裡的美好時光。</p>
      </div>`,
    ["春日", "郊遊", "踏青", "春天"],
    2800,
    20,
    9,
    1,
    new Date("2024-02-14 10:30:00"), // 2024年4月20日上午10:30
    "https://images.pexels.com/photos/1957019/pexels-photo-1957019.jpeg",
  ),
  new Post(
    0,
    12,
    "環島自行車之旅",
    `<div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #f39c12;">環島自行車之旅</h1>
        <p>台灣美麗的海岸線和山脈是自行車愛好者的天堂。我們的環島自行車之旅將帶您體驗這一切。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/15905658/pexels-photo-15905658/free-photo-of-a-city-panorama-in-taiwan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bike Tour" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>從北部的基隆出發，一路向南至花蓮、台東，再經過高雄、台南，最後返回台北。這是一次身心靈的旅程。</p>
        <p style="color: #f39c12; font-weight: bold;">準備好您的自行車和背包，加入我們的環島之旅吧！</p>
    </div>`,
    ["旅遊", "運動", "冒險"],
    1623,
    15,
    4,
    7,
    new Date("2024-03-10 07:20:00"),
    "https://images.pexels.com/photos/15905658/pexels-photo-15905658/free-photo-of-a-city-panorama-in-taiwan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    13,
    "夏日水上樂園",
    `<div class="bg:transparent text-align:left">
        <h1 style="text-align: center; color: #3498db;">夏日水上樂園</h1>
        <p>炎炎夏日，沒有什麼比在水上樂園享受清涼的水世界更棒的了。來我們的水上樂園，體驗刺激的水滑梯和波浪池。</p>
        <div class="img-box" style="text-align: center; margin: 20px 0;">
            <img src="https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Water Park" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        <p>我們有專為小朋友設計的兒童區，也有適合成人挑戰的高速滑水道。全家大小都能找到樂趣。</p>
        <p style="color: #3498db; font-weight: bold;">帶上您的泳衣和太陽鏡，來享受一個充滿歡笑和水花的日子吧！</p>
    </div>`,
    ["娛樂", "家庭", "活動"],
    2300,
    18,
    5,
    8,
    new Date("2024-05-03 12:00:00"),
    "https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),

  new Post(
    0,
    14,
    "夏日戲水：享受清涼的一刻",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">夏日戲水：享受清涼的一刻</h1>
          <p>炎炎夏日，最好的消暑方式莫過於戲水了。找一個清涼的水域，盡情嬉戲，享受夏日的清涼和快樂。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Summer Water Fun" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>夏日戲水是一種獨特的樂趣，讓人感受到無比的快樂和清涼。無論是在游泳池、河流還是海灘，都能讓人暫時忘卻酷熱的天氣。</p>
          <p style="color: #e74c3c; font-weight: bold;">在炎炎夏日，與親友一起戲水，是最好的方式之一。讓我們一起來享受這份清涼和快樂，度過愉快的夏日時光。</p>
          <p>除了戲水，夏日還有許多水上活動等著你。浮潛、滑水、衝浪⋯⋯各種方式讓你盡情享受夏日的水上樂趣。</p>
          <p>在這個夏季，不妨找一個清涼的水域，和親友一起度過一個快樂的夏日，享受戲水的樂趣。</p>
      </div>`,
    ["夏日", "戲水", "夏天", "水上活動"],
    3800,
    22,
    10,
    1,
    new Date("2024-05-14 13:00:00"), // 2024年5月15日下午1:00
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    15,
    "夏日野餐：享受陽光和美食",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">夏日野餐：享受陽光和美食</h1>
          <p>夏日，最適合的休閒方式莫過於野餐了。找一個草地或公園，與親友一起享受陽光和美食，度過愉快的時光。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Summer Picnic" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>夏日野餐是一種輕鬆愜意的活動，讓人感受到陽光和微風的溫暖。在綠草地上舖上野餐墊，品嚐美味的食物，和親友一起閒話家常。</p>
          <p style="color: #e74c3c; font-weight: bold;">在夏日的午後，野餐是最好的休閒方式之一。讓我們來一場美味的野餐，享受陽光和美食帶來的愉悅。</p>
          <p>除了美食，夏日野餐還可以進行各種遊戲和活動。網球、運動、撲克⋯⋯各種方式讓你度過一個愉快的下午。</p>
          <p>在這個夏季，不妨找一個美麗的地方，與親友一起來場愉快的野餐，享受陽光和美食的愉悅。</p>
      </div>`,
    ["夏日", "野餐", "夏天", "休閒"],
    3200,
    19,
    6,
    1,
    new Date("2024-05-18 12:30:00"), // 2024年6月10日中午12:30
    "https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    16,
    "秋日賞楓：感受大自然的秋意",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">秋日賞楓：感受大自然的秋意</h1>
          <p>秋天，是賞楓的最佳時節。走進山林，欣賞落葉紛飛的美景，感受大自然的秋意。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Autumn Maple" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>秋日賞楓是一種獨特的體驗，紅葉黃葉交織出一幅美麗的風景畫。在山間小徑上漫步，聆聽著落葉飄落的聲音，讓心靈得到淨化。</p>
          <p style="color: #e74c3c; font-weight: bold;">秋天是大自然的調色板，讓我們一起來欣賞這份美好。在這裡，你可以感受到秋天的氣息，享受大自然的恩賜。</p>
          <p>除了賞楓，秋天還有許多活動等著你。野餐、登山、採摘⋯⋯各種方式讓你度過一個愉快的秋日。</p>
          <p>在這個秋季，不妨找一個美麗的山林，與親友一起來場賞楓之旅，感受秋天的美好。</p>
      </div>`,
    ["秋日", "賞楓", "秋天", "大自然"],
    3000,
    18,
    10,
    1,
    new Date("2024-09-20 11:00:00"), // 2024年9月20日上午11:00
    "https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    17,
    "秋季登山：挑戰高峰，追尋壯麗",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">秋季登山：挑戰高峰，追尋壯麗</h1>
          <p>秋季是登山的好時機，涼爽的天氣和多姿多彩的ai�色-��讓人心曠神怡。挑戰高峰，追尋壯麗，感受大自然的偉大。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Autumn Hiking" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>秋季登山是一種挑戰和鍛煉，也是一種放鬆和享受。在山徑上徒步，眺望遠方的風景，讓心靈得到洗禮，收穫無窮的愉悅。</p>
          <p style="color: #e74c3c; font-weight: bold;">在高山之巔，你可以俯瞰萬物，感受大自然的偉大。讓我們一起挑戰高峰，追尋壯麗，探索自然之美。</p>
          <p>除了登山，秋季還有許多探險之旅等著你。徒步、攀岩、遠足⋯⋯各種方式讓你感受大自然的無限魅力。</p>
          <p>在這個秋季，不妨來一場挑戰自我的登山之旅，追尋壯麗，感受大自然的偉大。</p>
      </div>`,
    ["秋季", "登山", "秋天", "探險"],
    3200,
    23,
    11,
    1,
    new Date("2024-10-10 09:00:00"), // 2024年10月10日上午9:00
    "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    18,
    "秋日摘果：享受農家樂趣",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">秋日摘果：享受農家樂趣</h1>
          <p>秋季，正是水果成熟的季節，來到農家摘果是一件愉快的事情。穿上輕便的服裝，戴上寬邊帽和墨鏡，帶上家人或朋友，一起前往果園，享受摘果的樂趣。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/5528990/pexels-photo-5528990.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Autumn Fruit Picking" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>在果園裡，滿眼都是硕果累累的景象，紅彤彤的蘋果、金黃的梨子、紫紅的葡萄⋯⋯各種水果散發出誘人的香氣，讓人垂涎三尺。</p>
          <p style="color: #e74c3c; font-weight: bold;">秋日摘果是一種輕鬆愜意的活動，讓人感受到大自然的恩惠。在果園中享受農家樂趣，讓我們暫時遠離都市的喧囂，享受純樸的生活。</p>
          <p>除了摘果，秋季還有許多農家活動等著你。采摘、品酒、農家樂⋯⋯各種方式讓你度過一個愉快的秋日。</p>
          <p>在這個秋季，不妨找一個美麗的果園，與家人或朋友一起來場摘果之旅，享受農家樂趣。</p>
      </div>`,
    ["秋季", "摘果", "農家", "秋天"],
    2900,
    17,
    8,
    1,
    new Date("2024-09-15 10:00:00"), // 2024年9月15日上午10:00
    "https://images.pexels.com/photos/5528990/pexels-photo-5528990.jpeg?auto=compress&cs=tinysrgb&w=600",
  ),
  new Post(
    0,
    19,
    "秋日採藍莓：品味自然的鮮甜",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">秋日採藍莓：品味自然的鮮甜</h1>
          <p>秋天是採摘藍莓的好時節。藍莓鮮甜多汁，富含維生素和抗氧化劑，是理想的健康水果。帶上家人或朋友，來場採藍莓之旅，品味自然的鮮甜。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/2478273/pexels-photo-2478273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Autumn Blueberry Picking" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>在藍莓園中，青葱的藍莓樹上滿滿掛滿了成熟的藍莓，彷彿一串串的藍寶石。摘下一顆藍莓，品味它的鮮甜滋味，讓人心情愉悅。</p>
          <p style="color: #e74c3c; font-weight: bold;">秋日採藍莓是一種愉悅的體驗，讓人感受到大自然的恩惠。在藍莓園中享受採摘的樂趣，讓我們暫時遠離都市的喧囂，享受純樸的生活。</p>
          <p>除了採藍莓，秋天還有許多農家活動等著你。品嚐新鮮的水果、參加農家樂⋯⋯各種方式讓你度過一個愉快的秋日。</p>
          <p>在這個秋季，不妨找一個美麗的藍莓園，與家人或朋友一起來場採藍莓之旅，品味自然的鮮甜。</p>
      </div>`,
    ["秋日", "採藍莓", "水果", "秋天"],
    3100,
    15,
    9,
    1,
    new Date("2024-09-25 09:00:00"), // 2024年9月25日上午9:00
    "https://images.pexels.com/photos/2478273/pexels-photo-2478273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    20,
    "冬日賞雪：感受雪的純潔",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">冬日賞雪：感受雪的純潔</h1>
          <p>冬天，是賞雪的好時節。走進雪的世界，感受雪花的純潔和柔軟，享受冬日的寧靜與美好。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/1649218/pexels-photo-1649218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Winter Snow" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>在雪的世界裡，一切都被白雪覆蓋，宛如童話般的世界。走在銀白的大地上，踩著軟綿綿的雪，讓人心情愉悅，感受到冬天的美好。</p>
          <p style="color: #e74c3c; font-weight: bold;">冬日賞雪是一種純淨的體驗，讓我們感受到大自然的奧妙。在雪花飄落的天空下，讓心靈得到淨化，享受冬日的寧靜。</p>
          <p>除了賞雪，冬天還有許多活動等著你。滑雪、堆雪人、泡溫泉⋯⋯各種方式讓你度過一個愉快的冬日。</p>
          <p>在這個冬季，不妨找一個美麗的雪景，與家人或朋友一起來場賞雪之旅，感受雪的純潔與美好。</p>
      </div>`,
    ["冬日", "賞雪", "冬天", "雪景"],
    3300,
    20,
    10,
    1,
    new Date("2024-12-10 10:30:00"), // 2024年12月10日上午10:30
    "https://images.pexels.com/photos/1649218/pexels-photo-1649218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    21,
    "冬季溫泉之旅：暖身靜心",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">冬季溫泉之旅：暖身靜心</h1>
          <p>寒冷的冬天，最適合的去處莫過於溫泉。找一個溫暖的泉池，沉浸其中，讓身心得到放鬆和治癒。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/20363152/pexels-photo-20363152/free-photo-of-jacuzzi-in-a-mountain-valley-covered-with-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>冬季溫泉之旅是一種愉悅的體驗，讓人感受到自然的恩賜。泡在溫暖的溫泉中，感受溫暖滋潤，讓身心得到深度放鬆。</p>
          <p style="color: #e74c3c; font-weight: bold;">溫泉之旅不僅能夠暖身，還能夠靜心。在溫泉中靜坐冥想，聆聽內心的聲音，讓我們重新與自己對話，找回內心的寧靜。</p>
          <p>除了泡溫泉，冬季還有許多活動等著你。滑雪、賞雪、泡溫泉⋯⋯各種方式讓你度過一個愉快、充滿活力的冬日。</p>
          <p>在這個冬季，不妨找一個美麗的溫泉度假村，與家人或朋友一起來場溫泉之旅，暖身靜心，享受冬日的美好。</p>
      </div>`,
    ["冬季", "溫泉", "冬天", "放鬆"],
    3500,
    24,
    12,
    1,
    new Date("2025-01-05 11:00:00"), // 2025年1月5日上午11:00
    "https://images.pexels.com/photos/20363152/pexels-photo-20363152/free-photo-of-jacuzzi-in-a-mountain-valley-covered-with-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
  new Post(
    0,
    22,
    "冬季滑雪樂趣：挑戰極限，感受速度",
    `<div class="bg:transparent text-align:left">
          <h1 style="text-align: center; color: #e74c3c;">冬季滑雪樂趣：挑戰極限，感受速度</h1>
          <p>冬季是滑雪的好時節，結冰的山坡上，一場場刺激的滑雪之旅即將展開。穿上滑雪裝備，挑戰極限，感受速度帶來的刺激與快感。</p>
          <div class="img-box" style="text-align: center; margin: 20px 0;">
              <img src="https://images.pexels.com/photos/20363152/pexels-photo-20363152/free-photo-of-jacuzzi-in-a-mountain-valley-covered-with-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Winter Skiing" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
          <p>冬季滑雪樂趣是一種刺激的體驗，讓人感受到速度和自由的融合。在雪地上滑行，風吹麵庞，讓人心曠神怡，忘卻一切煩憂。</p>
          <p style="color: #e74c3c; font-weight: bold;">滑雪是一項極具挑戰性的運動，需要技巧和勇氣。挑戰陡峭的坡道，感受飛一般的感覺，讓我們一起來享受這份刺激與快感。</p>
          <p>除了滑雪，冬季還有許多活動等著你。賞雪、泡溫泉、享美食⋯⋯各種方式讓你度過一個充滿活力的冬日。</p>
          <p>在這個冬季，不妨找一個理想的滑雪勝地，與家人或朋友一起來場滑雪之旅，挑戰極限，感受速度帶來的快感。</p>
      </div>`,
    ["冬季", "滑雪", "冬天", "刺激"],
    3800,
    28,
    13,
    1,
    new Date("2025-01-15 10:00:00"), // 2025年1月15日上午10:00
    "https://images.pexels.com/photos/20363152/pexels-photo-20363152/free-photo-of-jacuzzi-in-a-mountain-valley-covered-with-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ),
];

export async function getPostsAsync(
  pageIndex: number,
  countOfPage: number,
): Promise<Post[]> {
  if (countOfPage >= data.length) {
    return data.map((post) => {
      return new Post(
        post.id,
        post.id,
        post.title,
        post.body,
        post.tags,
        post.views,
        post.reply,
        post.trackback,
        post.userId,
        post.createTime,
        post.imgSrc,
      );
    });
  }
  var start = pageIndex * countOfPage;
  var showIdBase = 0;
  const end = Math.floor(data.length / 10) * countOfPage;
  if (!(start + 1 < end)) {
    start = ((start / countOfPage) % (end / countOfPage)) * countOfPage;
    showIdBase = pageIndex * countOfPage - start;
  }
  return data.slice(start, start + countOfPage).map((post) => {
    return new Post(
      post.id + showIdBase,
      post.id,
      post.title,
      post.body,
      post.tags,
      post.views,
      post.reply,
      post.trackback,
      post.userId,
      post.createTime,
      post.imgSrc,
    );
  });
}

export async function getPostByIdAsync(
  postId: number,
  showId: number,
): Promise<Post> {
  var post: Post = data[0];
  if (postId <= 0) {
    post = data[0];
  } else if (postId > data.length) {
    post = data.find((p) => p.id == (postId % data.length) + 1) as Post;
  } else {
    post = data.find((p) => p.id == postId) as Post;
  }
  return new Post(
    showId,
    post.id,
    post.title,
    post.body,
    post.tags,
    post.views,
    post.reply,
    post.trackback,
    post.userId,
    post.createTime,
    post.imgSrc,
  );
}
