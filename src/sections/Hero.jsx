import React, {useState} from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons/index";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row  flex-col justify-center min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start item-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <br />
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="shoeCollection"
          className="w-[610px] h-[500px] object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgUrl={shoe} changeBigShoe={(shoe) => {setBigShoe(shoe)}} bigShoeImg={bigShoe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
