import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react"
export default function Signup() {
  return (
    <div className="min-h-screen  items-center mt-20 ">
      <div className=" flex p-3 max-w-3xl  mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="self-border font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 rounded-lg text-white">
              NEWS
            </span>
            portal
          </Link>
          <p className="text-sm mt-5">
             Sign-up to News-portal  via  email and password or  Google🚀
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id='username' />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput type="email" placeholder="email" id='email' />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput type="password" placeholder="password" id='username' />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              SignUp
            </Button>
          </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account</span>
          <Link  to= "/signin"className="text-blue-700">Sign-in</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
