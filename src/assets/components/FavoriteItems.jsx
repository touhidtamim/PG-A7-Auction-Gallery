import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';

const FavoriteItems = ({ favoriteItems, totalBidAmount, removeFromFavorites }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={faHeart} className="text-gray-500 mr-2" />
        <h2 className="text-xl font-bold text-[#0E2954] ">Favorite Items</h2>
        <hr />      
      </div>
      
      {favoriteItems.length === 0 ? (
        <div className="text-center">
          <hr className="pt-6 text-gray-200 w-full"  />
          <p className="text-[#000000] mb-4">No favorites yet</p>
          <p className="text-sm text-gray-500">Click the heart icon on any item <br /> to add it to your favorites</p>
          <hr className="mt-6 text-gray-200 w-full mb-6 "  />
          <div className="flex justify-between items-center opacity-90">
              <span className="font-semibold pl-5">Total bids Amount</span>
              <span className="font-semibold pr-5"> $0000</span>
            </div>
        </div>
      ) : (
        <div className="space-y-4">
          {favoriteItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-10 h-10">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>${item.currentBidPrice.toLocaleString()}</span>
                    <span>•</span>
                    <span>Bids: {item.bidsCount}</span>
                  </div>
                </div>
              </div>
              <button 
                className="btn btn-ghost btn-xs text-gray-400 hover:text-red-500"
                onClick={() => removeFromFavorites(item.id)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
          
          <div className="pt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total bids Amount</span>
              <span className="font-bold">${totalBidAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteItems;