import { common } from "../../helper/common";
class Track {
  constructor(name: string, imageUrl: string, path: string) {
    this.Name = name;
    this.ImageUrl = imageUrl;
    this.Path = path;
  }
  Name: string;
  ImageUrl: string;
  Path: string;
}
class AudioPlayerElements {
  constructor(
    background: HTMLElement,
    seekSlider: HTMLInputElement,
    VolumeSlider: HTMLInputElement,
    currenTime: HTMLElement,
    totalTime: HTMLElement,
    trackInfo: HTMLElement,
    faPlay: HTMLElement,
    preTrack: HTMLElement,
    pauseOrPlay: HTMLElement,
    nextTrack: HTMLElement,
    mute: HTMLElement,
    faVolume: HTMLElement,
  ) {
    this.Background = background;
    this.SeekSlider = seekSlider;
    this.VolumeSlider = VolumeSlider;
    this.CurrenTime = currenTime;
    this.TotalTime = totalTime;
    this.TrackInfo = trackInfo;
    this.FaPlay = faPlay;
    this.PreTrack = preTrack;
    this.PauseOrPlay = pauseOrPlay;
    this.NextTrack = nextTrack;
    this.Mute = mute;
    this.FaVolume = faVolume;
  }
  Background: HTMLElement;
  SeekSlider: HTMLInputElement;
  VolumeSlider: HTMLInputElement;
  CurrenTime: HTMLElement;
  TotalTime: HTMLElement;
  TrackInfo: HTMLElement;
  FaPlay: HTMLElement;
  PreTrack: HTMLElement;
  PauseOrPlay: HTMLElement;
  NextTrack: HTMLElement;
  Mute: HTMLElement;
  FaVolume: HTMLElement;
}
class AudioPlayerSetting {
  constructor(Volume: number, trackIndex: number, autoPlay: boolean) {
    this.Volume = Volume;
    this.TrackIndex = trackIndex;
    this.AutoPlay = autoPlay;
  }
  Volume: number;
  TrackIndex: number;
  AutoPlay: boolean;
}
var AudioPlayer = {
  tracks: [] as Track[],
  elements: {} as AudioPlayerElements,
  setting: {} as AudioPlayerSetting,
  player: {} as HTMLAudioElement,
  currentTrackIndex: 0 as number,
  currentVolume: 0.5 as number,
  canUpdateSeekSlider: true as boolean,
  Init(
    tracks: Track[],
    elements: AudioPlayerElements,
    setting: AudioPlayerSetting,
  ) {
    // 將UI回復到撥放下一首歌前準備狀態
    this.Reset();

    // 1. 設定資料連接
    // ＞音樂帶
    this.tracks = tracks;
    // ＞UI元素
    this.elements = elements;
    // ＞設定資料
    this.setting = setting;
    // ＞HTML撥放器元件
    this.player = document.createElement("audio");

    // 2. UI事件 與 物件功能 連接
    // ＞前一首
    this.elements.PreTrack.onclick = AudioPlayer.PrevTrack;
    // ＞暫停播放
    this.elements.PauseOrPlay.onclick = AudioPlayer.PauseOrPlay;
    // ＞下一首
    this.elements.NextTrack.onclick = AudioPlayer.NextTrack;
    // > 靜音
    this.elements.Mute.onclick = AudioPlayer.Mute;
    // > 音量調整
    this.elements.VolumeSlider.onchange = AudioPlayer.AdjustVolume;
    // > HTML撥放器元件通知－音軌載入完成
    this.player.addEventListener(
      "loadedmetadata",
      AudioPlayer.PlayerNotifyLoaded,
    );
    // > HTML撥放器元件通知－音軌撥放進度
    this.player.addEventListener(
      "timeupdate",
      AudioPlayer.PlayerNotifyTimeUpdate,
    );
    // > HTML撥放器元件通知－音軌撥放完畢
    this.player.addEventListener("ended", AudioPlayer.PlayerNotifyPlayEnd);

    // 3. UI時間軸事件行為模式推測優化綁定
    // > 滑鼠移入，推測使用者要準備拉動時間軸，暫停UI更新
    this.elements.SeekSlider.onmouseenter = () => {
      AudioPlayer.canUpdateSeekSlider = false;
    };
    // > 滑鼠離開，推測使用者拉動完畢，開始更新UI
    this.elements.SeekSlider.onmouseleave = () => {
      AudioPlayer.canUpdateSeekSlider = true;
    };
    // > 如果時間軸有變化，通知事件
    this.elements.SeekSlider.onchange = () => {
      // 在不能更新UI的狀態下，時間軸發生拖拉事件，有新的時間位置
      if (AudioPlayer.canUpdateSeekSlider == false) {
        // 更新HTML撥放器元件，撥放秒數位置
        AudioPlayer.player.currentTime = parseInt(
          AudioPlayer.elements.SeekSlider.value,
        );
        // 更新當前時間UI
        AudioPlayer.updateCurrentTime(AudioPlayer.player.currentTime);
        // 更新時間軸UI
        AudioPlayer.updateSeekSlider(AudioPlayer.player.currentTime);
      }
    };

    // 4. 其他
    // > 設定初始音量
    this.updateVolumeSlider(this.setting.Volume);
    // > 撥放初始音軌
    this.Play(this.setting.TrackIndex);
  },
  Reset() {
    // 清除上一首音軌 總時間
    this.updateTotalTime(0);
    // 清除上一首音軌 現在時間
    this.updateCurrentTime(0);
    // 重置上一首音軌 時間軸
    this.updateSeekSlider(0);
    // 重置播放按鈕
    if (this.elements.FaPlay) {
      this.elements.FaPlay.classList.remove("fa-pause-circle");
      this.elements.FaPlay.classList.add("fa-play-circle");
    }
  },
  PrevTrack() {
    // 如果音軌上一首音軌位置小於 0
    if (AudioPlayer.currentTrackIndex - 1 < 0) {
      // 則移動到最後一首音軌位置
      AudioPlayer.currentTrackIndex = AudioPlayer.tracks.length - 1;
    } else {
      // 若不是則移動到前一首音軌
      AudioPlayer.currentTrackIndex--;
    }
    //撥放移動後的新音軌
    AudioPlayer.Play(AudioPlayer.currentTrackIndex);
  },
  PauseOrPlay() {
    // 檢查元素是否存在
    if (AudioPlayer.elements.FaPlay) {
      // 檢查當前圖案是暫停
      if (AudioPlayer.elements.FaPlay.classList.contains("fa-pause-circle")) {
        // 則將暫停圖案移除
        AudioPlayer.elements.FaPlay.classList.remove("fa-pause-circle");
        // 換上撥放圖案
        AudioPlayer.elements.FaPlay.classList.add("fa-play-circle");
        // 暫停音樂撥放器
        AudioPlayer.player.pause();
      } else {
        // 若不是則移除撥放圖案
        AudioPlayer.elements.FaPlay.classList.remove("fa-play-circle");
        // 換上暫停圖案
        AudioPlayer.elements.FaPlay.classList.add("fa-pause-circle");
        // 啟動音樂撥放器
        AudioPlayer.player.play();
      }
    }
  },
  NextTrack() {
    // 如果音軌下一首音軌位置是否已經超過所以音軌數量
    if (AudioPlayer.currentTrackIndex + 1 == AudioPlayer.tracks.length) {
      // 則移動到第一個音軌位置
      AudioPlayer.currentTrackIndex = 0;
    } else {
      // 若不是則移動到下一首音軌
      AudioPlayer.currentTrackIndex++;
    }
    //撥放移動後的新音軌
    AudioPlayer.Play(AudioPlayer.currentTrackIndex);
  },
  Mute() {
    // 檢查元素是否存在
    if (AudioPlayer.elements.FaVolume) {
      // 檢查當前圖案是撥放
      if (AudioPlayer.elements.FaVolume.classList.contains("fa-volume-up")) {
        // 則將撥放圖案移除
        AudioPlayer.elements.FaVolume.classList.remove("fa-volume-up");
        // 換上靜音圖案
        AudioPlayer.elements.FaVolume.classList.add("fa-volume-off");
        // 停用聲音軸UI
        AudioPlayer.elements.VolumeSlider.disabled = true;
        // 聲音軸UI直接歸0
        AudioPlayer.elements.VolumeSlider.value = "0";
        // 音樂撥放器 啟動靜音
        AudioPlayer.player.muted = true;
      } else {
        // 若不是將靜音圖案移除
        AudioPlayer.elements.FaVolume.classList.remove("fa-volume-off");
        // 換上撥放圖案
        AudioPlayer.elements.FaVolume.classList.add("fa-volume-up");
        // 起用聲音軸UI
        AudioPlayer.elements.VolumeSlider.disabled = false;
        // 聲音軸UI跳至原來音量
        AudioPlayer.elements.VolumeSlider.value = (
          AudioPlayer.currentVolume * 100
        ).toString();
        // 音樂撥放器 取消靜音
        AudioPlayer.player.muted = false;
      }
    }
  },
  AdjustVolume() {
    // 換算撥放器元件音量大小為 0 ~ 1 之間，音量UI為 0 ~ 100
    AudioPlayer.updateVolumeSlider(
      parseInt(AudioPlayer.elements.VolumeSlider.value) / 100.0,
    );
  },
  PlayerNotifyTimeUpdate() {
    // 如果現在使用者沒有拉動時間軸，是可以更新UI的狀態才更新
    if (AudioPlayer.canUpdateSeekSlider === true) {
      // 更新現在撥放時間UI
      AudioPlayer.updateCurrentTime(AudioPlayer.player.currentTime);
      // 更新時間軸UI
      AudioPlayer.updateSeekSlider(AudioPlayer.player.currentTime);
    }
  },
  PlayerNotifyPlayEnd() {
    // 執行下一首
    AudioPlayer.NextTrack();
  },
  PlayerNotifyLoaded() {
    // 更新總時長UI
    AudioPlayer.updateTotalTime(AudioPlayer.player.duration);
    // 更新時間軸UI最大值
    AudioPlayer.updateSeekSliderMax(AudioPlayer.player.duration);
    if (AudioPlayer.setting.AutoPlay === true) {
      // 自動撥放
      AudioPlayer.player.play();
    }
  },
  updateCurrentTime(time: number) {
    if (this.elements.CurrenTime) {
      this.elements.CurrenTime.textContent = common.secondFormatter(time);
    }
  },
  updateTotalTime(time: number) {
    if (this.elements.TotalTime) {
      this.elements.TotalTime.textContent = common.secondFormatter(time);
    }
  },
  updateSeekSlider(time: number) {
    if (this.elements.SeekSlider) {
      this.elements.SeekSlider.value = time.toString();
    }
  },
  updateSeekSliderMax(time: number) {
    if (this.elements.SeekSlider) {
      this.elements.SeekSlider.max = time.toString();
    }
  },
  updateVolumeSlider(Volume: number) {
    this.player.volume = this.currentVolume = Volume;
    if (this.elements.SeekSlider) {
      this.elements.VolumeSlider.value = (Volume * 100).toString();
    }
  },
  updateBackground(imgsrc: string) {
    if (this.elements.Background) {
      this.elements.Background.style.background = `url('${imgsrc}')`;
    }
  },
  updateTrackInfo(info: string) {
    if (this.elements.TrackInfo) {
      this.elements.TrackInfo.textContent = info;
    }
  },
  UpdateDetails(trackIndex: number) {
    this.updateBackground(this.tracks[trackIndex].ImageUrl);
    this.updateTrackInfo(
      `PLAYING ${trackIndex + 1} OF ${this.tracks.length} - ${this.tracks[trackIndex].Name}`,
    );
  },
  Play(trackIndex: number) {
    if (trackIndex < 0) {
      trackIndex = this.tracks.length - 1;
    }
    if (trackIndex >= this.tracks.length) {
      trackIndex = 0;
    }
    this.currentTrackIndex = trackIndex;

    this.Reset();

    // Load a new track
    this.player.src = this.tracks[trackIndex].Path;
    this.player.load();

    // Update details of the track
    this.UpdateDetails(trackIndex);
  },
};
export { AudioPlayer, Track, AudioPlayerElements, AudioPlayerSetting };
