import { ADD_FEATURE, DELETE_FEATURE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carSalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const newFeatures = [];
      // eslint-disable-next-line array-callback-return
      state.additionalFeatures.map((item) => {
        if (item.id !== action.payload.id) {
          newFeatures.push(item);
        }
      });
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalFeatures: newFeatures,
      };
    case DELETE_FEATURE:
      const updatedFeature = state.car.features.filter((item) => item.id === action.payload.id)[0]
      console.log("updatedFeature from reducer", updatedFeature)
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
          additionalFeatures: state.additionalFeatures.push(updatedFeature)
        },
      };
    default:
      return state;
  }
};
