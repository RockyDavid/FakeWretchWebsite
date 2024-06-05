import { common } from "../helper/common";

const token = "HLS1LZoXQNj9DsczCGPDyC8HEx3taarzsyCdBAEeV1eSGPvVuhAKnowX";

export class Album {
  constructor(
    public id: number,
    public name: string,
    public isPublic: boolean,
    public password: string,
    public cover: string,
    public image: string,
  ) {}
}
interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  liked: boolean;
  alt: string;
}

interface PexelsApiResponse {
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
}

export async function getAlbumAsync(
  pageIndex: number,
  countOfPage: number,
): Promise<Album[]> {
  var response = await common.getDataWithAuthorizationAsync<PexelsApiResponse>(
    token,
    `https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=${countOfPage}`,
  );
  var idx: number = 0;
  return Promise.all(
    response.photos.map((photo) => {
      idx++;
      var password = "123456";
      if (idx !== 1) {
        password = "";
      }
      return new Album(
        photo.id,
        photo.photographer,
        idx !== 1,
        password,
        photo.src.tiny,
        "",
      );
    }),
  );
}

export async function getPhotosAsync(
  pageIndex: number,
  countOfPage: number,
): Promise<Album[]> {
  var qs = ["nature", "ocean", "tree", "mountain", "river", "beach", "sky"];
  var response = await common.getDataWithAuthorizationAsync<PexelsApiResponse>(
    token,
    `https://api.pexels.com/v1/search?query=${qs[pageIndex]}&per_page=${countOfPage}`,
  );
  var idx: number = 0;
  return Promise.all(
    response.photos.map((photo) => {
      idx++;
      var password = "123456";
      if (idx !== 1) {
        password = "";
      }
      return new Album(
        photo.id,
        photo.photographer,
        idx !== 1,
        password,
        photo.src.tiny,
        photo.src.large,
      );
    }),
  );
}
