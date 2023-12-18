import { ImageExample } from './views/MemeGenerator/types';

export const IMAGE_REGEX =
  /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg|webp))/i;

export const IMAGE_ROTATE_MARGIN = 90;
export const IMAGE_SCALE_MARGIN = 0.1;

export const COLOR_PICKER_COLORS = [
  '#e31c1c',
  '#e3801c',
  '#e3e31c',
  '#80e31c',
  '#1cb1e3',
  '#801ce3',
  '#e31ce3',
  '#FFF',
];

export const IMAGE_EXAMPLES: ImageExample[] = [
  {
    url: 'https://i.ibb.co/nrtn5tC/Hill-Grant-99-MEDR8400-crop-north.jpg',
    title: 'Grant Hill',
  },
  {
    url: 'https://i.ibb.co/yVs3pTz/colorado.jpg',
    title: 'Colorado',
  },
  {
    url: 'https://i.ibb.co/x5tMRvh/zion.jpg',
    title: 'Zion',
  },
  {
    url: 'https://i.ibb.co/2gxxfsg/skol.jpg',
    title: 'Vikings',
  },
];
