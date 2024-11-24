
import { IStores } from "../../constant";
import StoreCart from "../../share/StoreCart/StoreCart";
import { useLocation } from "react-router-dom";
import Stores from "../../page/Stores/Stores";
import { useState } from "react";
import { useGetStoreQuery } from "../../redux/API/stores/storeApi";
import FilterSection from "../../page/Stores/FilterSection/FilterSection";

const StoreLayoutComponent = () => {
  const { data, isLoading } = useGetStoreQuery(undefined)

  const [priceRange, setPriceRange] = useState<number>(1000);
  const [deliveryTime, setDeliveryTime] = useState<number>(50);
  const [category, setCategory] = useState<string>("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  
  console.log(priceRange,deliveryTime,category,selectedCuisines);
  
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <FilterSection
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        deliveryTime={deliveryTime}
        setDeliveryTime={setDeliveryTime}
        category={category}
        setCategory={setCategory}
        selectedCuisines={selectedCuisines}
        setSelectedCuisines={setSelectedCuisines}
      />

      {/* Stores Section */}
      <div className="col-span-9">
        <Stores data={data} />
      </div>
    </div>
  );
};

export default StoreLayoutComponent;
