import MonthlyChat from "./components/chart/MonthlyChat";
import DoughnutChart from "./components/chart/DoughnutChart";

export default function AdminDashBoard() {
  return (
    <>
      <div className=" p-10 w-full">
        <div className=" flex justify-between items-center">
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
        </div>
        <div className=" flex gap-10 mt-10">
          <div className=" w-[740px]">
            <MonthlyChat/>
          </div>
          <div className="flex justify-center items-center mx-auto w-[500px]">
            <DoughnutChart/>
          </div>
        </div>
      </div>
    </>
  )
}
