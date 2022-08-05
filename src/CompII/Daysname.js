import Weekdays from './CompII/Weekdays';
const Daysname = ({ daysname }) => {
  return (
    <>
      <div className="checkbox">
        {daysname.map((item) => {
          return (
            <>
              <Weekdays item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Daysname;
