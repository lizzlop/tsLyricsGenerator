//Reducer

const initialState = { counter: 0, albums: [], songCounter: 0, songData: "" };

const updateObject = (oldObject, updatedProperties) => {
  return { ...oldObject, ...updatedProperties };
};

const reducerAdd = (state, action) => {
  return updateObject(state, {
    counter: action.payload,
  });
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

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "add":
      return reducerAdd(state, action);
    case "reset":
      return reducerReset();
    case "save":
      return reducerSave(state, action);
    case "saveSong":
      return reducerSaveSong(state, action);
    case "saveSongLyric":
      return reducerSaveSongLyric(state, action);
    default:
      return state;
  }
};

export default reducer;
