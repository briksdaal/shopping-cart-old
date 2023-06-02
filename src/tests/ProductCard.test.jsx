import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import superMetroidImg from '../media/super_metroid_thumbnail.webp';
import defaultGameImg from '../media/default_game_thumbnail.webp';

const metroid = {
  id: 5,
  title: 'Super Metroid',
  price: '$29.00',
  imgThumbSrc: superMetroidImg
};

describe('Product card tests', () => {
  it('Renders product title', () => {
    render(<ProductCard {...metroid} />);
    const title = screen.getByRole('heading', {
      name: 'Super Metroid'
    });

    expect(title).toBeInTheDocument();
  });

  it('Renders product price with cents and dollar sign', () => {
    render(<ProductCard {...metroid} />);
    const price = screen.getByText('$29.00');

    expect(price).toBeInTheDocument();
  });

  it('Renders product image with correct src and alt', () => {
    render(<ProductCard {...metroid} />);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img.src).toContain(metroid.imgThumbSrc);
    expect(img.alt).toBe('super metroid');
  });

  it('Renders container with id-based class', () => {
    const { container } = render(<ProductCard {...metroid} />);

    expect(container.firstChild).toHaveClass('card-5');
  });

  it('Renders default image if image prop is missing', () => {
    const { imgThumbSrc: _imgThumbSrc, ...noImgThumbSrcMetroid } =
      metroid;
    render(<ProductCard {...noImgThumbSrcMetroid} />);
    const img = screen.getByRole('img');

    expect(img.src).toContain(defaultGameImg);
    expect(img.alt).toBe('snes game');
  });

  it('Renders nothing if title prop is missing', () => {
    const { title: _title, ...noTitleMetroid } = metroid;
    const { container } = render(<ProductCard {...noTitleMetroid} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Renders nothing if price prop is missing', () => {
    const { price: _price, ...noPriceMetroid } = metroid;
    const { container } = render(<ProductCard {...noPriceMetroid} />);

    expect(container).toBeEmptyDOMElement();
  });
});
