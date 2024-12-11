import React, { useState } from 'react';

const mockOrders = [
  {
    id: 'ORD-2024-001',
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    items: [
      { name: 'Vintage Leather Jacket', quantity: 1, price: 199.99 },
      { name: 'Wool Scarf', quantity: 2, price: 49.99 }
    ],
    totalAmount: 299.97,
    shippingAddress: '123 Fashion Street, Style City, ST 12345',
    orderDate: '2024-03-15T10:30:00Z',
    status: 'pending',
    paymentMethod: 'Credit Card',
    shippingMethod: 'Express Delivery'
  },
  {
    id: 'ORD-2024-002',
    customerName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    items: [
      { name: 'Running Shoes', quantity: 1, price: 129.99 },
      { name: 'Sports Water Bottle', quantity: 1, price: 24.99 }
    ],
    totalAmount: 154.98,
    shippingAddress: '456 Athletic Avenue, Fitness Town, FT 67890',
    orderDate: '2024-03-16T14:45:00Z',
    status: 'pending',
    paymentMethod: 'PayPal',
    shippingMethod: 'Standard Shipping'
  }
];

const SellerOrderManagement = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [filter, setFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);

  const filteredOrders = orders.filter(order => {
    if (filter === 'pending') return order.status === 'pending';
    if (filter === 'accepted') return order.status === 'accepted';
    if (filter === 'rejected') return order.status === 'rejected';
    return true;
  });

  const handleAcceptOrder = (orderId) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'accepted' } 
          : order
      )
    );
  };

  const handleRejectOrder = (orderId) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'rejected' } 
          : order
      )
    );
  };

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return 'badge-warning';
      case 'accepted':
        return 'badge-success';
      case 'rejected':
        return 'badge-error';
      default:
        return 'badge-neutral';
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      {/* Header and Filter */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Order Management</h1>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 font-medium">Filter:</span>
          <select
            className="select select-bordered select-sm w-full md:w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* No Orders State */}
      {filteredOrders.length === 0 && (
        <div className="alert alert-info shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>No orders found matching the selected filter</span>
          </div>
        </div>
      )}

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map(order => (
          <div 
            key={order.id} 
            className="card bg-white shadow-md rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg"
          >
            {/* Order Header */}
            <div 
              className="card-header flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleOrderExpansion(order.id)}
            >
              <div className="flex items-center space-x-4">
                <span className={`badge ${getStatusBadge(order.status)} badge-md`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <div>
                  <div className="font-bold text-lg text-gray-800">
                    {order.customerName}
                  </div>
                  <div className="text-sm text-gray-500">
                    Order #{order.id}
                  </div>
                </div>
              </div>
              <div className="text-xl font-semibold text-blue-600">
                ${order.totalAmount.toFixed(2)}
              </div>
            </div>

            {/* Expanded Order Details */}
            {expandedOrder === order.id && (
              <div className="card-body p-4 bg-gray-50 rounded-b-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Customer Details</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Name:</strong> {order.customerName}</p>
                      <p><strong>Email:</strong> {order.email}</p>
                      <p><strong>Phone:</strong> {order.phone}</p>
                    </div>
                  </div>

                  {/* Order Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Order Information</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
                      <p><strong>Shipping Method:</strong> {order.shippingMethod}</p>
                      <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">Order Items</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="p-2 text-left">Item</th>
                          <th className="p-2 text-center">Quantity</th>
                          <th className="p-2 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2">{item.name}</td>
                            <td className="p-2 text-center">{item.quantity}</td>
                            <td className="p-2 text-right">${item.price.toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr className="font-bold bg-gray-100">
                          <td className="p-2">Total</td>
                          <td className="p-2 text-center">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
                          <td className="p-2 text-right">${order.totalAmount.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">Shipping Address</h3>
                  <p className="text-gray-600">{order.shippingAddress}</p>
                </div>

                {/* Order Actions */}
                {order.status === 'pending' && (
                  <div className="mt-4 flex space-x-4">
                    <button 
                      className="btn btn-success flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAcceptOrder(order.id);
                      }}
                    >
                      Accept Order
                    </button>
                    <button 
                      className="btn btn-error flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRejectOrder(order.id);
                      }}
                    >
                      Reject Order
                    </button>
                  </div>
                )}

                {/* Status Indicators */}
                {order.status === 'accepted' && (
                  <div className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Order Accepted</span>
                  </div>
                )}
                {order.status === 'rejected' && (
                  <div className="alert alert-error mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Order Rejected</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerOrderManagement;