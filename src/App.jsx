
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import ActiveAuctions from './assets/components/ActiveAuctions';
import FavoriteItems from './assets/components/FavoriteItems';
import Banner from './assets/components/Banner'
import Navbar from './assets/components/Navbar'


function App() {
  const [bidItems, setBidItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [totalBidAmount, setTotalBidAmount] = useState(0);

  useEffect(() => {
    fetch('/data/bidItems.json')
      .then(res => res.json())
      .then(data => setBidItems(data))
      .catch(error => console.error('Error fetching bid items:', error));
  }, []);


  const addToFavorites = (item) => {
    if (!favoriteItems.find(favItem => favItem.id === item.id)) {
      const updatedFavorites = [...favoriteItems, item];
      setFavoriteItems(updatedFavorites);
      
      const newTotal = updatedFavorites.reduce(
        (total, item) => total + item.currentBidPrice, 0
      );
      setTotalBidAmount(newTotal);

      toast.success(`${item.title} added to favorites!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const removeFromFavorites = (itemId) => {
    const updatedFavorites = favoriteItems.filter(item => item.id !== itemId);
    setFavoriteItems(updatedFavorites);
    
    const newTotal = updatedFavorites.reduce(
      (total, item) => total + item.currentBidPrice, 0
    );
    setTotalBidAmount(newTotal);
    
    toast.info("Item removed from favorites", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  

  return (
    <>
      <div>
      <Navbar/>
      <Banner/>
      <div className='bg-slate-100 pt-12'>
      <h2 className="text-2xl font-bold mb-2 pl-16 text-[#0E2954]">Active Auctions</h2>
      <p className="text-gray-600 pl-16">Discover and bid on extraordinary items</p>
      <div className="container mx-auto px-4 py-8 " >
        <div className="flex flex-col lg:flex-row gap-8">
        <div className=" w-2/3 pl-7 ">
        <ActiveAuctions 
              bidItems={bidItems} 
              favoriteItems={favoriteItems}
              addToFavorites={addToFavorites} 
            />
          </div>
          <div className="w-1/3 pr-7">
            <FavoriteItems 
              favoriteItems={favoriteItems} 
              totalBidAmount={totalBidAmount}
              removeFromFavorites={removeFromFavorites}
            />
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
      
      </div>
    </>
  )
}

export default App
