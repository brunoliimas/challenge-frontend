
import { Header } from '@/components/UI/header';
import Cadastrar from '@/components/cadastrar';

export default function CadastroProdutos () {
    return (
        <>
            <Header
                prevPageName='Início'
                prevPageLink='/'
                nextPageName='Produtos'
                nextPageLink='listar-produtos' />
            <Cadastrar />
        </>
    );
};
