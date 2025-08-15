// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-4 items-center"
