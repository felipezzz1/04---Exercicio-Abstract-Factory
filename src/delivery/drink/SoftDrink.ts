import Idrink from "./interfaces/IDrink";

export default class SoftDrink implements Idrink{
    startDelivery(): void {
        this.getItem();
        console.log("Refrigerante : bebida a caminho");
    }
    getItem(): void {
        console.log("Refrigerante: bebida sendo preparada");
    }

}