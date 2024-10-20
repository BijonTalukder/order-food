import React from 'react';
import { useSelector } from 'react-redux';
import { useCreateCartMutation } from '../../../redux/API/cart/cartsApi';
import { useParams } from 'react-router-dom';
interface ICartItemProps {
  product: {
    name: string;
  };
  price: number;
  quantity: number;
}
// IProduct interface representing the product (simplified for frontend)
interface IProduct {
  _id: string;
  name: string;
  price: number;
  // Add other relevant fields like imageUrl, description, etc.
}

export interface ICartItem {
  product: IProduct; // The actual product details
  quantity: number;  // Quantity of the product in the cart
  price: number;     // Price per item (could also be product.price)
  selectedOptions: string[]; // Options selected for the product (e.g., size, color)
  specialInstructions: string; // Any special instructions for the order
}

// Type definition for the final cart data
interface ICartData {
  storeId: string;
  userId: string;
  items: ICartItem[];
  subTotal: number;
  total: number;
  deliveryFee: number;
}
const Cart = () => {
  const { id } = useParams();
  const cartItems  = useSelector(state=>state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [handleCart] = useCreateCartMutation()


  const handleCheckout=async()=>{

    try {
      const user = JSON.parse(localStorage.getItem('users') || '{}'); // Get user data from localStorage

      if (!user?._id) {
        throw new Error('User is not logged in.');
      }

      const finalData: ICartData = {
        storeId: id as string, 
        userId: user._id, 
        items: cartItems, 
        subTotal: totalAmount, 
        total: totalAmount + 5, 
        deliveryFee: 5,
      };

      // Send the cart data to the API
      await handleCart(finalData).unwrap();

      alert('Cart successfully submitted!');
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert(`Error: ${error.message}`);
    }

}
  return (
    <div className="max-w-lg mx-auto h-[450px] overflow-auto border rounded-lg shadow-lg bg-white p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Favourite Food</h1>
      <div className="mb-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-grow mx-4">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-between font-bold text-xl mt-4">
        <span>Total:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <button onClick={handleCheckout} className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
