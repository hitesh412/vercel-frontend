import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://project-backend-txga.onrender.com/api/orders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching order:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 text-lg">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-md">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Not Found</h2>
          <p className="text-gray-500 mb-6">The order you're looking for doesn't exist.</p>
          <Link to="/my-orders">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              View All Orders
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Banner */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Order Confirmed!</h1>
              <p className="mt-1 text-sm sm:text-base text-gray-500">
                Thank you for your purchase. Your order has been received.
              </p>
            </div>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Order Header */}
          <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Order ID</p>
                <p className="text-sm font-mono font-medium text-gray-900 break-all mt-1">{order._id}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Confirmed
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Delivery Details - Left Side */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b">
                  Delivery Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Name</p>
                    <p className="text-sm font-medium text-gray-900">{order.customer.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm text-gray-700 break-all">{order.customer.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <p className="text-sm text-gray-700">{order.customer.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Delivery Address</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{order.customer.address}</p>
                  </div>
                </div>
              </div>

              {/* Order Items - Right Side */}
              <div className="lg:col-span-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b">
                  Items Ordered
                </h3>

                <div className="space-y-2 mb-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">Size: {item.size}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-sm font-semibold text-gray-900">Rs. {item.totalPrice}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="text-xs text-gray-400 mt-1">{order.items.length} items</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">Rs. {order.total}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/my-orders" className="flex-1 sm:flex-initial">
            <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-sm">
              View All Orders
            </button>
          </Link>
          <Link to="/" className="flex-1 sm:flex-initial">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-medium px-8 py-3 rounded-lg transition-colors shadow-sm border border-gray-300">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-blue-900 mb-1">What's Next?</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                You will receive an order confirmation email with details of your order and a tracking link. 
                We'll notify you when your items are shipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

