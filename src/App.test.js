import { render, screen } from '@testing-library/react';
import App from './App';
import { Header, Footer } from './assets/components/Navigation';
import Grid from './assets/components/Grid';
import Carousel from './assets/components/Carousel';

test('Append Header', () => {
  render(<Header />);
  const header = document.getElementsByTagName('header')[0];
  expect(header).toBeInTheDocument();
});

test('Append Grid', () => {
  render(<Grid />);
  const grid = document.getElementsByClassName('grid-container')[0];
  expect(grid).toBeInTheDocument();
});

test('Append Carousel', () => {
  render(<Carousel />)
  const carousel = document.getElementsByClassName('work-carousel-container')[0];
  expect(carousel).toBeInTheDocument();
});

test('Append Footer', () => {
  render(<Footer />);
  const footer = document.getElementsByTagName('footer')[0];
  expect(footer).toBeInTheDocument();
});
