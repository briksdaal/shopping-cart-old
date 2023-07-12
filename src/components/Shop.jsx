import ProductCard from './ProductCard';
import { shopTexts } from '../content';

export default function Shop({ products }) {
  if (products && products.length) {
    return (
      <div className="shop">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  } else return <h1>{shopTexts.emptyShop}</h1>;
}
