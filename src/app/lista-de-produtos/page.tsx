// components/ListaProdutos.tsx
'use client'
import { Header } from '@/components/UI/header';
import { useEffect, useState } from 'react';
import Produtos from '@/components/produtos';


interface Produto {
    nome: string;
    preco: number;
}


export default function ListaProdutos() {
    const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);

    const carregarListaProdutos = () => {
        const listaProdutosLocalStorage = localStorage.getItem('listaProdutos');
        if (listaProdutosLocalStorage) {
            setListaProdutos(JSON.parse(listaProdutosLocalStorage));
        }
    };

    // Use useEffect para carregar a lista de produtos quando a página for carregada
    useEffect(() => {
        carregarListaProdutos();
    }, []);
    return (
        <div>
            <Header
                prevPageName='Cadastrar'
                prevPageLink='cadastrar-produtos'
                nextPageName='Carrinho'
                nextPageLink='carrinho'
            />
            <Produtos produtos={listaProdutos} />
        </div>
    );
};

