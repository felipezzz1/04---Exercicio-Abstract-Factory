import Ifood from "./interfaces/IFood";

export default class Hamburguer implements Ifood{
    startDelivery(): void {
        this.getItem();
        console.log("Hamburguer : comida a caminho");
    }
    getItem(): void {
        console.log("Hamburguer : comida retirada");
    }

}