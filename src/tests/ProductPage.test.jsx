import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import ProductPage from '../components/ProductPage';
import { defaultGame, products } from '../data.js';

const metroid = products[11];

describe('Product page info and image tests', () => {
  it('Renders product title', () => {
    render(<ProductPage {...metroid} />);
    const title = screen.getByRole('heading', {
      name: 'Super Metroid'
    });

    expect(title).toBeInTheDocument();
  });

  it('Renders product price with cents and dollar sign', () => {
    render(<ProductPage {...metroid} />);
    const price = screen.getByText(metroid.price);

    expect(price).toBeInTheDocument();
  });

  it('Renders product image with correct src and alt', () => {
    render(<ProductPage {...metroid} />);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img.src).toContain(metroid.imgFullSrc);
    expect(img.alt).toBe('super metroid');
  });

  it('Renders product description', () => {
    render(<ProductPage {...metroid} />);
    const desc = screen.getByText(metroid.description);

    expect(desc).toBeInTheDocument();
  });

  it('Renders default image if image prop is missing', () => {
    const { imgFullSrc: _imgFullSrc, ...noImgFullSrcMetroid } =
      metroid;
    render(<ProductPage {...noImgFullSrcMetroid} />);
    const img = screen.getByRole('img');
    expect(img.src).toContain(defaultGame.imgFullSrc);
    expect(img.alt).toBe('snes game');
  });
});

describe('Add to cart button tests', () => {
  it('Render add to cart button', () => {
    render(<ProductPage {...metroid} />);
    const addToCartBtn = screen.getByRole('button', {
      name: 'Add To Cart'
    });

    expect(addToCartBtn).toBeInTheDocument();
  });

  it('Calls the addToCart function when clicked', async () => {
    const addToCart = vi.fn();
    render(<ProductPage {...metroid} addToCart={addToCart} />);
    const addToCartBtn = screen.getByRole('button', {
      name: 'Add To Cart'
    });
    const user = userEvent.setup();

    await user.click(addToCartBtn);

    expect(addToCart).toBeCalledTimes(1);
  });
});
