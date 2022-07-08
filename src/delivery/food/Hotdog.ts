import Ifood from "./interfaces/IFood";

export default class Hotdog implements Ifood{
    startDelivery(): void {
        this.getItem();
        console.log("Cachorro quente : comida a caminho");
    }
    getItem(): void {
        console.log("Cachorro quente: comida sendo preparada");
    }

}