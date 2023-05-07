// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// action creator
// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// action creator
// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// // 기존 리덕스의 방식은 이렇게 기존 state(배열)를 복제해 새로운 배열을 만들어야 했음.
// const reducer1 = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type: // "ADD"
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type: // "DELETE"
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 그치만 리덕스 툴킷은 그럴 필요가 없음. state를 mutate(변화시켜도)해도 됨. 알아서 위 코드처럼 돌아감
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//     // 리턴하지 않고있는 코드. {}의 여부임. push는 아무것도 리턴하지 않고 state를 mutate해줌.
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
//   // 리턴하는 코드. filter는 새로운 배열을 리턴함.
// });

// 근데 위 코드를 또 줄일수가 있음. createSlice는 reducer, action을 제공함.
const todos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    }, // 리턴하지 않고있는 코드. {}의 여부임. push는 아무것도 리턴하지 않고 state를 mutate해줌.
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    // 리턴하는 코드. filter는 새로운 배열을 리턴함.
  },
});

export const { addTodo, deleteTodo } = todos.actions;

export default configureStore({ reducer: todos.reducer });
