import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

// eslint-disable-next-line react/prop-types
const CategoryBox = ({ label, icon: Icon }) => {
  const [params] = useSearchParams();

  const navigate = useNavigate();

  const handleCategories = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  return (
    <button onClick={handleCategories}>
      <div
        className=" flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        text-neutral-500
        hover:text-neutral-800
        transition
        cursor-pointer"
      >
        <Icon size="26" />
        <div className="text-sm font-medium">{label}</div>
      </div>
    </button>
  );
};

export default CategoryBox;
