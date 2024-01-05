import { Link, useNavigate, useParams } from "react-router-dom";
import useSubmit from "../../../../hooks/useSubmit";
import { useCallback, useEffect, useState } from "react";
import useSearch from "../../../../hooks/useSearch";
export default function CreateCategory() {
  let { id } = useParams();
  let [isEdit, setIsEdit] = useState(false);

  let { HandleInput, formData, setFormData, loading, HandleCategoryForm } =
    useSubmit();
  let { searchIdFetch, searchData } = useSearch();

  const [updateData, setUpdateData] = useState({ name: "" });


  let navigate = useNavigate();
  const HandleSubmit = async () => {
    if (isEdit) {
      alert("editform");
      // let data  = {
      //   name: updateData,
      // } as any;
      // await HandleCategoryForm(data, "PATCH", searchData.category_id);
      // if (loading == false) {
      //   navigate("/dashboard/categories");
      // }
    } else {
      await HandleCategoryForm(formData);
      if (loading == false) {
        navigate("/dashboard/categories");
      }
    }
  };

  const fetchHookSearchID = useCallback(async () => {
    let res = await searchIdFetch({ id, module: "Category" });
    console.log(res)
      // console.log(searchData)
      // await setUpdateData((prev) => ({ ...prev, name: searchData.name }));
      // console.log(updateData);
  }, [searchIdFetch, setUpdateData, id, searchData]);
  
  useEffect(() => {
    if (id) {
      setIsEdit(true);
        fetchHookSearchID();
      console.log('mounted')
      console.log(updateData)
      console.log('unmounted')

    } else {
      setIsEdit(false);
    }
  }, []);
  
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
          {isEdit ? "Edit Category" : "Create Category"}
        </h4>
        <hr className=" my-4" />
        <div className=" space-x-6">
          <label htmlFor="">Name : </label>
          {isEdit ? (
            <input
            type="text"
            name="name"
            value={updateData.name}
            onChange={(e) => setUpdateData((prev) => ({ ...prev, name: e.target.value }))}
            className="border-collapse border border-meta-1 p-2 rounded-md"
            placeholder="Enter Category Name"
          />
          ) : (
            <input
              type="text"
              name="name"
              onChange={HandleInput}
              className="border-collapse border border-meta-1 p-2 rounded-md"
              placeholder="Enter Category Name"
            />
          )}
          <button
            onClick={HandleSubmit}
            className={`px-2 py-2 ${
              isEdit ? "bg-primary" : "bg-success"
            } text-white text-center cursor-pointer rounded-md`}
          >
            {isEdit ? "Upate" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
