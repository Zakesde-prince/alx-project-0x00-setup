import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <div className="text-center mt-20 text-2xl font-bold">
      Hello ALX Listing App!
    </div>
  );
}

import Pill from "@/components/Pill";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Pool",
  "Free Parking",
  "Mountain View",
  "Beachfront",
  "City Center"
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?villa,travel')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap">
          {filters.map((filter, index) => (
            <Pill key={index} label={filter} />
          ))}
        </div>
      </div>
    </>
  );
}

{/* Listing Section */}
<div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {PROPERTYLISTINGSAMPLE.map((property) => (
    <PropertyCard key={property.name} property={property} />
  ))}
</div>
