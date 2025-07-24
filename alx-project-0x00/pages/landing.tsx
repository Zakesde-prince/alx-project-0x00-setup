import React from 'react';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

      {/* Small Button */}
      <Button
        title="Small Rounded-sm"
        styles="px-3 py-1 text-sm rounded-sm"
      />

      {/* Medium Button */}
      <Button
        title="Medium Rounded-md"
        styles="px-4 py-2 text-base rounded-md"
      />

      {/* Large Button */}
      <Button
        title="Large Rounded-full"
        styles="px-6 py-3 text-lg rounded-full"
      />
    </div>
  );
};

export default Landing;
