import React from "react";
import { Button } from "../UI/button";
import { Input } from "../UI/input";

interface CadastrarProdutoProps {
    setPrecoProduto: (value: string) => void;
    precoProduto: string;
    setNomeProduto: (value: string) => void;
    nomeProduto: string;
    onAddProduto: () => void;
} 

export default function Cadastrar({ setPrecoProduto, precoProduto, setNomeProduto, nomeProduto, onAddProduto }: CadastrarProdutoProps) {

    const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        onAddProduto();
    };

    return (
        <div className="container flex flex-col items-center py-10">
            <h1 className="text-3xl">Cadastrar produtos</h1>
            <form className="w-full max-w-2xl mt-10 p-10 bg-mission-blue rounded-xl shadow-xl">
                <Input
                    label="Nome do Produto"
                    type="text"
                    id="nomeProduto"
                    value={nomeProduto}
                    placeholder="Ex: Batata"
                    onChange={(e) => setNomeProduto(e.target.value)}
                />
                <Input
                    label="Preço"
                    type="number"
                    id="precoProduto"
                    value={precoProduto}
                    placeholder="Ex: 2.50"
                    onChange={(e) => setPrecoProduto(e.target.value)}
                />
                <div className="w-full mt-10 flex justify-end">
                    <Button
                        className="py-3 px-6 bg-mission-blue-light"
                        nav={false}
                        onClick={handleAddProduct}
                        name="Adicionar Produto"
                        link=""
                    />
                </div>
            </form>
        </div>
    );
}
