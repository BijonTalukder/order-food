import React from "react";
import SkeletonLoader from "./SkeletonLoader";
import Pagination from "../Pagination/Pagination";

const PTable = ({ data, columns }: any) => {
  const isLoading = !data || data.length === 0;

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div className='search-filter-section shadow-md p-2 m-2'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>

          <div className='overflow-x-auto shadow-md p-2 m-2'>
            <table className='table'>
              <thead>
                <tr>
                  {columns.map((column: any) => (
                    <th key={column.key}>{column.title}</th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index}>
                    {columns.map((column: any) => (
                      <td key={column.key}>{item[column.dataIndex]}</td>
                    ))}
                    <td>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  {columns.map((column: any) => (
                    <th key={column.key}>{column.title}</th>
                  ))}
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default PTable;
