const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const reducers = combineReducers({});

const store = configureStore({
  reducer: reducers,
});

export default store;
