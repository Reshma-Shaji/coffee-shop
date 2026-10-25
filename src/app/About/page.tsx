import Footer from "../components/Footer";
import About from "./(section)/about";
import Experience from "./(section)/experience";
import Introduce from "./(section)/intro";

export default function Home() {
  return (
    <main className='relative flex flex-col w-full min-h-screen overflow-x-clip'>
      <div className='relative flex flex-col w-full'>
        <Introduce/>
       <About/>
       <Experience/>
       <Footer/>
      </div>
    </main>
  );
}