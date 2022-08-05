import Weekdays from './CompII/Weekdays';
const Daysname = ({ daysname }) => {
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
