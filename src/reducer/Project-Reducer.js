const INIT_STATE = {
  projects: {
    data: []
  },
  project: {
    data: []
  }
};

export const projectReducer = (state = INIT_STATE.projects, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const selectedProjectReducer = (state = INIT_STATE.project, action) => {
  switch (action.type) {
    case "FETCH_PROJECT_BY_ID_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
