// useSelector를 이용한 방법
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const todos = useSelector((state) => state);
  const id = useParams().id;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  console.log("todos", todos);
  console.log("id", id);
  console.log("todo", todo);

  return (
    <>
      <h1>{todo.text}</h1>
      <h5>Created at: {id}</h5>
    </>
  );
};

export default Detail;

// connect mapDispatchToProps를 useDispatch를 사용하는 걸로 바꿔보면 훨씬 쉽게 접근할 수 있습니다.
// 이전에는 hooks가 없어서 high order component를 썼는데 지금은 그럴 필요가 없어요. 공식문서를 봐도 connect나 mapDispatchToProps를 사용하는 방식은 튜토리얼에 나와있지 않습니다.

// mapStateToProps를 이용한 방법

// import React from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

// const Detail = ({ todos }) => {
//   const params = useParams();
//   console.log("params.id", params.id);
//   console.log("todos", todos);
//   const todo = todos.find((todo) => todo.id === parseInt(params.id));
//   console.log("todo", todo);

//   return (
//     <>
//       <h1>{todo.text}</h1>
//       <h5>Created at: {params.id}</h5>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   // const {
//   //   match: {
//   //     params: { id },
//   //   },
//   // } = ownProps;
//   // return { todo: state.find((todo) => todo.id === parseInt(id)) };
//   return { todos: state };
// };

// export default connect(mapStateToProps)(Detail);
