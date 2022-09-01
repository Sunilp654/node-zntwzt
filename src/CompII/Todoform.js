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
  //const dates = new Date();
  const date = new Date();
  const numOfHours = 1;
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  const afterOneHour = date.getHours();
  const afterOneMinutes = date.getMinutes();
  return (
    <>
      <div className="m-5">
        <input
          type="text"
          placeholder="Enter Item..."
          className="taskinput"
          value={inputdata}
          ref={nameRef}
          onKeyDown={dataenter}
          onChange={itemList}
        />
        <button className="addbtn" onClick={additem}>
          Add
        </button>
        <button className="addbtn" onClick={deleteAll}>
          Delete All
        </button>
        {/*<button className="addbtn">Delete Selected</button> */}

        <h3 style={{ marginTop: '10px' }}>
          After Four Hours = {afterOneHour} : {afterOneMinutes}
        </h3>
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
