// components/ListaProdutos.tsx
'use client'
import { Header } from '@/components/UI/header';
import Produtos from '@/components/produtos';
import React from 'react';

const ListaProdutos: React.FC = () => {


    return (
        <div>
            <Header
                prevPageName='Cadastrar'
                prevPageLink='cadastrar-produtos'
                nextPageName='Carrinho'
                nextPageLink='carrinho'
            />
            <Produtos/>
        </div>
    );
};

export default ListaProdutos;
