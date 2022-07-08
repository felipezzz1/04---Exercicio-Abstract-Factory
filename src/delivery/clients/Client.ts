import DeliveryType from "../const/DeliveryType";
import Idrink from "../drink/interfaces/IDrink";
import IFoodDelivery from "../factories/IFoodDelivery";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import Ifood from "../food/interfaces/IFood";

export default class Client{
    private food : Ifood;
    private drink : Idrink;

    constructor(factory : IDeliveryFactory, type : string){
        if(type === DeliveryType.COMIDA){
            this.food = factory.createDeliveryFood();
        }else if(type === DeliveryType.BEBIDA){
            this.drink = factory.createDeliveryDrink();
        }else if(type === DeliveryType.AMBOS){
            this.drink = factory.createDeliveryDrink();
            this.food = factory.createDeliveryFood();
        }else{
            console.error("Tipo de comida indefinido");
        }
    }

    startDelivery() : void{
        if(this.drink){
            this.drink.startDelivery();
        }
        if(this.drink){
            this.food.startDelivery();
        }
    }
}