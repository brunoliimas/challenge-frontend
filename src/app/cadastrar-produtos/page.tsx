"use client"
import { Header } from "@/components/UI/header";
import Cadastrar from "@/components/cadastrar";
import { Produto } from "@/types/product.type";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CadastrarProdutos() {
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const produtosString = localStorage.getItem("listaProdutos");
        if (produtosString) {
            const produtos: Produto[] = JSON.parse(produtosString);
            setListaProdutos(produtos);
        }
    }, []);

    const handleAddProduto = (): void => {
        if (nomeProduto.trim() === "" || precoProduto.trim() === "") {
            toast.warn("Por favor, preencha todos os campos antes de adicionar um produto.");
            setNomeProduto("");
            setPrecoProduto("");
            return;
        }

        const novoProduto = {
            nome: nomeProduto,
            preco: parseFloat(precoProduto),
        };

        const novaListaProdutos = [...listaProdutos, novoProduto];
        localStorage.setItem("listaProdutos", JSON.stringify(novaListaProdutos));

        setListaProdutos(novaListaProdutos);
        toast.success("Produto cadastrado com sucesso!");
        setNomeProduto("");
        setPrecoProduto("");
    };

    return (
        <>
            <Header
                prevPageName="Início"
                prevPageLink="/"
                nextPageName="Produtos"
                nextPageLink="listar-produtos"
            />
            <Cadastrar
                onAddProduto={handleAddProduto}
                nomeProduto={nomeProduto}
                precoProduto={precoProduto}
                setNomeProduto={setNomeProduto}
                setPrecoProduto={setPrecoProduto}
            />
        </>
    );
}
