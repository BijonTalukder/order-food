
import { IoAddCircleSharp } from "react-icons/io5";
const FoodCart = () => {
  return (
    <div className="max-h-[245px] max-w-[496px] rounded-[12px] shadow-lg p-[10px]">
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2">
          <div className="lg:my-2">
            <h4 className="font-bp font-semibold text-[20px]">
              Royal Cheese Burger with extra Fries
            </h4>
          </div>

          <div className="">
            <h5 className="font-bp text-[14px]">
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
            </h5>
          </div>

          <div className="lg:my-2">
            <h5 className="font-bp text-[18px] font-bold">GBP 23.10</h5>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="h-full w-full rounded-[12px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-[12px]"
              src="/Assets/Img/cart.jpeg"
              alt="Food Cart"
            />

            <div className="hover:shadow-[0px_4px_4px_0px_#00000040] rounded-tl-[30px] rounded-br-[12px] absolute right-0 bottom-0 w-[68px] h-[61px] bg-white opacity-85 flex justify-center items-center">
              
              
              < IoAddCircleSharp className="focus:shadow-[0px_4px_4px_0px_#00000040]" size={38}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
