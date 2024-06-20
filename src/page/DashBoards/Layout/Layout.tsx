import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const data=[
    {
      icon:<CgProfile />,
      title:"Profile",
      link:"/dashboard/profile"
    },
    {
      icon:<CgProfile />,
      title:"category",
      link:"/dashboard/category"

    }

  ]
  return (
    <div> <div className='grid grid-cols-12 '>
    <div className='col-span-2 h-screen bg-gray-800 text-zinc-50'>
      <div className='side-bar'>
        <ul className='p-2 m-2  '>
          {
            data.map((item,index)=>  <li key={index} className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300 '>
              <Link to={item.link}>
              <div className="flex items-center gap-1">
                 <div>
                  {
                    item.icon
                  }
                 </div>
                 <div>{item.title}</div>
               </div>
              </Link>
              
             </li>)
          }
        
          <li className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300'>
            Order
          </li>
          <li   className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300'>
            Product
            
        <ul className='hidden group-hover:block'>
          <li className='rounded-lg p-2 hover:bg-gray-700 focus:bg-green-300'>
            Create Product
          </li>
          <li className='rounded-lg p-2 hover:bg-gray-700 focus:bg-green-300'>
            Product List
          </li>
        </ul>
  
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className='col-span-10'>{
      
      <Outlet/>}</div>
  </div></div>
  )
}

export default DashboardLayout