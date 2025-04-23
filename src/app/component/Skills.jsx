"use client";
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    "Inventory Management Systems",
    "Motorcycle Parts Knowledge and Compatibility",
    "Basic Accounting Software",
    "Digital Payment Platforms (e-Sewa, Khalti, etc.)",
    "Social Media Marketing",
    "Basic Vehicle Diagnostics",
    "Supply Chain Management",
    "E-commerce Platform Operation",
    "CRM (Customer Relationship Management) Software",
    "Mobile Banking Applications"
  ];

  const softSkills = [
    "Relationship Building with Suppliers and Customers",
    "Team Leadership and Mentorship",
    "Negotiation (Buying and Selling)",
    "Cross-Cultural Communication",
    "Conflict Resolution",
    "Active Listening",
    "Emotional Intelligence",
    "Adaptability to Market Changes",
    "Employee Motivation Techniques",
    "Community Engagement"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-100">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="tech-skills">
            <h3 className="text-2xl font-medium mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside text-left space-y-2">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="soft-skills">
            <h3 className="text-2xl font-medium mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside text-left space-y-2">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
