import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
const Product = () => {
  const { id } = useParams();
  // console.log(id, 'id');
  const [productget, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductdd = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      //console.log(response, 'product response');
      setProduct(await response.json());
      setLoading(false);
    };
    getProductdd();
  }, []);
  //console.log(product);
  const Loading = () => {
    return <p className="text-center mt-5">Loading...</p>;
  };
  //console.log(productget.title,)

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-4">
          <div className="row">
            <div className="col-6">
              <img
                style={{ objectFit: 'contain' }}
                src={productget.image}
                alt={productget.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-6 pt-5">
              <span
                className="fs-5 text-capitalize"
                style={{
                  border: '1px solid #dfdfdf',
                  borderRadius: '30px',
                  padding: '5px 20px',
                }}
              >
                {productget.category}
              </span>
              <h3 className="my-3">{productget.title}</h3>
              <h6>{productget.description}</h6>
              <h3 className="mt-3">Price: ${productget.price}</h3>
              <button className="btn btn-outline-dark my-3">Add To Cart</button>
              <NavLink to="/Cart" className="btn btn-dark my-3 mx-2">
                Go To Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default Product;
