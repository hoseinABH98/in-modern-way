import React from 'react';

const Skeleton = ({ title }) => {
  const skeleton = title
    ? [1, 2, 3, 4]
    : [1, 2, 3, 4, 16, 6, 8, 5, 7, 9, 10, 11, 12, 13, 88, 65];
  const homeSK = title ? [1, 2, 3, 4] : [1];
  return homeSK.map((item) => (
    <main key={item} className="my-8 animate-pulse">
      {title && <div className="h-3  bg-gray-800 rounded  w-1/6"></div>}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {skeleton.map((index) => (
          <div
            key={index}
            className="w-full max-w-sm mx-auto rounded-md shadow-md   overflow-hidden "
          >
            <div className="flex items-end  rounded justify-between h-64 w-full bg-cover bg-gray-800"></div>
          </div>
        ))}
      </div>
    </main>
  ));
};

export default Skeleton;
