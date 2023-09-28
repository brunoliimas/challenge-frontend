import { AiFillDelete } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { Button } from "../UI/button";
import { Produto } from "@/types/product.type";

export interface ListaProdutosProps {
    produtos: Produto[];
    onAddCart(prod: Produto): void;
    onDeleteProduct(index: number): void;
}

export default function Listar({ produtos, onAddCart, onDeleteProduct }: ListaProdutosProps) {

    const deleteProduct = (index: number) => {
        onDeleteProduct(index);
        toast.error("Produto deletado!");
    };

    const addToCart = (produto: Produto): void => {
        onAddCart(produto);
        toast.success("Produto adicionado ao carrinho com sucesso!");
    };

    return (
        <div className="container h-screen flex flex-col items-center py-10">
            <h1 className="text-3xl">Lista de produtos</h1>
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
                        {produtos.map((produto, index) => (
                            <tr className="border border-black" key={index}>
                                <td className="py-2">{produto.nome}</td>
                                <td className="py-2">R$ {produto.preco.toFixed(2)}</td>
                                <td className="py-2">
                                    <Button
                                        className="p-3 text-white bg-red-500 mr-4"
                                        icon={AiFillDelete}
                                        nav={false}
                                        onClick={() => deleteProduct(index)}
                                        link=""
                                    />
                                    <Button
                                        className="p-3 text-white bg-green-600"
                                        icon={BsCartFill}
                                        nav={false}
                                        onClick={() => addToCart(produto)}
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
