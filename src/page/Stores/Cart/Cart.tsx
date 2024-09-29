import React from 'react';

const Cart = () => {
  // Sample cart items with images
  const cartItems = [
    {
      id: 1,
      name: 'Pizza',
      price: 12.99,
      quantity: 1,
      image: 'https://example.com/pizza.jpg', // Replace with your image URL
    },
    {
      id: 2,
      name: 'Burger',
      price: 9.99,
      quantity: 2,
      image: 'https://example.com/burger.jpg', // Replace with your image URL
    },
    {
      id: 3,
      name: 'Pasta',
      price: 14.99,
      quantity: 1,
      image: 'https://example.com/pasta.jpg', // Replace with your image URL
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
