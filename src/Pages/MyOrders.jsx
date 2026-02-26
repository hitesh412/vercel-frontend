import { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");

  // Date filter state
  const [quickFilter, setQuickFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://project-backend-txga.onrender.com/api/orders/", {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch orders. Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Quick filter handler — clears custom date range
  const handleQuickFilter = (value) => {
    setQuickFilter(value);
    setStartDate("");
    setEndDate("");
  };

  // Custom date range handler — clears quick filter
  const handleDateChange = (field, value) => {
    setQuickFilter("custom");
    if (field === "start") setStartDate(value);
    else setEndDate(value);
  };

  const clearFilters = () => {
    setQuickFilter("all");
    setStartDate("");
    setEndDate("");
    setSortOrder("newest");
  };

  // Compute the date window for quick filters
  const getQuickFilterRange = () => {
    const now = new Date();
    const start = new Date();
    switch (quickFilter) {
      case "today":
        start.setHours(0, 0, 0, 0);
        return { from: start, to: now };
      case "week":
        start.setDate(now.getDate() - 7);
        return { from: start, to: now };
      case "month":
        start.setMonth(now.getMonth() - 1);
        return { from: start, to: now };
      case "3months":
        start.setMonth(now.getMonth() - 3);
        return { from: start, to: now };
      default:
        return null;
    }
  };

  // Filter + sort pipeline
  const filteredAndSortedOrders = [...orders]
    .filter((order) => {
      const orderDate = new Date(order.createdAt);

      if (quickFilter === "custom") {
        const from = startDate ? new Date(startDate) : null;
        const to = endDate ? new Date(new Date(endDate).setHours(23, 59, 59, 999)) : null;
        if (from && orderDate < from) return false;
        if (to && orderDate > to) return false;
        return true;
      }

      const range = getQuickFilterRange();
      if (!range) return true;
      return orderDate >= range.from && orderDate <= range.to;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const isFiltered =
    quickFilter !== "all" || startDate !== "" || endDate !== "";

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 text-lg">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg max-w-md">
          <div className="flex items-start">
            <svg className="h-6 w-6 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Error</h3>
              <p className="mt-2 text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Order History</h1>
              <p className="mt-1 text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-700">{filteredAndSortedOrders.length}</span>{" "}
                of{" "}
                <span className="font-semibold text-gray-700">{orders.length}</span>{" "}
                {orders.length === 1 ? "order" : "orders"}
              </p>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600">Sort by:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* ── Date Filter Panel ── */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Filter by Date
            </h2>
            {isFiltered && (
              <button
                onClick={clearFilters}
                className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear Filters
              </button>
            )}
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { label: "All Time", value: "all" },
              { label: "Today", value: "today" },
              { label: "Last 7 Days", value: "week" },
              { label: "Last 30 Days", value: "month" },
              { label: "Last 3 Months", value: "3months" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleQuickFilter(opt.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  quickFilter === opt.value && quickFilter !== "custom"
                    ? "bg-green-600 text-white border-green-600 shadow-sm"
                    : "bg-white text-gray-600 border-gray-300 hover:border-green-400 hover:text-green-700"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Custom Date Range */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Custom Range:</span>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                <label className="text-xs text-gray-500">From</label>
                <input
                  type="date"
                  value={startDate}
                  max={endDate || undefined}
                  onChange={(e) => handleDateChange("start", e.target.value)}
                  className={`text-sm border rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer ${
                    quickFilter === "custom" && startDate ? "border-green-500" : "border-gray-300"
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs text-gray-500">To</label>
                <input
                  type="date"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => handleDateChange("end", e.target.value)}
                  className={`text-sm border rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer ${
                    quickFilter === "custom" && endDate ? "border-green-500" : "border-gray-300"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Active filter badge */}
          {isFiltered && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-gray-400">Active filter:</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                {quickFilter === "custom"
                  ? `${startDate || "Any"} → ${endDate || "Any"}`
                  : quickFilter === "today"
                  ? "Today"
                  : quickFilter === "week"
                  ? "Last 7 Days"
                  : quickFilter === "month"
                  ? "Last 30 Days"
                  : "Last 3 Months"}
              </span>
            </div>
          )}
        </div>

        {/* Orders List */}
        {filteredAndSortedOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 sm:p-16 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isFiltered ? "No orders in this date range" : "No orders yet"}
            </h2>
            <p className="text-gray-500 mb-6">
              {isFiltered
                ? "Try adjusting your date filter or clear it to see all orders."
                : "When you place orders, they'll appear here."}
            </p>
            {isFiltered ? (
              <button
                onClick={clearFilters}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            ) : (
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Start Shopping
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAndSortedOrders.map((order, index) => (
              <div
                key={order._id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Order Header Bar */}
                <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-700 font-bold text-sm">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Order ID</p>
                        <p className="text-sm font-mono font-medium text-gray-900 break-all">{order._id}</p>
                        {order.createdAt && (
                          <p className="text-xs text-gray-400 mt-1">
                            📅{" "}
                            {new Date(order.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Customer Info */}
                    <div className="lg:col-span-1">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b">
                        Customer Information
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

                    {/* Order Items */}
                    <div className="lg:col-span-2">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b">Items Ordered</h3>
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3 flex-1">
                              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;



