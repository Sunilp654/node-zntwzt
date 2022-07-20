import { Button } from 'react-bootstrap';
import React from 'react';
const CatButton = ({
  data2,
  setData2,
  datafilter,
  setdataFilter,
  filterdataI,
  setfilterDataI,
}) => {
  const arrObjOne = [
    ...new Set(filterdataI.map((item) => item.category)),
    'All',
  ];
  //console.log(arrObjOne);

  const filterdata = (curcat) => {
    const newItem = data2.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setData2(newItem);

    if (curcat === 'All') {
      setData2(datafilter);
    }
  };
  return (
    <>
      {arrObjOne.map((postC, index) => {
        return (
          <Button
            className="mx-2"
            style={{ textTransform: 'capitalize' }}
            key={index}
            onClick={() => filterdata(postC)}
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
