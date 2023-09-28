import { Button } from "../UI/button";

interface Produto {
    nome: string;
    preco: number;
}

interface ListaProdutosProps {
    produtos: Produto[];
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export default function Produtos({ produtos, setProdutos }: ListaProdutosProps) {
    const handleDeleteProduto = (index: number) => {
        const produtosAtualizados = [...produtos];
        produtosAtualizados.splice(index, 1); // Remove o produto da lista
        setProdutos(produtosAtualizados); // Atualiza o estado

        localStorage.setItem('listaProdutos', JSON.stringify(produtosAtualizados));
    };
    return (
        <div className='container h-screen flex flex-col items-center py-10'>
            <h1 className='text-3xl'>Lista de produtos</h1>
            <div className="w-full max-w-2xl mt-10 p-6 bg-mission-blue rounded-xl shadow-xl">
                <table className="table-auto border border-black w-full text-center bg-white text-black">
                    <thead>
                        <tr className="border border-black">
                            <th className="py-2">Nome</th>
                            <th className="py-2">Preço</th>
                            <th className="py-2">Ação</th>
                        </tr>
                    </thead>
                    <tbody >
                        {produtos.map((produto, index) => (
                            <tr className="border border-black" key={index}>
                                <td className="py-2">{produto.nome}</td>
                                <td className="py-2">R$ {produto.preco.toFixed(2)}</td>
                                <td className="py-2">
                                    <Button nav={false} name="Apagar" onClick={() => handleDeleteProduto(index)} link=""/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

