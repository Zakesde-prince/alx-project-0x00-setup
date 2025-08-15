// pages/landing.tsx
import React from "react";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

const Landing = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Landing Page</h1>

      <div className="flex gap-4 mt-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>

      <div className="p-2 flex gap-2 mt-6">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
    </div>
  );
};

export default Landing;
