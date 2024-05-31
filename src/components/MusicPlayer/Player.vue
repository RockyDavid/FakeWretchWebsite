<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { AudioPlayer, Track, AudioPlayerElements, AudioPlayerSetting } from './AudioPlayer.ts'

  const currenTrack = ref<number>(1);
  const currentVolume = ref<number>(25);
  const currenTimetick = ref<number>(0);

  const background = ref<HTMLElement>(null);
  const seekSlider = ref<HTMLInputElement>(null);
  const VolumeSlider = ref<HTMLInputElement>(null);
  const currenTime = ref<HTMLElement>(null);
  const totalTime = ref<HTMLElement>(null);
  const trackInfo = ref<HTMLElement>(null);
  const faPlay = ref<HTMLElement>(null);
  const preTrack = ref<HTMLElement>(null);
  const nextTrack = ref<HTMLElement>(null);
  const pauseOrPlay = ref<HTMLElement>(null);
  const mute = ref<HTMLElement>(null);
  const faVolume = ref<HTMLElement>(null);
  

  onMounted(() => {
      background.value = document.getElementById('MusicPlayerBackground') as HTMLElement;
      seekSlider.value = document.getElementById('MusicPlayerSeekSlider') as HTMLInputElement;
      VolumeSlider.value = document.getElementById('MusicPlayerVolumeSlider') as HTMLInputElement;
      currenTime.value = document.getElementById('MusicPlayerCurrentTime') as HTMLElement;
      totalTime.value = document.getElementById('MusicPlayerTotaltTime') as HTMLElement;
      trackInfo.value = document.getElementById('MusicPlayerTrackInfo') as HTMLElement;
      faPlay.value = document.getElementById('MusicPlayerFaPlay') as HTMLElement;
      preTrack.value = document.getElementById('MusicPlayerPreTrack') as HTMLElement;
      pauseOrPlay.value = document.getElementById('MusicPlayerPauseOrPlay') as HTMLElement;
      nextTrack.value = document.getElementById('MusicPlayerNextTrack') as HTMLElement;
      mute.value = document.getElementById('MusicPlayerMute') as HTMLElement;
      faVolume.value = document.getElementById('MusicPlayerFaVolume') as HTMLElement;
      
      AudioPlayer.Init([
          new Track('Business','src/assets/audio/1.jpg','src/assets/audio/1.mp3'),
          new Track('TVARI - Tokyo Cafe','src/assets/audio/2.jpg','src/assets/audio/2.mp3'),
          new Track('Leonell Cassio - The Sapphire City','src/assets/audio/3.jpg','src/assets/audio/3.mp3'),
        ],
        new AudioPlayerElements(
          background.value,
          seekSlider.value,
          VolumeSlider.value,
          currenTime.value,
          totalTime.value,
          trackInfo.value,
          faPlay.value,
          preTrack.value,
          pauseOrPlay.value,
          nextTrack.value,
          mute.value,
          faVolume.value
        ),
        new AudioPlayerSetting(
          0.5,
          0,
          false
        )
      );
  });
</script>

<template>
  <div id="MusicPlayerBackground" class="music-player">
  <div class="player">

    <!-- Define the section for displaying details -->
    <div class="details">
      <div id="MusicPlayerTrackInfo" class="now-playing"></div>
    </div>
    
    <!-- Define the section for displaying track buttons -->
    <div class="buttons">
      <div id="MusicPlayerPreTrack" class="prev-track">
        <i class="fa fa-step-backward fa-2x"></i>
      </div>
      <div id="MusicPlayerPauseOrPlay" class="playpause-track">
        <i id="MusicPlayerFaPlay" class="fa fa-play-circle fa-2x"></i>
      </div>
      <div id="MusicPlayerNextTrack" class="next-track">
        <i class="fa fa-step-forward fa-2x"></i>
      </div>
    </div>

    <!-- Define the section for displaying the seek slider-->
    <div class="slider_container">
      <div id="MusicPlayerCurrentTime" class="current-time">00:00</div>
      <input id="MusicPlayerSeekSlider" type="range" min="1" max="100" value="0" class="seek_slider">
      <div id="MusicPlayerTotaltTime" class="total-duration">00:00</div>
    </div>

    <!-- Define the section for displaying the volume slider-->
    <div class="slider_container_left">
      <div id="MusicPlayerMute" class="mute">
        <i id="MusicPlayerFaVolume" class="fa fa-volume-up"></i>
      </div>
      <input id="MusicPlayerVolumeSlider" type="range" min="1" max="100" class="volume_slider">
    </div>
  </div>
    </div>
</template>

<style scoped>
  .fa,
  .current-time,
  .total-duration {
    color: #FFF;
    cursor: pointer;
  }
  .slider_container,
  .slider_container_left {
    background: rgba(0, 0, 0, 0.5);
    padding: 0 3px;
    margin-top: 3px;
    height: 15px;
  }
  .music-player {
    position: fixed;
    top: 6px;
    right: 6px;
    z-index: 999;
    border-radius: 15px;
    max-width: 300px;
    width: 300px;
    background-size: cover !important;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75)
  }

  /* Using flex with the column direction to
     align items in a vertical direction */
  .player {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 5px 0;
  }

  .details {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .buttons {
    background: rgba(0, 0, 0, 0.5);
    width: 75%;
    text-align: center;
    margin-top: 5px;
    padding: 3px;
  }
  .prev-track {
    border:1px solid #fff;
  }
  .playpause-track {
    margin-left: 60px;
    border:1px solid #fff;
  }
  .next-track {
    margin-left: 60px;
    border:1px solid #fff;
  }
  .prev-track:hover {
    background:rgba(120,75,75,0.5);
  }
  .playpause-track:hover {
    background:rgba(120,75,75,0.5);
  }
  .next-track:hover {
    background:rgba(120,75,75,0.5);
  }

  .track-art {
    margin: 0px;
    height: 60px;
    width: 60px;
    background-position: center !important;
    background-size: cover !important;
    background: black;
    border-radius: 50px;
  }

  /* Changing the font sizes to suitable ones */
  .now-playing {
    font-size: 12px;
    animation: marquee-2480862e 10s linear infinite;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0px 6px;
    border-radius: 10px;
  }

  /* Using flex with the row direction to
     align items in a horizontal direction */
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .playpause-track,
  .prev-track,
  .next-track {
    padding: 0 5px;
    opacity: 0.8;

    /* Smoothly transition the opacity */
    transition: opacity .2s;
  }

  /* Change the opacity when mouse is hovered */
  .playpause-track:hover,
  .prev-track:hover,
  .next-track:hover {
    opacity: 1.0;
  }

  /* Define the slider width so that it scales properly */
  .slider_container {
    width: 75%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slider_container_left {
    width: 75%;
    max-width: 400px;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  /* Modify the appearance of the slider */
  .seek_slider {
    margin: 0 3px;
  }
  .seek_slider, .volume_slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 5px;
    background: black;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  /* Modify the appearance of the slider thumb */
  .seek_slider::-webkit-slider-thumb,
  .volume_slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: white;
    cursor: pointer;
    border-radius: 50%;
  }

  /* Change the opacity when mouse is hovered */
  .seek_slider:hover,
  .volume_slider:hover {
    opacity: 1.0;
  }

  .seek_slider {
    width: 75%;
  }

  .volume_slider {
    width: calc(100% - 20px);
    margin-left: 5px;
  }

  .current-time,
  .total-duration {
    font-size: 10px;
  }

  i.fa-volume-down,
  i.fa-volume-up {
  }

  /* Change the mouse cursor to a pointer
     when hovered over */
  i.fa-play-circle,
  i.fa-pause-circle,
  i.fa-step-forward,
  i.fa-step-backward {
    cursor: pointer;
  }

  .mute {
    width: 13px;
  }
  
</style>