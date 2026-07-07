import "./ProductGallery.css";

import product1 from "../assets/bridge.jpg";
import product2 from "../assets/falls.jpg";
import product3 from "../assets/forest.jpg";
import product4 from "../assets/path.jpg";

const ProductGallery = () => {
  return (
    <div className="gallery">
      <img src={product1} alt="Product 1" />
      <img src={product2} alt="Product 2" />
      <img src={product3} alt="Product 3" />
      <img src={product4} alt="Product 4" />
    </div>
  );
};

export default ProductGallery;