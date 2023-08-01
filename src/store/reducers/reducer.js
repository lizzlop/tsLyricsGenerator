const initialState = { albums: [], songCounter: 0, songData: "", errors: null };

const updateObject = (oldObject, updatedProperties) => {
  return { ...oldObject, ...updatedProperties };
};

const reducerReset = () => {
  return updateObject(initialState);
};

const reducerSave = (state, action) => {
  return updateObject(state, {
    albums: action.payload,
  });
};

const reducerSaveSong = (state, action) => {
  return updateObject(state, {
    songCounter: action.payload,
  });
};

const reducerSaveSongLyric = (state, action) => {
  return updateObject(state, {
    songData: action.payload,
  });
};

const reducerErrors = (state, action) => {
  return updateObject(state, {
    errors: action.payload,
  });
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "reset":
      return reducerReset();
    case "save":
      return reducerSave(state, action);
    case "saveSong":
      return reducerSaveSong(state, action);
    case "saveSongLyric":
      return reducerSaveSongLyric(state, action);
    case "errors":
      return reducerErrors(state, action);
    default:
      return state;
  }
};

export default reducer;
