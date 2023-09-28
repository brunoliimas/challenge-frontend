
import { Header } from "@/components/UI/header";
import Carrinho from "@/components/carrinho";


export default function Comprar () {

    return (
        <>
            <Header
                prevPageName="Produtos"
                prevPageLink="listar-produtos"
                nextPageLink="/"
            />
            <Carrinho />
        </>
    );
};
