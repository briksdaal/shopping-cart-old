import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';
import { products } from '../data.js';
import { shopTexts } from '../content';

it('Renders one product card', () => {
  render(<Shop products={[products[4]]} />);

  const productCards = screen.getAllByTestId('product-card');

  expect(productCards).toHaveLength(1);
});

it('Renders all product cards', () => {
  render(<Shop products={products} />);

  const productCards = screen.getAllByTestId('product-card');

  expect(productCards).toHaveLength(products.length);
});

it('Renders no products and an adequate message when passed an empty array', () => {
  render(<Shop products={[]} />);

  const productCards = screen.queryAllByTestId('product-card');
  const message = screen.getByRole('heading', {
    name: shopTexts.emptyShop
  });

  expect(productCards).toHaveLength(0);
  expect(message).toBeInTheDocument();
});
