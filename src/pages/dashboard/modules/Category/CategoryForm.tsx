import { Link, useNavigate, useParams } from "react-router-dom";
import useSubmit from "../../../../hooks/useSubmit";
import { useCallback, useEffect, useState } from "react";
import useSearch from "../../../../hooks/useSearch";
import { BACKEND_URL } from "../../../../utils/constant";
import axios from "axios";
export default function CreateCategory() {
  let { id } = useParams();
  let [isEdit, setIsEdit] = useState(false);

  let { HandleInput, formData, setFormData, loading, HandleCategoryForm } =
    useSubmit();

  const [updateData, setUpdateData] :any[] = useState([]) ;

  let navigate = useNavigate();
  const HandleSubmit = async () => {
    if (isEdit) {
      let data = {
        name : updateData
      }
      await HandleCategoryForm(data, "PATCH", id);
      if (loading == false) {
        navigate("/dashboard/categories");
      }
    } else {
      await HandleCategoryForm(formData);
      if (loading == false) {
        navigate("/dashboard/categories");
      }
    }
  };


  const fetchHookSearchID =async () => {
    let res = await axios.get(
      `${BACKEND_URL}/search?id=${id}&module=Category`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    )
    setUpdateData(res.data.data)
  }  
  useEffect(() => {
    if (id) {
      setIsEdit(true);

      fetchHookSearchID();
      
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
              onChange={(e) =>
                setUpdateData(e.target.value)
              }
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
