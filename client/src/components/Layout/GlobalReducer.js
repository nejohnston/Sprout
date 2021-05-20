import getUsers from '../../api/expressFetch'
const reducer = (state, action) => {
  switch (action.type) {
      case 'SET_USER':
          return {
              ...state,
              user: getUsers(action.payload)
          };
      case 'SET_ERROR':
          return {
              ...state,
              error: action.payload
          };
      default:
          return state;
  }
};

export default reducer;