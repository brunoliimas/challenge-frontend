"use client"
import { Header } from "@/components/UI/header";
import Produtos from "@/components/listar";
import { Produto } from "@/types/product.type";
import { useEffect, useState } from "react";

export default function ListarProdutos() {
    const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);

    const loadListaProdutos = () => {
        const listaProdutosLocalStorage = localStorage.getItem("listaProdutos");
        if (listaProdutosLocalStorage) {
            setListaProdutos(JSON.parse(listaProdutosLocalStorage));
        }
    };

    const handleDeleteProduct = (index: number) => {
        const produtosAtualizados = [...listaProdutos];
        produtosAtualizados.splice(index, 1);
        setListaProdutos(produtosAtualizados);

        localStorage.setItem("listaProdutos", JSON.stringify(produtosAtualizados));
    };

    const addToCart = (produto: Produto) => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
        carrinho.push(produto);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
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
                <Produtos
                    produtos={listaProdutos}
                    onAddCart={addToCart}
                    onDeleteProduct={handleDeleteProduct}
                />
            )}
        </div>
    );
}
