import Hero from "./component/Hero";
import Intro from "./component/Intro";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Intro />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
