/* eslint-disable react/prop-types */
const NoDataFound = ({ title, subtitle, center }) => {
    return (
      <div className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-bold mt-20'>{title}</div>
        <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
      </div>
    )
  }
  
  export default NoDataFound