import { useState } from 'react';
import { TextInput } from '../../components/ui/TextInput';
import styles from './styles.module.scss';
import { MemeCanvas } from '../../components/basic/MemeCanvas';
import { Button } from '../../components/ui/Button';
import { When } from 'react-if';

export function MemeGenerator() {
  const [imageUrl, setImageUrl] = useState('');
  const [canvasImage, setCanvasImage] = useState<string | null>(null);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.titleText}>Jeff's Meme Generator</div>
      <div className={styles.innerContainer}>
        <section className={styles.header}>
          <div className={styles.imageInput}>
            <div className={styles.urlInput}>
              <TextInput
                placeholder='Insert image URL'
                value={imageUrl}
                width='100%'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setImageUrl(e.target.value)
                }
              />

              <div className={styles.submitContainer}>
                <Button
                  label='Meme This!'
                  onClick={() => setCanvasImage(imageUrl)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.body}>
          <div className={styles.exampleImageContainer}>
            <div
              className={styles.exampleImage}
              onClick={() =>
                setImageUrl(
                  'https://i.ibb.co/nrtn5tC/Hill-Grant-99-MEDR8400-crop-north.jpg'
                )
              }
            >
              Grant Hill
            </div>
            <div
              className={styles.exampleImage}
              onClick={() =>
                setImageUrl('https://i.ibb.co/yVs3pTz/colorado.jpg')
              }
            >
              Colorado
            </div>
            <div
              className={styles.exampleImage}
              onClick={() =>
                setImageUrl('https://i.ibb.co/8zTWBc9/zion2.png')
              }
            >
              Zion
            </div>
          </div>
          <When condition={canvasImage}>
            <MemeCanvas canvasImage={canvasImage} />
          </When>
        </section>
      </div>
    </div>
  );
}
