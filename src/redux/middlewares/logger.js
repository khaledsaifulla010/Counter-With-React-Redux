const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("Current State", currentState);
  console.log("Action Dispatch", action);
  next(action);
  console.log("Updated State", store.getState());
};
export default logger;
