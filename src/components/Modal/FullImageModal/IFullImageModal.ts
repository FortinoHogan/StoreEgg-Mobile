import {IProduct} from '../../../interfaces/IProduct';

export interface IFullImageModal {
  visible: boolean;
  product: IProduct;
  onClose: () => void;
}
