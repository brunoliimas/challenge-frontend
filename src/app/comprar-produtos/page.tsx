"use client"
import { Header } from "@/components/UI/header";
import Carrinho from "@/components/comprar";
import { Produto } from "@/types/product.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ComprarProdutos() {
    const router = useRouter();
    const [carrinho, setCarrinho] = useState<Produto[]>([]);
    let total = '';

    const LoadListaCarrinho = () => {
        useEffect(() => {
            const carrinhoLocalStorage = localStorage.getItem("carrinho");
            const carrinhoInicial = carrinhoLocalStorage ? JSON.parse(carrinhoLocalStorage) : [];
            setCarrinho(carrinhoInicial);
        }, []);
    };

    const calcularValorTotal = () => {
        let localTotal = 0;
        carrinho.forEach((produto) => {
            localTotal += produto.preco;
        });
        total = localTotal.toFixed(2);
    };

    const deleteCarrinhoItem = (index: number) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);

        toast.error("Produto deletado do carrinho!");

        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    };

    const checkout = () => {
        toast.success(`Compra finalizada com sucesso! Valor total da compra de R$ ${total}`);
        setCarrinho([]);
        localStorage.removeItem("carrinho");

        setTimeout(() => {
            router.push("/");
        }, 2000);
    };

    LoadListaCarrinho();
    calcularValorTotal();

    return (
        <>
            <Header
                prevPageName="Produtos"
                prevPageLink="listar-produtos"
                nextPageLink="/"
            />
            <Carrinho
                checkout={checkout}
                deleteItem={deleteCarrinhoItem}
                carrinho={carrinho}
                calculateTotal={total}
            />
        </>
    );
}
