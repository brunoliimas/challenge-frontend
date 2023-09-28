
import { Header } from '@/components/UI/header';
import Carrinho from '@/components/carrinho';


export default function Comprar () {

    const handleComprar = () => {
        
    };

    return (
        <>
            <Header
                prevPageName='Produtos'
                prevPageLink='listar-produtos'
                // nextPageName='Início'
                nextPageLink='/'
            />
            <Carrinho />
        </>
    );
};
