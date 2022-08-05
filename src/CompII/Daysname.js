// import Weekdays from './Weekdays';
const Daysname = ({ daysname }) => {
  return (
    <>
      <div className="checkbox">
        {daysname.map((item) => {
          //console.log(item);
          return (
            <>
              <div>{item}</div>
              {/* <Weekdays item={item} /> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Daysname;
