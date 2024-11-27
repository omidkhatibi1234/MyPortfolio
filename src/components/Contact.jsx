const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Want to chat? Send me an Email through this button and I will respond
          whenever I can.
        </p>
        <a
          href="mailto:omidkhatibiofficialy@gmail.com"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
        <hr className="border-gray-500 w-full" />
        <div className="w-full flex justify-around items-center">
          <a
            href="tel:+989150707303"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-10 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600 text-center"
          >
            Call Me : <br /> +98 915 070 7303
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=مشهد"
            target="_blank"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-10 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600 text-center"
          >
            Address : <br /> Khorasan-e Razavi, Mashhad province, Iran
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
