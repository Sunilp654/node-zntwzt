import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
const CatButton = ({
  data,
  setData,
  datafilter,
  setdataFilter,
  filterdataI,
  setfilterDataI,
}) => {
  useEffect(() => {
    //console.log(arrObjOne);
    const newItem = data.filter((newVal) => {
      return newVal.category === filterdataI;
      // comparing category for displaying data
    });
    setData(newItem);
  }, [filterdataI]);

  const arrObjOne = [
    ...new Set(datafilter.map((item) => item.category)),
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
            onClick={() => setfilterDataI(postC)}
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
