import { IProduct } from "../../../interfaces/IProduct";

export interface IConfirmationModal {
    visible: boolean;
    onClose: () => void;
    product: IProduct;
    type: string;
}