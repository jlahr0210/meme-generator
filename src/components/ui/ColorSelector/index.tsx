import styles from './styles.module.scss';
import { useState } from 'react';
import { When } from 'react-if';
import { ColorSelectorProps } from './types';
import { COLOR_PICKER_COLORS } from '../../../constants';

/* Color Picker component */
export function ColorSelector({
  selectedColor = '#FFF',
  pickColor,
}: ColorSelectorProps) {
  const selectColor = (color: string) => {
    pickColor(color);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.mainContainer}>
        <When condition={isOpen}>
          <div className={styles.palette}>
            {COLOR_PICKER_COLORS.map((color, idx: number) => (
              <div
                key={idx}
                className={styles.paletteColor}
                style={{ backgroundColor: color }}
                onClick={() => selectColor(color)}
              ></div>
            ))}
          </div>
        </When>
        <div
          className={styles.paletteSelectColor}
          style={{ backgroundColor: selectedColor }}
          onClick={() => setIsOpen(true)}
        ></div>
      </div>
    </>
  );
}
