import Image from "next/image"
import Link from "next/link"

type HeaderLinks = {
    prevPageName?: string
    prevPageLink: string
    nextPageName?: string
    nextPageLink: string
}
export const Header = ({ prevPageName, prevPageLink, nextPageName, nextPageLink }: HeaderLinks) => {
    return (
        <header className="w-full bg-mission-blue py-8">
            <div className="container flex justify-between items-center">
                <div className="w-28">
                    <Link href={prevPageLink}>{prevPageName}</Link>
                </div>
                <Image
                    src='/logo-white-shop.svg'
                    alt="Mission Shop"
                    width={50}
                    height={56}
                />
                <div className="w-28 flex justify-end">
                    <Link href={nextPageLink}>{nextPageName}</Link>
                </div>
            </div>
        </header>
    )
}