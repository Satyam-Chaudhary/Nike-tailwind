import React from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections/index";

import Nav from "./Components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-l padding-b"><Hero/></section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding-x py-10"><Services/></section>
      <section className="padding"><SpecialOffer/></section>
      <section className="padding bg-pale-blue"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 p-16 w-full"><Subscribe/></section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer/>
      </section>
    </main>
  );
};

export default App;
