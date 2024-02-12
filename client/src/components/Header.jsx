import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon } from "react-icons/fa6";
export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Navbar className="border-b-2 text-sm sm:text-xl">
      <Link to="/" className=" self-border whitespace-nowrap font-semibold  dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-600  via-purple-700 to-pink-700  rounded-lg text-white">
          NEWS
        </span>
        portal
      </Link>

      {/* form for textinput */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className=" w-12 h-10  lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10  lg:hidden" color="gray" pill >
          <FaMoon />

        </Button>
        <Link to="/signin">
          <Button outline gradientDuoTone="purpleToBlue" >
            Sign-In
          </Button>
        </Link>
        <NavbarToggle />
      </div>

      <Navbar.Collapse >
        <Navbar.Link active={path === '/'} as={"div"} >
          <Link to="/">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <div>
        <Navbar.Link active={path === '/projects'} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
        </div>
        
      </Navbar.Collapse>

    </Navbar>
  )
}
