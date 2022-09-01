const TodoList = (props) => {
  return (
    <>
      <li>
        <button>X</button> {props.text}
      </li>
    </>
  );
};

export default TodoList;
