import useSubmit from "../../../../hooks/useSubmit";

interface CategoryProps {
  category: {
    category_id: string;
    name: string;
    handleDel: any;
  };
  index: number;
}

export default function CategoryList({
  category,
  index,
  handleDel,
}: CategoryProps) {
  let { HandleCategoryForm, FormData } = useSubmit();
  const HandleSubmit = async (id: string) => {
    //client del
    handleDel(id);
    //server Del
    await HandleCategoryForm(FormData, "DELETE", id);
  };

  return (
    <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-3">{index + 1}</p>
      </div>

      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p className="text-black dark:text-white">{category.name}</p>
      </div>

      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 space-x-5">
        <p className="text-meta-5 cursor-pointer">EDIT</p>
        <p
          onClick={() => HandleSubmit(category.category_id)}
          className=" text-meta-1 cursor-pointer"
        >
          DELETE
        </p>
      </div>
    </div>
  );
}
