import { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
const Product = ({ id }) => {
  //const [id] = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductdd = async () => {
      setLoading(true); 
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProductdd();
  }, []);
  //console.log(product);
  const Loading = () => {
    <p className="text-center">Loading...</p>;
  };

  const ShowProduct = () => {
    <>
      {/* <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h3>{product.title}</h3>
        <h6>{product.description}</h6>
      </div> */}
    </>;
  };

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default Product;
