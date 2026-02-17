import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
        
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            About Our Food Delivery Service
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Your favorite food, delivered fast to your door. From pizzas to sushi, we’ve got it all!
          </p>
        </header>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-blue-50 rounded-xl p-6 sm:p-7 shadow-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">
              How It Works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Browse our extensive menu, place your order, and have it delivered in minutes.
              We ensure timely deliveries and quality meals.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 sm:p-7 shadow-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-600">
              Our Mission
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Our mission is to make your dining experience effortless, offering delicious meals
              delivered straight to your door, whenever you want.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
