import { useState, useRef } from 'react';
import TodoList from './TodoList';
const Todoform = () => {
  const [inputdata, setInputdata] = useState('');
  const [finallist, setFindallist] = useState([]);
  const nameRef = useRef();
  const itemList = (e) => {
    setInputdata(e.target.value);
  };

  const additem = () => {
    if (inputdata === '') {
      alert('please Enter Task Item');
      nameRef.current.focus();
    } else {
      setFindallist((olditem) => {
        return [...olditem, inputdata];
      });
      setInputdata('');
    }
  };
  const dataenter = (e) => {
    if (e.keyCode === 13) {
      if (inputdata === '') {
        alert('please Enter Task Item');
        nameRef.current.focus();
      } else {
        setFindallist((olditem) => {
          return [...olditem, inputdata];
        }); 
        setInputdata('');
      }
    }
  };
  const deleteAll = () => {
    setFindallist([]);
  };
  const deleteitem = () => {
    console.log('delete');
  };
  return (
    <>
      <div className="m-5">
        <input
          type="text"
          placeholder="Enter Item..."
          className="taskinput"
          value={inputdata}
          ref={nameRef}
          onChange={itemList}
          onKeyDown={dataenter}
        />
        <button className="addbtn" onClick={additem}>
          Add
        </button>
        <button className="addbtn" onClick={deleteAll}>
          Delete All
        </button>
        {/*<button className="addbtn">Delete Selected</button> */}
      </div>

      <ul className="listStyle">
        {finallist.map((item, index) => {
          return (
            <TodoList
              key={index}
              id={index}
              onSelect={deleteitem}
              text={item}
            />
          );
        })}
        {/* <li id={index}>
              <button>X</button> {item}
            </li> */}
        {/* <li>{inputdata}</li> */}
      </ul>
    </>
  );
};

export default Todoform;
