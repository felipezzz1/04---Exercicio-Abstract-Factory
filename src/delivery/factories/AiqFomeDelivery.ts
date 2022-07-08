import Beer from "../drink/Beer";
import Idrink from "../drink/interfaces/IDrink";
import Hamburguer from "../food/Hamburguer";
import Ifood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): Idrink {
        return new Beer();
    }
    createDeliveryFood(): Ifood {
        return new Hamburguer();
    }

}