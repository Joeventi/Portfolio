import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            alt="Logo"
            className="mx-2"
            height={33}
            width={50}
            src={logo}
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ryualvano/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/BlvckM1nds"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ryu_alv/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/ryualvano20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar