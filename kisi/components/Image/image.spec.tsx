import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Image } from './index';

const mockProps = {
  title: 'Test Title',
  description: 'Test Description',
  imageUrl: '/img.jpg',
};

test('renders image component', () => {
  render(<Image {...mockProps} />);

  expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  expect(screen.getByAltText('icon')).toBeInTheDocument();
});

test('renders image component with description on hover', () => {
  const { getByText, getByTestId } = render(<Image {...mockProps} />);

  fireEvent.mouseEnter(getByText(mockProps.title));
  const description = getByTestId(/description/i);
  expect(description).toBeInTheDocument();

  fireEvent.mouseLeave(getByText(mockProps.title));

  expect(description).not.toBeInTheDocument();
});