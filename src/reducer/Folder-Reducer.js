const INIT_STATE = {
  folders: {
    data: []
  },
  folder: {
    data: []
  }
};

export const folderReducer = (state = INIT_STATE.folders, action) => {
  switch (action.type) {
    case "FETCH_FOLDERS_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const selectedFolderReducer = (state = INIT_STATE.folder, action) => {
  switch (action.type) {
    case "FETCH_FOLDER_BY_ID_INIT":
      return { ...state, data: [] };
    case "FETCH_FOLDER_BY_ID_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
