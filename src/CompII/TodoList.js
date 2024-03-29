const TodoList = (props) => {
  return (
    <>
      <li>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>{' '}
        {props.text}
        <input type="checkbox" style={{ marginLeft: '5px' }} />
      </li>
    </>
  );
};

export default TodoList;
