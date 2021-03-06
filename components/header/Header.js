import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../avatar/Avatar";
import HeaderOptions from "../headerOptions/HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);


    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
        <Image
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width={120}
                height={40}
                onClick={() => router.push("/")}
                className="cursor-pointer"
                alt="Google"
            />
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input
                    className="flex-grow w-full focus:outline-none"
                    ref={searchInputRef}
                    type="text"
                />
                <XIcon 
                className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick={() => searchInputRef.current.value = " "}
                />
                <MicrophoneIcon
                    className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
                />
                <SearchIcon
                    className="h-6 text-blue-500 hidden sm:inline-flex"
                />
                <button hidden type="submit" onClick={search}>Search</button>
            </form>

            <Avatar className="ml-auto" url="https://media-exp1.licdn.com/dms/image/C5603AQGWMnHFBvSNHQ/profile-displayphoto-shrink_200_200/0/1585517035347?e=1640822400&v=beta&t=0pAPShxwq2tNqK5WpzsA16P-1pPMh4OPRCT-ghN_mAU"/>
        </div>
            

            <HeaderOptions/>
        </header>
    )
}

export default Header
