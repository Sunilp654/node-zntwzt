import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
const CatButton = ({
  data2,
  setData2,
  datafilter,
  setdataFilter,
  filterdataI,
  setfilterDataI,
}) => {
  const [filtercat, setfiltercat] = useState('All');
  useEffect(() => {
    if (filtercat === 'All') {
      setData2(datafilter);
      return;
    }
    //console.log(arrObjOne);
    const newItem = data2.filter((newVal) => {
      return newVal.category === filtercat;
      // comparing category for displaying data
    });
    setData2(newItem);
  }, [filtercat]);

  const arrObjOne = [
    ...new Set(filterdataI.map((item) => item.category)),
    'All',
  ];
  return (
    <>
      {arrObjOne.map((postC, index) => {
        return (
          <Button
            className="mx-2"
            style={{ textTransform: 'capitalize' }}
            key={index}
            onClick={() => setfiltercat(postC)}
          >
            {postC}
          </Button>
        );
      })}
      {/* //<Button>asdf</Button> */}
    </>
  );
};
export default CatButton;
