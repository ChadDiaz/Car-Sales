export const addNewFeature = (feature) => {
  return {
    type: "ADD_NEW_FEATURE",
    payload: feature,
  };
};

export const deleteFeature = (feature) => {
  return {
    type: "DELETE_FEATURE",
    payload: feature,
  };
};
