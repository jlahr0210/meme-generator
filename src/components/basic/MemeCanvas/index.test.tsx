import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemeCanvas } from '.';

const url = 'https://ibb.co/jhsW1sR';

/* simple image source test */
describe('Image Source Testing', () => {
  it('Renders canvasImage from props', () => {
    render(<MemeCanvas canvasImage={url} />);
    expect(screen.getByTestId('canvasImg')).toHaveProperty('src', url);
  });
});
