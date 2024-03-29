import { When } from 'react-if';
import styles from './styles.module.scss';
import { useState, useLayoutEffect } from 'react';
import { Button } from '../../ui/Button';
import {
  IMAGE_ROTATE_MARGIN,
  IMAGE_SCALE_MARGIN,
} from '../../../constants';
import { TextInput } from '../../ui/TextInput';
import { ColorSelector } from '../../ui/ColorSelector';

export function MemeCanvas({ canvasImage = null as string | null }) {
  const [imageScale, setImageScale] = useState(1);
  const [imageRotation, setImageRotation] = useState(0);
  const [imageFlipped, setImageFlipped] = useState(false);

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const [topColor, setTopColor] = useState('#FFF');
  const [bottomColor, setBottomColor] = useState('#FFF');

  /* reset canvas to defaults */
  const resetCanvas = () => {
    setImageRotation(0);
    setImageScale(1);
    setImageFlipped(false);
    setTopText('');
    setBottomText('');
    setTopColor('#FFF');
    setBottomColor('#FFF');
  };

  /* image rotation */
  const rotateImage = () => {
    setImageRotation(imageRotation + IMAGE_ROTATE_MARGIN);
  };

  /* image scaling - up */
  const scaleUp = () => {
    setImageScale(imageScale + IMAGE_SCALE_MARGIN);
  };

  /* image scaling - down */
  const scaleDown = () => {
    setImageScale(imageScale - IMAGE_SCALE_MARGIN);
  };

  /* apply css for transform here */
  const transformStyles = `rotate(${imageRotation}deg) scale(${imageScale}) ${
    imageFlipped ? `scaleX(-1)` : ``
  }`;

  useLayoutEffect(() => {
    /* when image changes, reset to defaults */
    if (canvasImage) {
      resetCanvas();
    }
  }, [canvasImage]);

  return (
    <div>
      <div className={styles.controls}>
        <div>
          <Button label='Rotate' onClick={rotateImage} />
          <Button label='Scale Up' onClick={scaleUp} />
          <Button label='Scale Down' onClick={scaleDown} />
          <Button
            label='Mirror'
            onClick={() => setImageFlipped(!imageFlipped)}
          />
        </div>

        <div className={styles.textInputsContainer}>
          <div>
            <TextInput
              maxChars={40}
              placeholder='Insert top text here'
              width='300px'
              value={topText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTopText(e.target.value)
              }
            />
          </div>
          <div className={styles.colorSelectContainer}>
            <ColorSelector
              selectedColor={topColor}
              pickColor={(color: string) => setTopColor(color)}
            />
          </div>

          <div style={{ paddingLeft: `10px` }}>
            <TextInput
              maxChars={40}
              placeholder='Insert bottom text here'
              width='300px'
              value={bottomText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBottomText(e.target.value)
              }
            />
          </div>
          <div className={styles.colorSelectContainer}>
            <ColorSelector
              selectedColor={bottomColor}
              pickColor={(color: string) => setBottomColor(color)}
            />
          </div>
        </div>
      </div>
      <div className={styles.memeContainer}>
        <When condition={canvasImage !== null}>
          <div className={styles.textTop}>
            <div
              className={styles.textContainer}
              style={{ color: topColor }}
            >
              {topText}
            </div>
          </div>

          <div className={styles.textBottom}>
            <div
              className={styles.textContainer}
              style={{ color: bottomColor }}
            >
              {bottomText}
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              data-testid='canvasImg'
              id='canvasImage'
              src={canvasImage || ''}
              className={styles.canvasImage}
              style={{
                transform: transformStyles,
              }}
            />
          </div>
        </When>
      </div>
    </div>
  );
}
