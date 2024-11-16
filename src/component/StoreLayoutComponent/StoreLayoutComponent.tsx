import { useState, useEffect } from "react";
import { useGetStoreQuery } from "../../redux/API/stores/storeApi";
import { IStores } from "../../constant";
import StoreCart from "../../share/StoreCart/StoreCart";
import { useLocation } from "react-router-dom";
import Stores from "../../page/Stores/Stores";

const StoreLayoutComponent = () => {
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [deliveryTime, setDeliveryTime] = useState<number>(50);
  const [category, setCategory] = useState<string>("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

  console.log(priceRange,deliveryTime,category,selectedCuisines)
  const { data, isLoading } = useGetStoreQuery({ priceRange, deliveryTime, category, cuisines: selectedCuisines });

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Filter Section */}
      <div className="col-span-3 p-4 shadow-lg rounded-lg bg-white">
        <h1 className="text-xl font-semibold mb-4">Filter</h1>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Category</h2>
          <div className="space-y-2">
            {["Breakfast", "Lunch", "Evening Snacks", "Dinner"].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  className="radio radio-primary"
                  checked={category === item}
                  onChange={() => setCategory(item)} // Update category on selection
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Price Range (0 - 2000 ৳)</h2>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="range range-primary"
          />
          <div className="text-gray-600 text-sm text-right mt-1">
            Selected: {priceRange} ৳
          </div>
        </div>

        {/* Delivery Time Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Delivery Time (0 - 100 min)</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(Number(e.target.value))}
            className="range range-primary"
          />
          <div className="text-gray-600 text-sm text-right mt-1">
            Selected: {deliveryTime} min
          </div>
        </div>

        {/* Cuisines Filter */}
        <div>
          <h2 className="text-lg font-medium mb-2">Cuisines</h2>
          <div className="space-y-2">
            {["Fast Food", "Burger", "Biryani", "Pizza", "Sweets", "Chicken"].map((cuisine) => (
              <label key={cuisine} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => {
                    setSelectedCuisines((prev) =>
                      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
                    );
                  }}
                />
                <span>{cuisine}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Stores Section */}
      <div className="col-span-9">
        <Stores data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default StoreLayoutComponent;
