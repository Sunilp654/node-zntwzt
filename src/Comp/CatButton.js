import { Button } from 'react-bootstrap';
import React from 'react';
const CatButton = ({ filterdata, NavItem }) => {
  const arrObjOne = [...new Set(NavItem.map((item) => item.category)), 'All'];
  //console.log(arrObjOne);
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
