import Footer from "../components/Footer";
import Contact from "./(section)/contact";


export default function Home() {
  return (
    <main className='relative flex flex-col w-full min-h-screen overflow-x-clip'>
      <div className='relative flex flex-col w-full'>
       <Contact/>
       <Footer/>
      </div>
    </main>
  );
}