import React from 'react';

const UserContext = React.createContext();

let initialState = {
  id: '',
  name: '',
  token: '',
}

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "login":
      return { ...state, ...action.payload };
    case "signup":
      return { ...state, ...action.payload };
    case "logout":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

function UserContextProvider(props) {
  
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };