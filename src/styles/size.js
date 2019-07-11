
import {
  Platform, Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const aspectRatio = height / width;
export const isPad = aspectRatio <= 1.6;

let ratioText = isPad ? 1.2 : 1;
let ratioImg = isPad ? 1 : 1;

// export function resizeText(size){
//     return size * ratioText;
// }

let sizes = {
  //font size text
  sText9: 9 * ratioText,
  sText8: 8 * ratioText,
  sText10: 10 * ratioText,
  sText11: 11 * ratioText,
  sText12: 12 * ratioText,
  sText13: 13 * ratioText,
  sText14: 14 * ratioText,
  sText15: 15 * ratioText,
  sText16: 16 * ratioText,
  sText17: 17 * ratioText,
  sText18: 18 * ratioText,
  sText19: 19 * ratioText,
  sText20: 20 * ratioText,
  sText22: 22 * ratioText,
  sText24: 24 * ratioText,
  sText26: 26 * ratioText,
  sText27: 27 * ratioText,
  sText30: 30 * ratioText,
  sText32: 32 * ratioText,
  sText36: 36 * ratioText,

  //img size
  nImgSize4: 4 * ratioImg,
  nImgSize5: 5 * ratioImg,
  nImgSize6: 6 * ratioImg,
  nImgSize7: 7 * ratioImg,
  nImgSize8: 8 * ratioImg,
  nImgSize9: 9 * ratioImg,
  nImgSize10: 10 * ratioImg,
  nImgSize11: 11 * ratioImg,
  nImgSize12: 12 * ratioImg,
  nImgSize13: 13 * ratioImg,
  nImgSize14: 14 * ratioImg,
  nImgSize15: 15 * ratioImg,
  nImgSize16: 16 * ratioImg,
  nImgSize17: 17 * ratioImg,
  nImgSize19: 19 * ratioImg,
  nImgSize20: 20 * ratioImg,
  nImgSize21: 21 * ratioImg,
  nImgSize22: 22 * ratioImg,
  nImgSize24: 24 * ratioImg,
  nImgSize25: 25 * ratioImg,
  nImgSize26: 26 * ratioImg,
  nImgSize27: 27 * ratioImg,
  nImgSize28: 28 * ratioImg,
  nImgSize29: 29 * ratioImg,
  nImgSize30: 30 * ratioImg,
  nImgSize31: 31 * ratioImg,
  nImgSize32: 32 * ratioImg,
  nImgSize35: 35 * ratioImg,
  nImgSize38: 38 * ratioImg,
  nImgSize40: 40 * ratioImg,
  nImgSize44: 44 * ratioImg,
  nImgSize50: 50 * ratioImg,
  nImgSize56: 56 * ratioImg,
  nImgSize58: 58 * ratioImg,
  nImgSize60: 60 * ratioImg,
  nImgSize63: 63 * ratioImg,
  nImgSize70: 70 * ratioImg,
  nImgSize80: 80 * ratioImg,
  nImgSize88: 88 * ratioImg,
  nImgSize94: 94 * ratioImg,
  nImgSize116: 116 * ratioImg,
  nImgSize122: 122 * ratioImg,
  nImgSize137: 137 * ratioImg,
  nImgSize187: 187 * ratioImg,
}

export { sizes };
