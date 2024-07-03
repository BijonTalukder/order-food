import FileUpload from "../../../component/Forma/FileUpload/FileUpload";
import FormInput from "../../../component/Forma/FormInput";
import Forms from "../../../component/Forma/Forms";
import { BreadcrumbItem } from "../../../constant";
import { useCreateStoreMutation } from "../../../redux/API/stores/storeApi";
import BradCumbs from "../../../share/BradCumbs/BradCumbs";

const CreateStores = () => {
  const [setStore] = useCreateStoreMutation()
  const BreadCumbsItems: BreadcrumbItem[] = [
    {
      title: "DashBoard",
      path: "/dashboard",
      iconType: "folder",
    },
    {
      title: "create store",
      path: "/dashboard/create-store",
      iconType: "file",
    },
  ];

  const handleStore = async(values:any) => {
    const formData = new FormData();
    const {storeAddress,...data}= values
    const file = data["imgUrl"];

    formData.append("file", file);
    
    delete data["imgUrl"];
   const bodyData ={
    data,
    pointLocation:{
      storeAddress:storeAddress
      // coordinates:{
      //     type:[
      //         Number
      //     ]
      // }
  },
   }
   const strData = JSON.stringify(bodyData);
      formData.append("data", strData);
    await setStore(strData)
   console.log(values)
  };

  return (
    <div className="shadow-sm m-3">
      <div>
        <BradCumbs items={BreadCumbsItems} />
      </div>
      <div className="m-3 shadow-md p-3">
        <Forms submitHandler={handleStore}>
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <FormInput
                name="storeName"
                placeholder="Store Name"
                type="text"
                label="Enter your store name"
              />
            </div>
            <div>
              <FormInput
                name="storeAddress"
                placeholder="Store Address"
                type="text"
                label="Enter your store address"
              />
            </div>
            <div>
              <FileUpload name="imgUrl"  label="Upload store Photo" />
            </div>
            <div className="col-span-2">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </Forms>
      </div>
    </div>
  );
};

export default CreateStores;
