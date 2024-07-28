import FileUpload from "../../../component/Forma/FileUpload/FileUpload"
import FormInput from "../../../component/Forma/FormInput"
import Forms from "../../../component/Forma/Forms"
import FormSelect from "../../../component/Forma/FormSelect"
import { BreadcrumbItem } from "../../../constant"
import BradCumbs from "../../../share/BradCumbs/BradCumbs"

const CreateProduct = () => {
  // productName:{type:String,required:true},
  // price:{type:Number,required:true},
  // description:{type:String},
  // quantity:{type:Number},
  // isAvailable:{type:Boolean,default:true},
  // status:{type:Boolean,default:true},
  // storeId:{type:mongoose.Types.ObjectId,ref:'store'},
  // offers:{type:[OfferSchema],required:false,default:[]}
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
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <FormInput
                  name='productName'
                  placeholder='product name'
                  type='text'
                  label='Enter your product name'
                />
              </div>
              <div>
                <FormInput name="description" placeholder="description" type="text" label="Enter your desprcription"/>
              </div>
              <div>
                <FormInput
                name="price"
                placeholder="price"
                type="number"
                label="Enter product price"
                />
              </div>
              <div>
                <FormInput
                name="quantity"
                placeholder="quantity"
                type="number"
                label="Enter product quantity"
                />
              </div>
              <div>
<FormSelect>
  <option>
    yes
  </option>
  <option>
    no
  </option>
</FormSelect>
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