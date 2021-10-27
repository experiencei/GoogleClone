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
            <form>
                <input
                    ref={searchInputRef}
                    type="text"
                />
            </form>
        </header>
    )
}

export default Header
