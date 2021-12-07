import "./Profile.css";
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../asset/include/navbar/Navbar";
import allLocation from "./allLocation";
import { getProfile } from "../service/proflie/getProfile";
import AddAddress from "./Add";
import Statusorder from "./Statusorder";

const locations = allLocation;
const profiles = getProfile();

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [local, setLocal] = useState([]);
  const [statusorder, setStatusorder] = useState();

  useEffect(() => {
    profiles.then(function (data) {
      console.log("name ::", data.data);
      console.log("local :", data.data.address);
      setProfile(data.data);
      setLocal(data.data.address);
    });
  });

  if (!profile) return null;

  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white font-body">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="text-4xl text-main-theme font-theme">โปรไฟล์ส่วนตัว</p>
          <div className="flex flex-col pt-2 mt-2">
            <div>
              <font className="text-gray-500">ชื่อ: </font>
              <font className="text-gray-900">{profile.name}</font>
            </div>
            <div>
              <font className="text-gray-500">อีเมล: </font>
              <font className="text-gray-900">{profile.username}</font>
            </div>
            <div>
              <font className="text-gray-500">เบอร์โทรศัพท์: </font>
              <font className="text-gray-900">{profile.phone_number}</font>
            </div>
            <div>
              <font className="text-gray-500">เปลี่ยนรหัสผ่าน </font>
            </div>
          </div>
        </div>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="text-4xl text-main-theme font-theme">ที่จัดส่ง</p>
          <div className="grid grid-cols-1 mt-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {local.map((location) => (
              <>
                <div className="flex flex-row max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md text-black">
                  <a href="#" className="px-2">
                    <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                      {location.name}
                    </p>
                    <p className="font-normal text-gray-700">
                      {location.country} {location.city}
                    </p>
                    <p className="font-normal text-gray-700">
                      {location.state} {location.district}
                    </p>
                    <p className="font-normal text-gray-700">
                      {location.postal_code}
                    </p>
                    <p className="font-normal text-gray-700">
                      {location.phone_number}
                    </p>
                  </a>
                  <div className="flex flex-col px-4">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <a href="./profile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                      </svg>
                    </a>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </>
            ))}
            <AddAddress></AddAddress>
          </div>
        </div>

        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="text-4xl text-main-theme font-theme">
            คำสั่งซื้อของฉัน
          </p>
          <div className="flex flex-col mt-2">
              {locations.map((location) => (
                <>
                <button type="button" onClick={() => setStatusorder(!statusorder)}>
                <div className="w-full">
                    <div className="p-4 rounded-lg bg-theme">
                      <div className="flex flex-row justify-between">
                        <div>
                          <font className="text-white ">เลขคำสั่งซื้อ </font>
                          <font className="font-medium text-white">
                            #00001234
                          </font>
                        </div>
                        <div>
                          <font className="font-medium text-white">
                            สถานะกำลังจัดส่ง
                          </font>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                {statusorder ? (
              <>
                {/* <button
                  className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                  onClick={() => setStatusorder(false)}
                >
                  <div>×</div>
                </button> */}
                <Statusorder></Statusorder>
              </>
            ) : null} 
                </>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
