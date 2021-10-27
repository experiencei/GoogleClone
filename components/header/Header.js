import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null)

    return (
        <header>
            <Image
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width={120}
                height={40}
                onClick={() => router.push("/")}
                className="cursor-pointer"
            />
            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input
                    className="flex-grow w-full focus:outline-none"
                    ref={searchInputRef}
                    type="text"
                />
                <XIcon className="h-7 text-gray-500 cursor-pointer"/>
            </form>
        </header>
    )
}

export default Header
