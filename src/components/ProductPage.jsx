import defaultGameImg from '../../media/default_game_full.webp';

export default function ProductPage({
  title,
  price,
  description,
  imgFullSrc,
  addToCart
}) {
  return (
    <div>
      <div className="product-info">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={addToCart}>Add To Cart</button>
      </div>
      <div className="product-img">
        <img
          src={imgFullSrc || defaultGameImg}
          alt={imgFullSrc ? title.toLowerCase() : 'snes game'}
        />
      </div>
    </div>
  );
}
