/* eslint-disable no-unused-vars */


// eslint-disable-next-line react/prop-types
const CategoryBox = ({ label, icon: Icon, description }) => {
    // console.log(label, icon, description)
    return (
        <div className=" flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        text-neutral-500
        hover:text-neutral-800
        transition
        cursor-pointer">
            <Icon size="26" />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;