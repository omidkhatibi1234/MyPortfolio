import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div className=" fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;

{
  /* <hr className="border-gray-500 w-full" />
<div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center">
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
</div> */
}
