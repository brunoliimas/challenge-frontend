"use client"
import { Header } from "@/components/UI/header";
import Produtos from "@/components/produtos";
import { useEffect, useState } from "react";

interface Produto {
    nome: string;
    preco: number;
}

export default function ListaProdutos() {
    const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);

    const loadListaProdutos = () => {
        const listaProdutosLocalStorage = localStorage.getItem("listaProdutos");
        if (listaProdutosLocalStorage) {
            setListaProdutos(JSON.parse(listaProdutosLocalStorage));
        }
    };

    useEffect(() => {
        loadListaProdutos();
    }, []);

    return (
        <div>
            <Header
                prevPageName="Cadastrar"
                prevPageLink="cadastrar-produtos"
                nextPageName="Carrinho"
                nextPageLink="comprar-produtos"
            />
            {listaProdutos.length === 0 ? (
                <div className="flex items-center justify-center mt-10">
                    <h3 className="text-2xl font-semibold">Sem produtos na lista</h3>
                </div>
            ) : (
                <Produtos produtos={listaProdutos} setProdutos={setListaProdutos} />
            )}
        </div>
    );
}
