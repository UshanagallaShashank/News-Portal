
export default function Signin() {
  return (
    <div className="flex items-center justify-center  mt-6">
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-6 md:p-3 bg-white rounded-lg shadow "
        aria-label="signin-form"
      >
        <h2 className="text-3xl md:text-md font-bold text-center">Sign In Form</h2>
        <div className="flex flex-col items-start mb-4 md:mb-5 gap-y-2">
          <label htmlFor="email" className="text-sm md:text-md font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 md:p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="flex flex-col items-start mb-4 md:mb-5 gap-y-2">
          <label
            htmlFor="password"
            className="text-sm md:text-md font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-3 md:p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-end mb-4 md:mb-5 text-slate-400">
          <p>Already have an account?</p>
          <a href="/signup" className="text-blue-500 underline">
            SignUp
          </a>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-6 md:px-8 py-3 md:py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px] md:h-[60px]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
