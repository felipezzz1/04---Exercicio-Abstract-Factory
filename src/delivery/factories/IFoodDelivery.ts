import Idrink from "../drink/interfaces/IDrink";
import SoftDrink from "../drink/SoftDrink";
import Hotdog from "../food/Hotdog";
import Ifood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): Idrink {
        return new SoftDrink();
    }
    createDeliveryFood(): Ifood {
        return new Hotdog();
    }
    
}