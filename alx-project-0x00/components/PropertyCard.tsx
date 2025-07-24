import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 max-w-sm">
      <img
        src={property.image}
        alt={property.name}
        className="rounded mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">{property.name}</h3>
      <p className="text-gray-600 mb-2">
        ${property.price.toLocaleString()} / night
      </p>
      <p className="text-yellow-500 font-bold">⭐ {property.rating}</p>
    </div>
  );
};

export default PropertyCard;
