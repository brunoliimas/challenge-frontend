import Link from "next/link"

type ButtonProps = {
    nav: boolean
    link: string
    name: string
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ nav, onClick, link, name, className }: ButtonProps) => {
    return (
        <button onClick={nav ? undefined : onClick} className={`text-center bg-mission-blue-light shadow-lg py-3 px-6 rounded-full font-semibold ${className}`}>
            {nav ?
                <Link href={link} >
                    {name}
                </Link>
                :
                <span>
                    {name}
                </span>
            }

        </button>
    )
}