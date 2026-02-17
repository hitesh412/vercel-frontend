// import React from "react";

// const Privacy = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10">
        
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
//           Privacy Policy
//         </h1>

//         <p className="text-gray-600 mb-6 text-center">
//           Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
//         </p>

//         <div className="space-y-6 text-gray-700 leading-relaxed">
          
//           <section>
//             <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
//             <p>
//               We may collect personal information such as your name, phone number, email address, delivery address,
//               and payment details when you use our food delivery services.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>To process and deliver your orders</li>
//               <li>To improve our services and app experience</li>
//               <li>To communicate updates, offers, and support</li>
//               <li>To ensure secure transactions</li>
//             </ul>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
//             <p>
//               We implement strict security measures to protect your personal data from unauthorized access,
//               alteration, or disclosure.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
//             <p>
//               We do not sell your personal information. Data is shared only with trusted partners required to
//               complete deliveries and payments.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
//             <p>
//               You have the right to access, update, or delete your personal information. You may also opt out of
//               promotional communications at any time.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
//             <p>
//               We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
//             <p>
//               If you have any questions about this Privacy Policy, please contact us through our support page.
//             </p>
//           </section>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Privacy;


import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Privacy Policy
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
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
                </p>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Information We Collect
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  We may collect personal information such as your name, phone number, email address, delivery address, and payment details when you use our food delivery services.
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
                      How We Use Your Information
                    </h2>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use your information for the following purposes:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">To process and deliver your orders</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">To improve our services and app experience</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">To communicate updates, offers, and support</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">To ensure secure transactions</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Data Protection
                    </h2>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement strict security measures to protect your personal data from unauthorized access, alteration, or disclosure.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        Your data is encrypted and securely stored
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Sharing of Information
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  We do not sell your personal information. Data is shared only with trusted partners required to complete deliveries and payments.
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
                      Your Rights
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  You have the right to access, update, or delete your personal information. You may also opt out of promotional communications at any time.
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
                      Changes to This Policy
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-11">
                  We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
                </p>
              </section>

              {/* Section 7 - Contact */}
              <section>
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">7</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Contact Us
                    </h2>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
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

            {/* Privacy Commitment Box */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-1">
                    Our Commitment
                  </h3>
                  <p className="text-sm text-green-700 leading-relaxed">
                    We are committed to protecting your privacy and ensuring your data is handled with the highest level of security and care.
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

export default Privacy;




















