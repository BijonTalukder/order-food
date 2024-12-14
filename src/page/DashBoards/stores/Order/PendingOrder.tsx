import React, { useState } from 'react';
import { useGetOrderByStoreQuery } from '../../../../redux/API/order/orderApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Pagination from '../../../../component/Pagination/Pagination';

const SellerOrderManagement = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const [filter, setFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const { data, isLoading, isSuccess } = useGetOrderByStoreQuery(userData.storeId);


  console.log(data.data.pagination);
  
  const filteredOrders = data?.data?.orders.filter((order: any) => {
    if (filter === 'pending') return order.orderStatus === 'Pending';
    if (filter === 'accepted') return order.orderStatus === 'Accepted';
    if (filter === 'rejected') return order.orderStatus === 'Rejected';
    return true;
  }) || [];

  const handleAcceptOrder = (orderId: string) => {
    // Logic to accept the order
  };

  const handleRejectOrder = (orderId: string) => {
    // Logic to reject the order
  };

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'badge-warning';
      case 'Accepted':
        return 'badge-success';
      case 'Rejected':
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
        {isSuccess && filteredOrders.map((order: any) => (
          <div
            key={order._id}
            className="card bg-white shadow-md rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg"
          >
            {/* Order Header */}
            <div
              className="card-header flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleOrderExpansion(order._id)}
            >
              <div className="flex items-center space-x-4">
                <span className={`badge ${getStatusBadge(order.orderStatus)} badge-md`}>
                  {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                </span>
                <div>
                  <div className="font-bold text-lg text-gray-800">
                    {order.userId}
                  </div>
                  <div className="text-sm text-gray-500">
                    Order #{order.orderId}
                  </div>
                </div>
              </div>
              <div className="text-xl font-semibold text-blue-600">
                ${order.totalAmount.toFixed(2)}
              </div>
            </div>

            {/* Expanded Order Details */}
            {expandedOrder === order._id && (
              <div className="card-body p-4 bg-gray-50 rounded-b-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Customer Details</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Name:</strong> {order.userId}</p>
                      <p><strong>Email:</strong> {order.userId}</p>
                      <p><strong>Phone:</strong> {order.userId}</p>
                    </div>
                  </div>

                  {/* Order Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Order Information</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Order Date:</strong> {new Date(order.placedAt).toLocaleDateString()}</p>
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
                        {order.items.map((item: any, index: number) => (
                          <tr key={index} className="border-b">
                            <td className="p-2">{item.productName}</td>
                            <td className="p-2 text-center">{item.quantity}</td>
                            <td className="p-2 text-right">${item.price.toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr className="font-bold bg-gray-100">
                          <td className="p-2">Total</td>
                          <td className="p-2 text-center">{order.items.reduce((sum: number, item: any) => sum + item.quantity, 0)}</td>
                          <td className="p-2 text-right">${order.totalAmount.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">Shipping Address</h3>
                  <p className="text-gray-600">{order.deliveryAddress}</p>
                </div>

                {/* Order Actions */}
                {order.orderStatus === 'Pending' && (
                  <div className="mt-4 flex space-x-4">
                    <button
                      className="btn btn-success flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAcceptOrder(order._id);
                      }}
                    >
                      Accept Order
                    </button>
                    <button
                      className="btn btn-error flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRejectOrder(order._id);
                      }}
                    >
                      Reject Order
                    </button>
                  </div>
                )}

                {/* Status Indicators */}
                {order.orderStatus === 'Accepted' && (
                  <div className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Order Accepted</span>
                  </div>
                )}
                {order.orderStatus === 'Rejected' && (
                  <div className="alert alert-error mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Order Rejected</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <Pagination  total={data?.data?.pagination?.total} limit={data?.data?.pagination?.limit} page={data?.data?.pagination?.page}  totalPages={data?.data?.totalPages}/>
    </div>
  );
};

export default SellerOrderManagement;
