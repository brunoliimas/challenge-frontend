'use client'
import { useEffect, useState } from 'react';
import { Produto } from '../produtos';
import { Button } from '../UI/button';
import { AiFillDelete } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';

export default function Carrinho() {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    useEffect(() => {
        const carregarCarrinho = () => {
            const carrinhoLocalStorage = localStorage.getItem('carrinho');
            const carrinhoInicial = carrinhoLocalStorage ? JSON.parse(carrinhoLocalStorage) : [];
            setCarrinho(carrinhoInicial);
        };

        carregarCarrinho();
    }, []);

    const handleDeleteFromCart = (index: number) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);

        setCarrinho(novoCarrinho);

        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    };

    return (
        <div className='container h-screen flex flex-col items-center py-10'>
            <h1 className='text-3xl'>Carrinho</h1>
            <div className="w-full max-w-2xl mt-10 p-6 bg-mission-blue rounded-xl shadow-xl">
                <table className="table-auto border border-black w-full text-center bg-white text-black">
                    <thead>
                        <tr className="border border-black">
                            <th className="py-2">Nome</th>
                            <th className="py-2">Preço</th>
                            <th className="py-2">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                    {carrinho.map((produto: Produto, index: number) => (
                            <tr className="border border-black" key={index}>
                                <td className="py-2">{produto.nome}</td>
                                <td className="py-2">R$ {produto.preco.toFixed(2)}</td>
                                <td className="py-2">
                                    <Button
                                        className='p-3 text-white bg-red-500 mr-4'
                                        icon={AiFillDelete}
                                        nav={false}
                                        onClick={() => handleDeleteFromCart(index)}
                                        link=""
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}