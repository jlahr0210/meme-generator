import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemeCanvas } from '.';

describe('Test', () => {
  it('Renders hello world', () => {
    const url = 'https://ibb.co/jhsW1sR';
    render(<MemeCanvas canvasImage={url} />);

    expect(screen.getByTestId('canvasImage')).toHaveProperty('src', url);
  });
});
