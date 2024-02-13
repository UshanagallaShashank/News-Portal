import { Link ,useNavigate} from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";


export default function Signup() {
  const [FormData, setFormData] = useState({});
  const [errormessage,setErrorMessage]=useState(null);
  const[Loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!FormData.username||!FormData.email ||!FormData.password){
      return setErrorMessage("Please fill out  all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      if(data.success===false){
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate("/signin")
      }
    } catch (error) {
     setErrorMessage(error.message);
     setLoading(false);
    }
  };

  return (
    <div className="min-h-screen items-center mt-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="self-border font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 rounded-lg text-white">
              NEWS
            </span>
            portal
          </Link>
          <p className="text-sm mt-5">Sign-up to News-portal via email and password or Google🚀</p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" onChange={handleChange} />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput type="email" placeholder="email" id="email" onChange={handleChange} />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput type="password" placeholder="password" id="password" onChange={handleChange} />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={Loading}>
              {
                Loading?
                <>
                <Spinner size='sm'/>
                <span className="pl-3">Loading...</span>
                </>
                :"SignUp"
              }
              
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account</span>
            <Link to="/signin" className="text-blue-700">
              
              Sign-in
            </Link>
          
          </div>
          {
              errormessage&&(
                <Alert className=" mt-5" color='failure'>
                  {errormessage}
                </Alert>
              )
            }
        </div>
      </div>
    </div>
  );
}
