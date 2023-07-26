import {
  serviceGetAlbums,
  serviceGetLyrics,
  serviceGetSongs,
} from "../services/services";

//Action -> payload, el valor que quiero que actualice
export const action = (type, payload) => {
  return { type, payload };
};

//dispatcher
export const setUpdateCounter = (numberToAdd) => (dispatch, getState) => {
  const actualStateCounter = getState().reducer.counter;
  dispatch(action("add", actualStateCounter + numberToAdd));
};

export const resetCounter = () => (dispatch) => {
  dispatch(action("reset", {}));
};

export const getAlbums = () => (dispatch) => {
  serviceGetAlbums()
    .then(function (response) {
      const infoAlbums = response.data;
      dispatch(action("save", infoAlbums));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getSongs = () => (dispatch) => {
  serviceGetSongs()
    .then(function (response) {
      const counterSongs = response.data.length;
      dispatch(action("saveSong", counterSongs));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getLyrics = (songID) => (dispatch) => {
  //intentar try catch
  const urlSong = `/${songID}`;
  serviceGetLyrics(songID)
    .then((responseLyrics) => {
      serviceGetSongs(urlSong)
        .then((responseSong) => {
          const songData = {
            lyrics: responseLyrics.data.lyrics,
            title: responseSong.data.song_title,
            album_id: responseSong.data.album_id,
          };
          dispatch(action("saveSongLyric", songData));
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
