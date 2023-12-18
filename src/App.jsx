import {
  CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality
} from "./sections";
import Nav from "./components/Nav";

import { useOnLoadImages } from "./hooks/useOnLoadImages";

import { useRef } from "react";
import Loader from "./components/Loader";


const App = () => {

  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  return (
    <main className="relative overflow-hidden" ref={wrapperRef}>
      {!imagesLoaded && <Loader />}
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}


export default App;