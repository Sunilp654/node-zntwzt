import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  //const [showpage, setShowpage] = useState(false);
  let componentMounted = true;
  //console.log(data, 'data');
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      // const dataget = await response.json();
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <p className="text-center">Loading...</p>;
  };
  const catogeryfind = [...new Set(data.map((item) => item.category)), 'All'];

  const Product = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            {filter.map((allProduct) => {
              return (
                <>
                  <div className="col-md-3 my-3">
                    <div className="card text-center" key={allProduct.id}>
                      <img
                        className="card-img-top"
                        src={allProduct.image}
                        alt="Cardimagecap"
                        style={{ height: '150px', objectFit: 'contain' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{`${allProduct.title.substring(
                          0,
                          15
                        )}...`}</h5>
                        <p className="card-text">
                          <span className="fw-bolder fs-5">
                            $ {allProduct.price}
                          </span>
                          <br></br>
                          {/* {`${allProduct.description.substring(0, 50)}...`} */}
                        </p>
                        <NavLink
                          to={`/Product/${allProduct.id}`}
                          className="btn btn-outline-dark "
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((catdata) => catdata.category === cat);
    setFilter(updatedList);
    if (cat === 'All') {
      setFilter(data);
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center my-4">
          {catogeryfind.map((Catdata, index) => {
            return (
              <>
                <button
                  className="btn btn-outline-dark ms-2 text-capitalize"
                  key={index}
                  onClick={() => filterProduct(Catdata)}
                >
                  {Catdata}
                </button>
              </>
            );
          })}
        </div>
        <Product />
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="title text-center fw-bolder">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
