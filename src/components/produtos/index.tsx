
interface Produto {
    nome: string;
    preco: number;
}

interface ListaProdutosProps {
    produtos: Produto[];
}

export default function Produtos({ produtos }: ListaProdutosProps) {
    return (
        <div className='container h-screen flex flex-col items-center py-10'>
            <h1 className='text-3xl'>Lista de produtos</h1>
            <div className="w-full max-w-2xl mt-10 p-10 bg-mission-blue rounded-xl shadow-xl">
                <ul>
                    {produtos.map((produto, index) => (
                        <li key={index}>
                            {produto.nome} - R$ {produto.preco.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

