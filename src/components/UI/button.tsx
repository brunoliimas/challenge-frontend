import Link from "next/link"
import { IconType } from "react-icons"

type ButtonProps = {
    nav: boolean
    link: string
    name?: string
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    icon?: IconType;
}

export const Button = ({icon: Icon, nav, onClick, link, name, className }: ButtonProps) => {
    const renderIcon = Icon ? <Icon size={24} /> : null;
    return (
        <button onClick={nav ? undefined : onClick} className={`text-center shadow-lg rounded-full font-semibold ${className}`}>
            {nav ?
                <Link href={link} >
                    {name}
                </Link>
                :
                <span>
                    {renderIcon}
                    {name}
                </span>
            }

        </button>
    )
}