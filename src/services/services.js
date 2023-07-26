import axios from "axios";

const url = "https://taylor-swift-api.sarbo.workers.dev";

export const serviceGetAlbums = () => axios.get(`${url}/albums`);

export const serviceGetSongs = (songID = "") =>
  axios.get(`${url}/songs${songID}`);

export const serviceGetLyrics = (songID) =>
  axios.get(`${url}/lyrics/${songID}`);
