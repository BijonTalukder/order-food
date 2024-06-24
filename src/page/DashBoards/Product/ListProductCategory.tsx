import Swal from "sweetalert2";
import PTable from "../../../component/Table/PTable";
import axios from "axios";
import { useEffect, useState } from "react";

const ListProductCategory = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/productType/"
      );

      // Handle success
      if (response.data.statusCode == 200) {
        console.log(response.data);
        setData(response.data.data);

        Swal.fire({
          icon: "success",
          timer: 2000,
          title: response.data.message,
        });
      }
      console.log("Category created successfully:", response);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div className='shadow-sm m-3'>
      <PTable data={dataSource} columns={columns} />
    </div>
  );
};

export default ListProductCategory;
