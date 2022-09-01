import { useState } from 'react';
const Todoform = () => {
  const [inputdata, setInputdata] = useState('');
  const [finallist, setFindallist] = useState([]);

  const itemList = (e) => {
    setInputdata(e.target.value);
  };

  const additem = () => {
    setFindallist((olditem) => {
      return [...olditem, inputdata];
    });
    setInputdata('');
  };

  return (
    <>
      <div className="m-5">
        <input
          type="text"
          placeholder="Enter Item..."
          className="taskinput"
          value={inputdata}
          onChange={itemList}
        />
        <button className="addbtn" onClick={additem}>
          Add
        </button>
      </div>

      <ul className="listStyle">
        {finallist.map((item, index) => {
          return (
            <li id={index}>
              <button>X</button> {item}
            </li>
          );
        })}
        {/* <li>{inputdata}</li> */}
      </ul>
    </>
  );
};

export default Todoform;
