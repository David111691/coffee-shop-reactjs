import { Link } from "react-router";

const ProductItem: React.FC = ({ imgLink, name, price, routeName }) => {
  return (
    <div className="pantry__item">
      <Link to={`/products/${routeName}`}>
        <img className="pantry__item-img" src={imgLink} />
      </Link>
      <div>
        <Link to={`/products/${routeName}`}>
          <p className="pantry__item-name">{name}</p>
        </Link>
        <span className="pantry__item-price">{price} $</span>
      </div>
    </div>
  );
};

export default ProductItem;
