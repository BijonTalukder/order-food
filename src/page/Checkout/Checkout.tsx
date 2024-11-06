import React from 'react';
import { MapPin, Home, Briefcase, Heart, Plus } from 'lucide-react';
import { useGetCartByUserQuery } from '../../redux/API/cart/cartsApi';
import { StorageManagerCustom } from '../../helpers/SessionHelper';


export interface User {
  id?: string;
  name?: string;
  email?: string;
}
const FoodDeliveryOrder = () => {
  const storageManager = new StorageManagerCustom<User>('local');
  const user = storageManager.getItem("user")

  const { data: cartData, isSuccess } = useGetCartByUserQuery(user?.id as string, {
    skip: !user
  })
  console.log(cartData);


  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 min-h-screen">
      {/* Left Column - Delivery Address */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Delivery address</h2>
          <button className="btn btn-ghost btn-sm">View Saved Addresses</button>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="text-primary" />
          <div>
            <p className="font-semibold">BD Water Tech & Engineering আয়োবাদ এক্সপ্রেস রোড</p>
            <p>Chittagong</p>
          </div>
          <button className="btn btn-ghost btn-sm ml-auto">Edit</button>
        </div>

        <input type="text" placeholder="Apartment #" className="input input-bordered w-full mb-2" />
        <textarea placeholder="Note to rider - e.g. building, landmark" className="textarea textarea-bordered w-full mb-4"></textarea>

        <div>
          <p className="mb-2">Add a Label</p>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm"><Home size={16} /> Home</button>
            <button className="btn btn-outline btn-sm"><Briefcase size={16} /> Work</button>
            <button className="btn btn-outline btn-sm"><Heart size={16} /> Partner</button>
            <button className="btn btn-outline btn-sm"><Plus size={16} /> Other</button>
          </div>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Your order from</h2>
        <p className="text-lg mb-4">Ladhidh</p>
        {
          isSuccess && console.log(cartData.data[0].items)
        }


        {isSuccess && cartData?.data && cartData?.data[0].items && (
          cartData.data[0].items.map((item: any, index: number) => (
            <div className="flex justify-between mb-2" key={index}>
              <span>{item.quantity} x {item.name}</span>
              <span>Tk {item.price}</span>
            </div>
          ))
        )}


        <hr className="my-4" />

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Tk 120</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Standard delivery</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Service fee</span>
          <span>Tk 3</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>VAT</span>
          <span>Tk 6</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>Tk 129</span>
        </div>
        <p className="text-sm text-gray-500">(incl. fees and tax)</p>
      </div>
    </div>
  );
};

export default FoodDeliveryOrder;