'use client';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Make sure you have react-icons installed: npm install react-icons

const Upgrade = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '0',
      frequency: '/month',
      description: 'Perfect for individuals.', // Keeping descriptions very short
      features: [
        '1 User',
        '100 MB Storage',
        'Basic File Sharing',
        // 'Email Support', // Keep removed for max conciseness
      ],
      isHighlighted: false,
      buttonText: 'Current Plan',
      buttonClass: 'bg-gray-200 text-gray-700 cursor-not-allowed',
      buttonDisabled: true,
    },
    {
      name: 'Pro',
      price: '30',
      frequency: '/month',
      description: 'Ideal for small teams.', // Keeping descriptions very short
      features: [
        '5 Users',
        '5 GB Storage',
        'Advanced File Sharing',
        'Email & Chat Support',
        // 'Version History', // Keep removed
        // 'Password Protection', // Keep removed
      ],
      isHighlighted: true,
      buttonText: 'Get Started',
      buttonClass: 'bg-indigo-600 text-white hover:bg-indigo-700 ring-indigo-600',
      buttonDisabled: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: '',
      description: 'Tailored solutions for organizations.', // Keeping descriptions very short
      features: [
        'Unlimited Users',
        'Unlimited Storage',
        'Dedicated Support',
        'Advanced Security',
        // 'Custom Integrations', // Keep removed
        // 'Audit Logs', // Keep removed
      ],
      isHighlighted: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-600',
      buttonDisabled: false,
    },
  ];

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
            Choose Your Plan
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Flexible pricing tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col rounded-xl p-5 shadow-md transition-all duration-300 transform
                ${plan.isHighlighted
                  ? 'border-4 border-indigo-600 scale-105 z-10'
                  : 'border border-gray-200 hover:shadow-lg'
                }
              `}
            >
              {plan.isHighlighted && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-0.5 text-xs font-semibold tracking-wider text-white bg-indigo-600 rounded-full shadow-sm transform rotate-6"> {/* Smaller tag */}
                  Popular
                </div>
              )}

              <div className="flex-grow">
                {/* Reduced heading sizes and margins */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2"> {/* Smaller font and margin */}
                  {plan.name}
                </h3>
                <p className="text-center mb-3"> {/* Smaller margin */}
                  <span className="text-3xl font-extrabold text-gray-900"> {/* Smaller font size */}
                    {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                  </span>
                  <span className="text-sm font-medium text-gray-500">{plan.frequency}</span> {/* Smaller font size */}
                </p>
                <p className="text-gray-600 text-center text-xs mb-5">{plan.description}</p> {/* Smaller text, reduced margin */}

                {/* Features List - reduced space-y and font size */}
                <ul role="list" className="space-y-2 text-gray-700 text-xs"> {/* Reduced space-y and font size */}
                  {plan.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-start">
                      <FaCheckCircle className="flex-shrink-0 size-3.5 text-indigo-500 mr-1.5 mt-0.5" /> {/* Even smaller icon */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reduced button top margin and padding, and font size */}
              <a
                href="#"
                className={`
                  mt-5 block w-full py-2 px-4 rounded-full text-center font-semibold text-sm
                  shadow-md transition-transform transform ${plan.buttonDisabled ? '' : 'hover:scale-105'}
                  ${plan.buttonClass}
                `}
                aria-disabled={plan.buttonDisabled}
                tabIndex={plan.buttonDisabled ? -1 : 0}
                onClick={(e) => {
                    if (plan.buttonDisabled) {
                        e.preventDefault();
                    } else {
                        console.log(`Clicked ${plan.name} plan!`);
                    }
                }}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upgrade;