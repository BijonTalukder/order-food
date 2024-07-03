import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);

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

    },
    {
      icon:<CgProfile />,
      title:"create store",
      link:"/dashboard/create-store"

    }

  ]
  return (
    <div>
      {" "}
      <div className='grid grid-cols-12 '>
        <div className='col-span-2 h-screen bg-gray-800 text-zinc-50'>
          <div className='side-bar'>
            <ul className='p-2 m-2  '>
              {data.map((item, index) => (
                <li
                  key={index}
                  className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300 '
                >
                  <Link to={item.link}>
                    <div className='flex items-center gap-1'>
                      <div>{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                  </Link>
                </li>
              ))}

              <li className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300'>
                Order
              </li>
              <li
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
                className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300'
              >
                Product
                <ul
                  className={` left-full mt-[2px] text-zinc-50 rounded-lg p-2 ${
                    isProductOpen ? "block" : "hidden"
                  }`}
                >
                  <li className='hover:bg-gray-700 focus:bg-green-300'>
                    <Link to='/dashboard/category'>Create Product</Link>
                  </li>

                  <li className='hover:bg-gray-700 focus:bg-green-300'>
                    <Link to='/dashboard/list-category'>List Product</Link>
                  </li>
                  {/* <li className='hover:bg-gray-700 focus:bg-green-300'>
                    <Link to='/dashboard/list-category'>List edit </Link>
                  </li>
                  edit-category-type/:id */}
                  {/* <li className='hover:bg-gray-700 focus:bg-green-300'>
                    <Link to='/dashboard/list-category'>List edit </Link>
                  </li>
                  edit-category-type/:id */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-span-10'>{<Outlet />}</div>
      </div>
    </div>
  );
}

export default DashboardLayout