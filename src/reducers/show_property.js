const showProperty = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_PROPERTY':
      return action.property;
    default:
      return state;
  }
};

export default showProperty;
