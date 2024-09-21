// import { StoreCart } from "../../component/Cart/StoreCart"
import StoreCart from "../../component/Cart/StoreCart"
import { IStores } from "../../constant"
import { useGetStoreQuery } from "../../redux/API/stores/storeApi"

const Stores = () => {
    const {data,isLoading} = useGetStoreQuery(undefined)
  return (
    <div className="grid grid-cols-4 gap-2">

        {
            data?.data?.map((item:IStores,index:number)=><StoreCart key={index} data={item}/>)
        }
    </div>
  )
}

export default Stores