'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '../UI/button';
import { Input } from '../UI/input';




interface Produto {
    nome: string;
    preco: number;
}

export default function Cadastrar() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');
    const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);


    useEffect(() => {
        const produtosString = localStorage.getItem('listaProdutos');
        if (produtosString) {
            const produtos: Produto[] = JSON.parse(produtosString);
            setListaProdutos(produtos);
        }
    }, []);

    const handleAdicionarProduto = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (nomeProduto.trim() === '' || precoProduto.trim() === '') {
            alert('Por favor, preencha todos os campos antes de adicionar um produto.');
            setNomeProduto('');
            setPrecoProduto('');
            return;
        }

        const novoProduto = {
            nome: nomeProduto,
            preco: parseFloat(precoProduto),
        };

        const novaListaProdutos = [...listaProdutos, novoProduto];
        localStorage.setItem('listaProdutos', JSON.stringify(novaListaProdutos));

        setListaProdutos(novaListaProdutos);

        setNomeProduto('');
        setPrecoProduto('');
    };

    return (
        <div className='container h-screen flex flex-col items-center py-10'>
            <h1 className='text-3xl'>Cadastrar produtos</h1>
            <form className='w-full max-w-2xl mt-10 p-10 bg-mission-blue rounded-xl shadow-xl'>
                <Input
                    label='Nome do Produto'
                    type='text'
                    id='nomeProduto'
                    value={nomeProduto}
                    placeholder='Ex: Batata'
                    onChange={(e) => setNomeProduto(e.target.value)}
                />
                <Input
                    label='Preço'
                    type='number'
                    id='precoProduto'
                    value={precoProduto}
                    placeholder='Ex: 2.50'
                    onChange={(e) => setPrecoProduto(e.target.value)}
                />
                <div className='w-full mt-10 flex justify-end'>
                    <Button
                        className='py-3 px-6'
                        nav={false}
                        onClick={handleAdicionarProduto}
                        name='Adicionar Produto'
                        link='/'
                    />
                </div>
            </form>
        </div>
    );
}



