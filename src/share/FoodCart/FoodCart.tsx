
import { IoAddCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/feature/Cart/CartSlice";
const FoodCart = ({data}) => {
  const dispatch = useDispatch();
  const handleClick=(data)=>{
    console.log(data
    );
    
    dispatch(addItemToCart({
     item: { 
        id: data._id, 
        productName: data.productName, 
        price: data.price, 
        quantity: 1,
        ImgUrl:data.ImgUrl
      },
      storeId:data.storeId
    }))
  }
  const cartData = useSelector(state=>state.cart.items);
  console.log(cartData)
  return (
    <div className="max-h-[245px] max-w-[496px] rounded-[12px] shadow-lg p-[10px]">
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2">
          <div className="lg:my-2">
            <h4 className="font-bp font-semibold text-[20px]">
            {data?.productName}
            </h4>
          </div>

          <div className="">
            <h5 className="font-bp text-[14px]">
              {
                data?.description
              }
              {/* 1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium */}
            </h5>
          </div>

          <div className="lg:my-2">
            <h5 className="font-bp text-[18px] font-bold">{data?.price}</h5>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="max-h-[150px] w-full rounded-[12px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-[12px]"
              src={data?.ImgUrl}
              alt="Food Cart"
            />

            <div onClick={()=>{handleClick(data)}} className="hover:shadow-[0px_4px_4px_0px_#00000040] rounded-tl-[30px] rounded-br-[12px] absolute right-0 bottom-0 w-[68px] h-[61px] bg-white opacity-85 flex justify-center items-center">
              {
                cartData.length>0 ? <div>hi</div>:              < IoAddCircleSharp className="focus:shadow-[0px_4px_4px_0px_#00000040]" size={38}/>

              }
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
