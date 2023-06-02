import defaultGameImg from '../media/default_game.webp';

export default function ProductCard({ id, title, price, imgSrc }) {
  if (!title || !price) {
    return <></>;
  }

  return (
    <div className={`card-${id}`}>
      <h3>{title}</h3>
      <div>{price}</div>
      <img src={imgSrc || defaultGameImg} alt={imgSrc ? title.toLowerCase() : 'snes game'} />
    </div>
  );
}
