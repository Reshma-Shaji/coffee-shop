import Amazing from "./(section)/amazing";
import Coffeevideo from "./(section)/coffeevideo";
import NotFound from "./(section)/different";
import Different from "./(section)/different";
import Discover from "./(section)/discover";
import Enjoy from "./(section)/enjoy";
import Hero from "./(section)/hero";
import ReviewSection from "./(section)/review";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (


    
    <main className='relative flex flex-col w-full min-h-screen overflow-x-clip'>
      <div className='relative flex flex-col w-full'>
        <Navbar/>
        <Hero/>
        <Discover/>
       
        <Enjoy/>
        <Coffeevideo/>
        
        <Different/>
        <Amazing/>
        <ReviewSection/>
        <Footer/>
      </div>
    </main>
  );
}
