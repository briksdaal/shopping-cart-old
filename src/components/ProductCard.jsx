import defaultGameImg from '../media/default_game_thumbnail.webp';

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
          src={imgThumbSrc || defaultGameImg}
          alt={imgThumbSrc ? title.toLowerCase() : 'snes game'}
        />
      </a>
    </div>
  );
}
