import { IProduct } from "../../../interfaces/IProduct";

export interface ISuccessModal {
    visible: boolean;
    onClose: () => void;
    product: IProduct;
    type: string;
}