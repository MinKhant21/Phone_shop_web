import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL } from "../../../../utils/constant";
import axios from "axios";
import CategoryList from "../../components/category/categoryList";
import { Link } from "react-router-dom";
export default function Category() {
  const [categories, setCategories] = useState([]);
  const getCategories = useCallback(async () => {
    try {
      let res: any = await axios.get(`${BACKEND_URL}/category`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setCategories(res.data.categories);
    } catch (error: any) {
      console.log(error);
    }
  }, [BACKEND_URL]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  console.log(categories);
  return (
    <div className="  h-screen shadow-lg ">
      <Link
        to={"/dashboard/categories/create"}
        className="flex justify-center items-center   px-2 py-2 bg-meta-6 w-20 text-center rounded-md mx-10 my-4 text-white"
      >
        Add
      </Link>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Category List
        </h4>

        <div className="flex flex-col  text-center">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                ID
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                NAME
              </h5>
            </div>

            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                ACTION
              </h5>
            </div>
          </div>
          {categories.map((category, index) => (
            <CategoryList category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
