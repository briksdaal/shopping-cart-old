import { render, screen } from '@testing-library/react';
import SingleIcon from '../components/SingleIcon';
import { icons } from '../content';

const fbIcon = icons[0];

it('Renders icon link', () => {
  render(<SingleIcon {...fbIcon} />);

  const icon = screen.getByRole('link');

  console.log(screen);

  expect(icon).toBeInTheDocument();
});
