import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ActiveAuctions = ({ bidItems, favoriteItems, addToFavorites }) => {
  
  const isInFavorites = (itemId) => {
    return favoriteItems.some(item => item.id === itemId);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>

          <tbody>
            {bidItems.map(item => (
              <tr key={item.id}>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                    </div>
                  </div>
                </td>

                <td>${item.currentBidPrice.toLocaleString()}</td>
                <td>{item.timeLeft}</td>
                <td>

                  <button
                    className={`btn btn-ghost btn-circle ${isInFavorites(item.id) ? 'text-red-500 cursor-not-allowed' : 'text-gray-400 hover:text-red-500'}`}
                    onClick={() => !isInFavorites(item.id) && addToFavorites(item)}
                    disabled={isInFavorites(item.id)}
                  >
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveAuctions;