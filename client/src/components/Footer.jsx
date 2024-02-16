import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const Footers = () => {
  return (
    <div className="mt-20">
      <Footer container className=" border border-t-8 border-purple-500">
        <div className="w-full max-w-7xl mx-auto">

          <div className="">
            <Link to="/" className=" self-border text-lg sm:text-xl whitespace-nowrap font-semibold  dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-600  via-purple-700 to-pink-700  rounded-lg text-white">
                NEWS
              </span>
              portal
            </Link>
          </div>
          <div className="grid w-full justify-center sm:flex  md:grid-cols-1">
            <div className="grid  grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" className="mt-3" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer" className="text-base">
                    Projects
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer" className="text-base">
                    Blogs
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" className="mt-3" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer" className="text-base">
                    Website
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer" className="text-base">
                    Github
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="LEGAL" className="mt-3" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer" className="text-base">
                    Private policy
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer" className="text-base">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer.Divider />
        </div>
          <div>
            <Footer.Copyright href="#" by="Programmer" year={new Date().getFullYear()} />
            <div className=" flex gap-6 sm:mt-2 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
      </Footer>
    </div>
  )
}

export default Footers
