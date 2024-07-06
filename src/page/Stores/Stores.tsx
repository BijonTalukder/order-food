// import { StoreCart } from "../../component/Cart/StoreCart"
import StoreCart from "../../component/Cart/StoreCart"
import { useGetStoreQuery } from "../../redux/API/stores/storeApi"

const Stores = () => {
    const {data,isLoading} = useGetStoreQuery(undefined)
  return (
    <div className="grid grid-cols-4 gap-2">

        {
            data?.data?.map((item:any,index:number)=><StoreCart key={index}/>)
        }
    </div>
  )
}

export default Stores