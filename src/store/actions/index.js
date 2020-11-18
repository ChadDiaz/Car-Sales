export const addNewFeature = (feature) => {
  dispatch({
    type: "ADD_NEW_FEATURE",
    payload: feature,
  });
};

export const deleteFeature = (feature) => {
  return {
    type: "DELETE_FEATURE",
    payload: feature,
  };
};
