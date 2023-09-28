import { Button } from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container h-screen flex justify-center items-center">
            <div className="bg-white p-10 md:p-20 rounded-xl shadow-xl flex flex-col items-center justify-center transition-all duration-500">
                <Image
                    src="/logo-shop.svg"
                    alt="Mission Brasil"
                    width={200}
                    height={223}
                    className="drop-shadow-xl"
                />
                <Button nav className="mt-10 py-3 px-6 bg-mission-blue-light" name="Cadastrar Produto" link="cadastrar-produtos"/>
            </div>
        </main>
    );
};
