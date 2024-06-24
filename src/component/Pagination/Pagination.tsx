const Pagination = () => {
  const paginationConfig = {
    pageSize: 5,
    total: 20,
    // pageSizeOptions: [5, 10, 20],
    // showSizeChanger: showSizeChanger,
    // onChange: onPaginationChange,
  };

  return (
    <div>
      <div className='pagination-section flex justify-center m-2'>
        <div className='join'>
          <button className='join-item btn'>1</button>
          <button className='join-item btn'>2</button>
          <button className='join-item btn btn-disabled'>...</button>
          <button className='join-item btn'>99</button>
          <button className='join-item btn'>100</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
