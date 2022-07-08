import Idrink from "./interfaces/IDrink";

export default class Beer implements Idrink{
    startDelivery(): void {
        this.getItem();
        console.log("Cerveja : bebida a caminho");
    }
    getItem(): void {
        console.log("Cerveja: bebida retirada");
    }

}