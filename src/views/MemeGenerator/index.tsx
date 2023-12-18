import { useState } from 'react';
import { TextInput } from '../../components/ui/TextInput';
import styles from './styles.module.scss';
import { MemeCanvas } from '../../components/basic/MemeCanvas';
import { Button } from '../../components/ui/Button';
import { When } from 'react-if';
import { IMAGE_EXAMPLES } from '../../constants';

export function MemeGenerator() {
  const [imageUrl, setImageUrl] = useState('');
  const [canvasImage, setCanvasImage] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const loadImage = () => {
    setIsLoading(true);
    const img = new Image();

    img.onload = function () {
      setCanvasImage(imageUrl);
      setIsLoading(false);
    };
    img.onerror = function () {
      setIsLoading(false);
      alert('Could not load image! Please check your image URL.');
    };

    img.src = imageUrl;
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.titleText}>Jeff's Meme Generator</div>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
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
                <Button label='Meme This!' onClick={loadImage} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.exampleImageContainer}>
            {IMAGE_EXAMPLES.map((example, idx: number) => (
              <div
                key={idx}
                className={styles.exampleImage}
                onClick={() => setImageUrl(example.url)}
              >
                {example.title}
              </div>
            ))}
          </div>
          <When condition={canvasImage && isLoading}>
            <div className={styles.loading}>Get ready to meme...</div>
          </When>
          <When condition={canvasImage && !isLoading}>
            <MemeCanvas canvasImage={canvasImage} />
          </When>
        </div>
      </div>
    </div>
  );
}
