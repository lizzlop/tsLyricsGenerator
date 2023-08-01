import {
  serviceGetAlbums,
  serviceGetLyrics,
  serviceGetSongs,
} from "../services/services";

export const action = (type, payload) => {
  return { type, payload };
};

export const reset = () => (dispatch) => {
  dispatch(action("reset", {}));
};

export const getAlbums = () => (dispatch) => {
  serviceGetAlbums()
    .then(function (response) {
      const infoAlbums = response.data;
      dispatch(action("save", infoAlbums));
    })
    .catch((error) => {
      getCustomError(dispatch, error);
    });
};

export const getSongs = () => (dispatch) => {
  serviceGetSongs()
    .then(function (response) {
      const counterSongs = response.data.length;
      dispatch(action("saveSong", counterSongs));
    })
    .catch((error) => {
      getCustomError(dispatch, error);
    });
};

export const getSongData = (songID) => async (dispatch) => {
  const urlSong = `/${songID}`;
  try {
    const responseLyrics = serviceGetLyrics(songID);
    const responseSong = serviceGetSongs(urlSong);
    const allResponses = await Promise.all([responseLyrics, responseSong]);

    const songData = {
      lyrics: allResponses[0].data.lyrics,
      title: allResponses[1].data.song_title,
      album_id: allResponses[1].data.album_id,
    };
    dispatch(action("saveSongLyric", songData));
  } catch (error) {
    getCustomError(dispatch, error);
  }
};

export const getCustomError = (dispatch, error) => {
  let customError;
  if (error.response) {
    customError = {
      message: error.response.data.error,
      code: error.code,
    };
  } else {
    customError = {
      message: error.message,
      code: error.code,
    };
  }
  dispatch(action("errors", customError));
};
