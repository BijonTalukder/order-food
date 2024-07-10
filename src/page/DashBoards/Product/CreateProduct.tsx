import FileUpload from "../../../component/Forma/FileUpload/FileUpload"
import FormInput from "../../../component/Forma/FormInput"
import Forms from "../../../component/Forma/Forms"
import { BreadcrumbItem } from "../../../constant"
import BradCumbs from "../../../share/BradCumbs/BradCumbs"

const CreateProduct = () => {
      const BreadCumbsItems:BreadcrumbItem[]=
    [
    {
      title:"DashBoard",
      path:"/dashboard",
      iconType:"folder"
    },
    {
      title:"food",
      path:"/dashboard/category",
      iconType:"file"
    }
    ]
    const handleProduct=(value:any)=>{

    }
    
  return (
    <div className="shadow-sm m-3">
    <div>
          <BradCumbs items={BreadCumbsItems} />
        </div>
        <div className='m-3 shadow-md p-3'>
          <Forms submitHandler={handleProduct}>
            <div className='grid grid-cols-1 gap-2'>
              <div>
                <FormInput
                  name='productTypeName'
                  placeholder='category name'
                  type='text'
                  label='Enter your category name'
                />
              </div>
              <div>
                <FileUpload name='ImgUrl' label='Upload File' />
              </div>
              <div>
                <button type='submit' className='btn btn-success'>
                  Submit
                </button>
              </div>
            </div>
          </Forms>
        </div>
    </div>
  )
}

export default CreateProduct