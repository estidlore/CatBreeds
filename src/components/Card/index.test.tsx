import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { Card } from '.';

describe('Card', () => {
  const cat = {
    affectionLevel: 5,
    breedName: 'Aegean',
    id: 'abys',
    image: {
      height: 800,
      id: 'ozEvzdVM-',
      url: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg',
      width: 1200,
    },
    intelligence: 5,
    origin: 'Egypt',
  };

  it('Show content', () => {
    expect.assertions(4);
    render(<Card cat={cat} />);

    const texts = [
      `Breed: ${cat.breedName}`,
      `Origin: ${cat.origin}`,
      `Intelligence: ${cat.intelligence}`,
    ];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeOnTheScreen();
    });
    expect(screen.queryByTestId(`img-${cat.image.id}`)).toBeOnTheScreen();
  });
});
