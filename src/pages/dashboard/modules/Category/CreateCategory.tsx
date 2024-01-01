import { Link, useNavigate } from "react-router-dom";
import useSubmit from "../../../../hooks/useSubmit";
export default function CreateCategory() {
  let { HandleInput, formData, loading, HandleCategoryForm } = useSubmit();
  let navigate = useNavigate();
  const HandleSubmit = async () => {
    await HandleCategoryForm(formData);
    if (loading == false) {
      navigate("/dashboard/categories");
    }
  };
  return (
    <div className=" ">
      <Link
        to={"/dashboard/categories"}
        className="flex justify-center items-center   px-2 py-2 bg-primary w-20 text-center rounded-md mx-10 my-4 text-white"
      >
        Back
      </Link>
      <div className="rounded-sm  h-1/2  bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Create Category
        </h4>
        <hr className=" my-4" />
        <div className=" space-x-6">
          <label htmlFor="">Name : </label>
          <input
            type="text"
            onChange={HandleInput}
            name="name"
            className=" border-collapse border border-meta-1 p-2 rounded-md"
            placeholder=" Enter Category Name"
          />
          <button
            onClick={HandleSubmit}
            className=" px-2 py-2 bg-success text-white text-center cursor-pointer rounded-md"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
