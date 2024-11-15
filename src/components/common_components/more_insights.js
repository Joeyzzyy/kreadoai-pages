'use client';
import React from 'react';
import Image from 'next/image';

const MoreInsights = ({ data }) => {
  const insights = data.topContent;

  return (
    <div className="more-insights mt-0 mb-12 container mx-auto px-4">
      <h2 className="text-3xl mb-8 text-gray-900 font-bold tracking-tight text-center">More Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src={insight.imageUrl || '/images/placeholder.png'}
                alt={insight.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-indigo-700 font-medium mb-2 uppercase">{insight.subTitle}</p>
              <h3 className="text-xl text-gray-900 font-semibold mb-2 leading-tight hover:text-indigo-700 transition-colors duration-300">{insight.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreInsights;
