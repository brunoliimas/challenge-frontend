'use client'
import React, { useState } from 'react';
import { Button } from '../UI/button';


type InputProps = {
    label: string;
    id: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, id, type, value, placeholder, onChange }: InputProps) => {
    return (
        <div className='flex flex-col mb-6'>
            <label htmlFor={id} className='mb-2'>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                className='px-2 py-1 rounded-md text-black'
                onChange={onChange}
            />
        </div>
    );
}



export default function Cadastrar() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');

    const handleAdicionarProduto = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Clicou");
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
                    <Button nav={false} onClick={handleAdicionarProduto} name='Adicionar Produto' link='/' />
                </div>
            </form>
        </div>
    );
}



