import React from 'react';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {/* Small + rounded-sm */}
      <Button
        title="Small Button"
        styles="px-3 py-1 text-sm rounded-sm"
      />

      {/* Medium + rounded-md */}
      <Button
        title="Medium Button"
        styles="px-4 py-2 text-base rounded-md"
      />

      {/* Large + rounded-full */}
      <Button
        title="Large Button"
        styles="px-6 py-3 text-lg rounded-full"
      />
    </div>
  );
};

export default Landing;
