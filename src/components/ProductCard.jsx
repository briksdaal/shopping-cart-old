import { defaultGame } from '../data.js';

export default function ProductCard({
  id,
  title,
  price,
  imgThumbSrc
}) {
  if (!title || !price) {
    return <></>;
  }

  return (
    <div className={`card-${id}`}>
      <a href="#">
        <h3>{title}</h3>
        <div>{price}</div>
        <img
          src={imgThumbSrc || defaultGame.imgThumbSrc}
          alt={imgThumbSrc ? title.toLowerCase() : 'snes game'}
        />
      </a>
    </div>
  );
}
