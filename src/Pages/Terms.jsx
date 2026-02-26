import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Terms & Conditions
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Introduction Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Please read these terms carefully before using our services. By continuing to use our application, you agree to be bound by these terms.
                </p>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Introduction
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  Welcome to <span className="font-semibold text-green-600">MyApp</span>. By accessing or using our food delivery application, you agree to be bound by these Terms & Conditions. Please read them carefully before placing an order.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      User Accounts
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  You are responsible for maintaining the confidentiality of your account and password. Any activity performed using your account will be considered your responsibility.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Orders & Payments
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  All orders placed through the app are subject to availability and confirmation. Prices, delivery fees, and taxes are displayed before checkout and may vary by location.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Cancellations & Refunds
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  Once an order is confirmed, cancellations may not be possible. Refunds are issued at our discretion in cases of incorrect or incomplete orders.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Delivery
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  Delivery times are estimates and may vary due to traffic, weather, or restaurant preparation time. We are not liable for delays beyond our control.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Limitation of Liability
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  MyApp shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">7</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Changes to Terms
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  We reserve the right to update these Terms & Conditions at any time. Continued use of the app after changes indicates acceptance of the updated terms.
                </p>
              </section>

              {/* Section 8 - Contact */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">8</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Contact Us
                    </h2>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:support@MyApp.com" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                        support@MyApp.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Agreement Box */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-1">
                    Agreement
                  </h3>
                  <p className="text-sm text-green-700 leading-relaxed">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} MyApp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;




















