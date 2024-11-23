
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useGetStoreQuery } from '../../redux/API/stores/storeApi';
import { IStores } from '../../constant';
import StoreCart from '../../share/StoreCart/StoreCart';



const Stores = ({data}:any) => {
  console.log(data);
  
  // const {data,isLoading} = useGetStoreQuery(undefined)
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Nearby Kitchens</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data?.map((item:IStores,index:number) => (
         <StoreCart  key={index} data={item}/>
        ))}
      </div>
    </div>
  );
};

// Helper function to render star ratings
// const getStars = (rating:any) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (i <= rating) {
//       stars.push(<FaStar key={i} className="text-yellow-400" />);
//     } else if (i - rating < 1) {
//       stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//     } else {
//       stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//     }
//   }
//   return <div className="flex">{stars}</div>;
// };

export default Stores;
