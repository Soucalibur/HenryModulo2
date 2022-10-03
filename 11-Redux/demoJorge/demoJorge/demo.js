const redux = require("redux");

const initialState = {
  num: 0,
  visibility: true,
  name: "",
  amigos: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CAMBIAR_NOMBRE":
      return {
        ...state,
        name: action.payload,
      };

    case "ADD_FRIEND":
      return {
        ...state,
        amigos: [...state.amigos, action.payload],
      };
    case "DELETE_FRIEND":
      return {
        ...state,
        amigos: state.amigos.filter((amigo) => amigo.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

const store = redux.createStore(reducer);

//action creator
const cambiarNombre = (name) => {
  return { type: "CAMBIAR_NOMBRE", payload: name };
};

const addFriend = (friendName, id) => {
  return { type: "ADD_FRIEND", payload: { name: friendName, id: id } };
};

const deleteFriend = (id) => {
  return { type: "DELETE_FRIEND", payload: id };
};

store.dispatch(addFriend("Fran", 1));

console.log(store.getState());
store.dispatch(addFriend("Paula", 2));
console.log(store.getState());
store.dispatch(addFriend("Edgard", 3));
console.log(store.getState());

// acá
store.dispatch(deleteFriend(3));
console.log(store.getState());
