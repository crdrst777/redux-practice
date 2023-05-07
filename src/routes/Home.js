import React, { useState } from "react";
// import { connect } from "react-redux"; // connet는 2개의 argument를 가진다 - mapStateToProps, mapDispatchToProps
import { addTodo, deleteTodo } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// mapStateToProps()을 이용해서 todos를 prop으로 전달
const Home = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    console.log(text);
  };

  const dispatch = useDispatch();
  const onAddClick = () => {
    const id = Date.now();
    dispatch(addTodo({ text, id }));
  };

  const todos = useSelector((state) => state);
  const onDelClick = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    dispatch(deleteTodo(targetId));
    console.log("targetId", targetId);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type={text} value={text} onChange={onChange} />
        <button onClick={onAddClick}>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          // 밑에서 id={todo.id}를 써줬기때문에 위에서 parentNode.id를 찾을수 있는거임.
          <li key={todo.id} id={todo.id}>
            <Link to={`/${todo.id}`}>{todo.text}</Link>
            <button onClick={onDelClick}>DEL</button>
          </li>
        ))}
      </ul>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return { todos: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (text) => dispatch(add(text)),
//     // addTodo 함수는 text argument가 필요하고, 이 함수가 실행되면 dispatch를 호출한다. actionCreators.addTodo(text)와 함께
//   };
// };

export default Home;
// mapStateToProps(), mapDispatchToProps() -> redux state로부터 home컴포넌트에 prop으로써 전달한다. mapDispatchToProps()는 prop으로 현재 함수를 전달하고있음.
