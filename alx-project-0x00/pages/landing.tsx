// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Buttons with different sizes and shapes */}
      <div className="flex gap-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded" styles="text-lg rounded-full" />
      </div>

      {/* Render Card components */}
      <div className="flex flex-wrap gap-6 mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;

