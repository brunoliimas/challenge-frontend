'use client'
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from '../UI/button';
import { Produto } from '../produtos';
import { useRouter } from 'next/navigation';


export default function Carrinho() {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);
    const router = useRouter();


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

    const handleCheckout = () => {

        setCarrinho([]);
        localStorage.removeItem('carrinho');

        alert('Compra finalizada com sucesso!');
        router.push('/');
    };



    return (
        <div className='container h-screen flex flex-col items-center py-10'>
            <h1 className='text-3xl'>Carrinho</h1>
            {carrinho.length === 0 ? (
                <div className='flex items-center justify-center mt-10'>
                    <h3 className='text-2xl font-semibold'>Sem produtos no carrinho</h3>
                </div>
            ) : (
                <div className="w-full max-w-2xl mt-10 p-6 bg-mission-blue rounded-xl shadow-xl flex flex-col items-center">
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
                    <div className='mt-10'>
                        <Button
                            name='Finalizar compra'
                            nav={false}
                            link=''
                            className='bg-green-600 py-3 px-6'
                            onClick={handleCheckout}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}