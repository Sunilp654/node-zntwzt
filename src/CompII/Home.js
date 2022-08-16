import Products from './Products';
import FormCom from './Form';
const Home = () => {
  return (
    <>
      {/*Banner section*/}

      {/*<div className="card bg-dark text-white border-0">
        <img
          className="card-img banner-img"
          src="https://t3.ftcdn.net/jpg/03/69/39/42/240_F_369394275_dllyGftwzeIWUNkh3b59T5nZdvX33whW.jpg"
          alt="Card"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div> */}
      <FormCom />
      <Products />
    </>
  );
};

export default Home;
