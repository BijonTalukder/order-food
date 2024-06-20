import FileUpload from "../../../component/Forma/FileUpload/FileUpload"
import FormInput from "../../../component/Forma/FormInput"
import Forms from "../../../component/Forma/Forms"
import { BreadcrumbItem } from "../../../constant"
import BradCumbs from "../../../share/BradCumbs/BradCumbs"

const CreateProductCategory = () => {
    const BreadCumbsItems:BreadcrumbItem[]=
    [
    {
      title:"DashBoard",
      path:"/dashboard",
      iconType:"folder"
    },
    {
      title:"category",
      path:"/dashboard/category",
      iconType:"file"
    }
    ]
    const handleCategory=(value:any)=>{
        console.log(value)

    }
  return (
    <div className="shadow-sm m-3">
        <div>
            <BradCumbs items={BreadCumbsItems}/>
        </div>
        <div className="m-3 shadow-md p-3">
            <Forms submitHandler={handleCategory}>
              <div className="grid grid-cols-1 gap-2">
                <div>
                <FormInput name="categoryName" placeholder="category name" type="text" label="Enter your category name"/>

                </div>
                <div>
                <FileUpload name="exampleFile" label="Upload File"/>

                </div>
                <div>
                <button type="submit" className="btn btn-success">Submit</button>

                </div>

              </div>
                
            </Forms>
        </div>


    </div>
  )
}

export default CreateProductCategory