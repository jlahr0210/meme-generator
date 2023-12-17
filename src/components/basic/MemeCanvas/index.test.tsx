import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemeCanvas } from '.';

const url =
  'https://i.ibb.co/nrtn5tC/Hill-Grant-99-MEDR8400-crop-north.jpg';

/* simple image source test */
describe('Image Source Testing', () => {
  it('Renders canvasImage from props', () => {
    render(<MemeCanvas canvasImage={url} />);
    expect(screen.getByTestId('canvasImg')).toHaveProperty('src', url);
  });
});
