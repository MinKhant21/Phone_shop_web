import MonthlyChat from "./components/chart/MonthlyChat";
import DoughnutChart from "./components/chart/DoughnutChart";
// import UserTable from '../dashboard/components/UserTable'

export default function AdminDashBoard() {
  
  return (
    <>
        <div className="  flex justify-between items-center">
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
          <div className=" py-16 px-40  rounded-md shadow-md border">Users</div>
        </div>
        <div className=" flex gap-10 mt-10 items-center">
          <div className=" w-[740px] shadow-md p-5 border">
            <MonthlyChat/>
          </div>
          <div className="flex justify-center items-center mx-auto w-[400px] ">
            <DoughnutChart/>
          </div>
        </div>
        {/* <UserTable/> */}
    </>
  )
}
