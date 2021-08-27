import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="w-full flex items-center justify-between flex-wrap bg-blue-500">
            <div className="w-full flex items-center justify-center text-white lg:justify-start lg:w-auto">
                <div className="hidden rounded-full bg-white lg:block lg:w-20 m-4">
                    <img
                        className="object-contain"
                        src={`${process.env.PUBLIC_URL}/logo192-margin.png`}
                        alt="Logo"
                    />
                </div>
                <span className="font-semibold text-2xl">Heretere</span>
            </div>
            <div className="w-full flex justify-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavLink
                        to="/home"
                        className="block lg:inline-block text-white hover:text-white m-4"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/home"
                        className="block lg:inline-block text-white hover:text-white m-4"
                    >
                        Home
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
