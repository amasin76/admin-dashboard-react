const DarkModeReducer = (state, action) => {
  let list = [0, 1, 2]; // light, dark, black
  let mode = state.darkMode;

  const next = (list, mode) => {
    const currentIndex = list.indexOf(mode);
    const nextIndex = (currentIndex + 1) % list.length;
    return list[nextIndex];
  };

  switch (action.type) {
    case 0: {
      return {
        darkMode: 0,
      };
    }
    case 1: {
      return {
        darkMode: 1,
      };
    }
    case 2: {
      return {
        darkMode: 2,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: next(list, mode),
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
