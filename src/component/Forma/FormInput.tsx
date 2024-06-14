
import { Controller, useFormContext } from 'react-hook-form';
interface IInput{
    label?:string;
    type?:string;
    name:string;
    value?:string|string[]|undefined;
    id?:string;
    placeholder?:string;
    validate?:object
}
const FormInput = ({name,type,value,placeholder,label}:IInput) => {
    const {control} = useFormContext()
  return (
    <Controller
        control={control}
        name={name}
        render={({ field}) => 
            <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">{label?label:""}</span>
           
            </div>
            <input  type={type}
            placeholder={placeholder}
            {
                ...field
            }
            value={value?value:field.value}
            className="input input-bordered w-full max-w-xs" />
         
          </label>
        }
      />
  )
}

export default FormInput