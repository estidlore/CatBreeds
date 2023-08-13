import { render, screen } from '@testing-library/react-native';

import { Cats } from '.';

describe('views/Cats', () => {
  it('Show content', () => {
    expect.assertions(2);
    render(<Cats />);
    expect(screen.queryByText('Cat Breeds')).toBeOnTheScreen();
    expect(screen.queryByText('Loading cats...')).toBeOnTheScreen();
  });
});
