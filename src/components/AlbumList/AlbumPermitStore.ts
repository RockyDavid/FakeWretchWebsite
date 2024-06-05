import { defineStore } from "pinia";
import { ref } from "vue";

export class AlbumPermit {
  constructor(
    public Id: number,
    public Permit: boolean,
    public Idx: number,
  ) {}
}

export const useAlbumPermitStore = defineStore("AlbumPermit", () => {
  const albumPermits = ref<AlbumPermit[]>([]);

  const add = (albumId: number, albumIdx: number, permit: boolean) => {
    const album = albumPermits.value.find((x) => x.Id === albumId);
    if (album) {
      album.Permit = permit;
    } else {
      albumPermits.value.push(new AlbumPermit(albumId, permit, albumIdx));
    }
  };

  const check = (albumId: number) => {
    const album = albumPermits.value.find(
      (x) => x.Id === parseInt(albumId + ""),
    );
    albumPermits.value.map((x) => console.log(x));
    return album ? album.Permit : false;
  };

  const getIdx = (albumId: number) => {
    const album = albumPermits.value.find(
      (x) => x.Id === parseInt(albumId + ""),
    );
    return album ? album.Idx : -1;
  };

  return {
    add,
    check,
    getIdx,
  };
});
