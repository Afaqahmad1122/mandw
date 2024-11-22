// BasicDetails.jsx
const BasicDetails = () => {
  return (
    <section className='p-4 md:p-6 w-full'>
      <h1 className='font-semibold text-lg mb-4'>Basic Details</h1>

      {/* Basic Details Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6  bg-white rounded-lg shadow border  p-3'>
        {/* Project Name */}
        <div className='flex flex-col space-y-1'>
          <span className='text-sm font-medium text-gray-500'>
            Project Name:
          </span>
          <span className='text-base font-semibold text-gray-700'>
            Implementation of new dashboard
          </span>
        </div>

        {/* Status */}
        <div className='flex flex-col space-y-1'>
          <span className='text-sm font-medium text-gray-500'>Status:</span>
          <div className='flex items-center space-x-3'>
            <span className='text-sm text-nowrap text-[#071C2E]'>On track</span>
            <div className='relative w-3/4 h-2 bg-gray-200 rounded'>
              <div
                className='absolute top-0 left-0 h-2 bg-blue-500 rounded'
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className='text-sm font-medium text-gray-500'>80%</span>
          </div>
        </div>

        {/* Description */}
        <div className='col-span-1 md:col-span-2 flex flex-col space-y-1'>
          <span className='text-sm font-medium text-gray-500'>
            Description:
          </span>
          <p className='text-sm text-gray-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Start Date */}
        <div className='flex flex-col space-y-1'>
          <span className='text-sm font-medium text-gray-500'>Start Date:</span>
          <span className='text-sm text-gray-700'>Mon, June 10, 2022</span>
        </div>

        {/* End Date */}
        <div className='flex flex-col space-y-1'>
          <span className='text-sm font-medium text-gray-500'>End Date:</span>
          <span className='text-sm text-gray-700'>Wed, June 15, 2022</span>
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;
