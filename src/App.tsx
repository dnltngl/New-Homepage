import "./App.css";
import Nav from "./components/Nav";
import FeatureBanner from "./components/FeatureBanner";
import HighlightedNews from "./components/HighlightedNews";
import FeaturedPosts from "./components/FeaturedPosts";
import SlidingNav from "./components/SlidingNav";
import { NavProvider } from "./components/NavContext";



function App() {
  return (
    <div className="container mx-auto sm:max-w-screen-xl sm:p-5">
      <NavProvider>
        <Nav />
        <SlidingNav />
      </NavProvider>

      <main>
        <section className="lg:flex gap-5">
          <FeatureBanner />
          <HighlightedNews />
        </section>
        <FeaturedPosts />
      </main>
    </div>
  );
}

export default App;
