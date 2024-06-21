import FileUpload from "../../component/Forma/FileUpload/FileUpload"
import { BreadcrumbItem } from "../../constant"
import BradCumbs from "../../share/BradCumbs/BradCumbs"

const Profile = () => {
  const BreadCumbsItems:BreadcrumbItem[]=
  [
  {
    title:"DashBoard",
    path:"/dashboard",
    iconType:"folder"
  },
  {
    title:"Profile",
    path:"/dashboard/profile",
    iconType:"file"
  }
  ]
  return (
    <div className="shadow-sm m-3">
      <div>
        <BradCumbs items={BreadCumbsItems}/>
      </div>
      <div className="grid grid-cols-1">
        <div className="shadow-md p-2 rounded-sm">
          <div className="m-2">
           <h1 className="text-xl font-bold font-serif">My Profile</h1>
          </div>
          <div className="grid grid-cols-12">
          <div className="avatar col-span-1">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className="mx-3 col-span-11">
  <div className="name ">
    <h2 className="text-lg font-bold text-[16px]">Bijon Talukder</h2>
  </div>
  <div className="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus voluptas possimus facere quia quis dolorum earum praesentium sapiente reiciendis est eum explicabo quam, atque eligendi nulla id. Nesciunt!</p>

  </div>

</div>
<FileUpload name="b"/>
          </div>
       
        </div>
      
      </div>

    </div>
  )
}

export default Profile