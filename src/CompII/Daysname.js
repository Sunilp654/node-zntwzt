import Weekdays from './CompII/Weekdays';
const Daysname = ({ daysname }) => {
  //console.log(daysname);

  // {
  //   daysname.map((dayitme) => {
  //     //
  //   });
  // }

  return (
    <>
      <div className="checkbox">
        {daysname.map((item) => {
          return (
            <>
              <div className="data">
                <Weekdays item={item} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Daysname;
