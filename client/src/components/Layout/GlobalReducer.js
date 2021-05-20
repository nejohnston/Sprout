import getUsers from '../../api/apiQueries';

const types = {
    SET_USER: 'SET_USER',
    SET_ERROR: 'SET_ERROR'
}

const reducer = (state, action) => {
  switch (action.type) {
      case types.SET_USER:
          return {
              ...state,
              user: getUsers(action.payload)
          };
      case types.SET_ERROR:
          return {
              ...state,
              error: action.payload
          };
      default:
          return state;
  }
};

export default reducer;