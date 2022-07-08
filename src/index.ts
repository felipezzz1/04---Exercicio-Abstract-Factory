import Client from "./delivery/clients/Client";
import Company from "./delivery/const/Company";
import AiqFomeDelivery from "./delivery/factories/AiqFomeDelivery";
import IFoodDelivery from "./delivery/factories/IFoodDelivery";
import IDeliveryFactory from "./delivery/factories/interfaces/IDeliveryFactory";

const currentCompany = Company.AIQFOME;
let factory : IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME:
        factory = new AiqFomeDelivery();
        break;
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    default:
        console.error("Companhia indefinida");
}

const cliente = new Client(factory!, "AMBOS");
cliente.startDelivery();