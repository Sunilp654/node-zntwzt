import { useState } from 'react';
const Weekdays = ({ item }) => {
  const [checkedM, setCheckedM] = useState(false);
  const [checkedT, setCheckedT] = useState(false);
  const [checkedW, setCheckedW] = useState(false);
  const [checkedTH, setCheckedTH] = useState(false);
  const [checkedF, setCheckedF] = useState(false);
  const [checkedSA, setCheckedSA] = useState(false);
  const [checkedSU, setCheckedSU] = useState(false);
  //console.log(item);
  //var daysn = item.split(',');
  //console.log(daysn, 'data');
  return (
    <>
      <label>
        <input type="checkbox" value="Sunday" checked={checkedSU} />
        Sunday
      </label>
      <br />
      <label>
        <input type="checkbox" value="Monday" checked={checkedM} />
        Monday
      </label>
      <br />
      <label>
        <input type="checkbox" value="Tuesday" checked={checkedT} />
        Tuesday
      </label>
      <br />
      <label>
        <input type="checkbox" value="Wednesday" checked={checkedW} />
        Wednesday
      </label>
      <br />
      <label>
        <input type="checkbox" value="Thursday" checked={checkedTH} />
        Thursday
      </label>
      <br />
      <label>
        <input type="checkbox" value="Friday" checked={checkedF} />
        Friday
      </label>
      <br />
      <label>
        <input type="checkbox" value="Saturday" checked={checkedSA} />
        Saturday
      </label>
    </>
  );
};

export default Weekdays;
