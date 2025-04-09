import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
      <div
      className="relative z-50 w-full h-[550px] bg-cover bg-center"
      style={{ backgroundImage: `url('/images/Banner-min.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-5 text-white">
        <h1 className="text-5xl font-bold  ">
          Bid on Unique Items from <br/> Around the World
        </h1>
        <p className="mt-4 text-xl font-light max-w-2xl opacity-80">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
        </p>
        <button className="mt-6 btn w-fit font-semibold rounded-2xl bg-white hover:text-white hover:bg-gray-700 text-black border-none">
          Explore Auctions
        </button>
      </div>
    </div>

    );
  }
}

export default Banner;