const ProductItem: React.FC = ({ imgLink, name, price }) => {
  return (
    <div className="pantry__item">
      <img className="pantry__item-img" src={imgLink} />
      <div>
        <p className="pantry__item-name">{name}</p>
        <span className="pantry__item-price">{price} $</span>
      </div>
    </div>
  );
};

export default ProductItem;
