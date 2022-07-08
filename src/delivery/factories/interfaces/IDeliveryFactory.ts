import IFood from "../../food/interfaces/IFood";
import IDrink from "../../drink/interfaces/IDrink";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}