const Footer = () => {
  return (
    <footer className="bg-white mt-12 py-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-xl font-semibold">
            <span className="text-blue-800">Auction</span>
            <span className="text-yellow-500">Gallery</span>
          </div>
          
          <div className="mb-4 text-gray-700 font-semibold ">
            <p>Bid.  Win.  Own.</p>
          </div>
          
          <div className="flex gap-7 mb-6">
            <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600">Auctions</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Categories</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600">How to works</a>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>© 2025 AuctionHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;