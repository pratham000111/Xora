import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Download from "./Download.jsx";
import Footer from "./Footer.jsx";
import Testimonials from "./Testimonials.jsx";
import Faq from "./Faq.jsx";
import Features from "./Features.jsx";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Pricing from "./Pricing.jsx";
import Home from "./Page.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <SignedOut>
        <div className="flex justify-center -z-1 absolute w-screen text-2xl font-semibold pt-52 h-screen">
          <h1>Please sign in</h1>
        </div>
        <div className="flex justify-center items-center h-screen">
          <SignInButton>
            <button className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <Header />

        <Hero />
        <header>
          <Home />
        </header>
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
        <Download />
        <Footer />
      </SignedIn>
    </main>
  );
};

export default App;
