import Todoform from './Todoform';
//import { useState } from 'react';
const Todo = () => {
  //const [input, setInput] = useState();
  return (
    <>
      <div
        className="container"
        style={{ background: '#ddd', padding: '15px' }}
      >
        <div className="row">
          <div
            className="col-md-6 mx-auto text-center"
            style={{ background: '#000', color: '#fff', padding: '15px' }}
          >
            <h3>ToDo List</h3>
            <Todoform />
            {/* <Todolist /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
