import { Link, NavLink } from "react-router-dom";

const BRAND_NAME = "PREQIN";

const AppHeader = () => {
    const navLinks = [
      { id: 1, name: "Home", route: "/" },
      { id: 2, name: "Investors", route: "/investors" },
      { id: 3, name: "Preqin Pro", route: "/preqin-pro" },
      { id: 4, name: "Insights+", route: "/insights" },
    ];
  
    return (
        <>
            <nav className="bg-[#1B0757] text-[#F9F8F7] top-0 left-0 right-0 p-4">
                <div key="1" className="container flex mx-auto px-2 justify-between">
                <div key="2">
                    <Link to="/">
                        <h1 className="uppercase text-3xl font-bold tracking-wider">{BRAND_NAME}</h1>
                    </Link>
                </div>

                <div key="3">
                    <ul className="flex space-x-4 text-lg">
                        {navLinks.map(({id, route, name}) => (
                            <li key={id}>
                                <NavLink key={id} to={route} className="text-white hover:bg-[#D10077]">
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
  };

  export default AppHeader;