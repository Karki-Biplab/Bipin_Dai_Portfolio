"use client";
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Professional Experience</h2>

        <div className="experience-item mb-10">
          <h3 className="text-2xl font-medium">Current Role: Owner, Pappu Auto Parts</h3>
          <p className="text-lg mt-4">
            I am the owner and primary operator of Pappu Auto Parts, a business that specializes in
            providing motorbike spare parts, tools, and machinery to customers. My responsibilities include:
          </p>
          <ul className="list-disc list-inside text-left space-y-2 mt-4">
            <li className="text-lg">Managing day-to-day operations of the business</li>
            <li className="text-lg">Overseeing inventory management and supply chain processes</li>
            <li className="text-lg">Building relationships with suppliers and customers</li>
            <li className="text-lg">Leading a team of employees to ensure smooth workflow</li>
            <li className="text-lg">Handling financial tasks, including accounting and bookkeeping</li>
            <li className="text-lg">Managing social media marketing and promotions</li>
          </ul>
        </div>

        <div className="experience-item mb-10">
          <h3 className="text-2xl font-medium">Previous Role: Partner, SK Store</h3>
          <p className="text-lg mt-4">
            As a partner at SK Store, I played a key role in running the business, which involved the sale of various products and
            providing services to our customers.
          </p>
          <ul className="list-disc list-inside text-left space-y-2 mt-4">
            <li className="text-lg">Handled inventory management and supplier relations</li>
            <li className="text-lg">Worked closely with the sales team to boost sales</li>
            <li className="text-lg">Helped with marketing and customer service strategies</li>
            <li className="text-lg">Contributed to financial management and reporting</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="text-2xl font-medium">Years in Business</h3>
          <p className="text-lg mt-4">
            With over 10 years of experience in the motorbike spare parts industry, I have gained valuable expertise in business
            management, customer relations, and operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
