import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // تابعی برای بستن منو هنگام اسکرول
  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // ثبت رویداد اسکرول
    window.addEventListener("scroll", handleScroll);

    // تمیز کردن رویداد هنگام خروج از کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text transition-all text-transparent opacity-80 text-3xl font-semibold duration-300 hover:opacity-100"
      >
        Omid Khatibi
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Home
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Tech
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Contact
        </a>
      </ul>
      <ul className="hidden md:flex gap-10">
        <a
          href="https://t.me/omidkh_pr"
          target="_blank"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
        >
          <BsTelegram />
        </a>
        <a
          href="https://www.linkedin.com/in/omid-khatibiofficialy"
          target="_blank"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/omidkhatibi__"
          target="_blank"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/omidkhatibi1234"
          target="_blank"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
        >
          <BsGithub />
        </a>
      </ul>
      {isOpen ? (
        <BiX onClick={menuOpen} className="block md:hidden text-4xl" />
      ) : (
        <BiMenu onClick={menuOpen} className="block md:hidden text-4xl" />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Home
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Tech
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              Contact
            </a>
          </ul>
          <ul>
            <ul className="flex flex-wrap gap-5">
              <a
                href="https://t.me/omidkh_pr"
                target="_blank"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
              >
                <BsTelegram />
              </a>
              <a
                href="https://www.linkedin.com/in/omid-khatibiofficialy"
                target="_blank"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.instagram.com/omidkhatibi__"
                target="_blank"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100"
              >
                <BsInstagram />
              </a>
              <a
                href="https://github.com/omidkhatibi1234"
                target="_blank"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
              >
                <BsGithub />
              </a>
            </ul>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
