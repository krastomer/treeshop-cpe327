import react from "react";
import Add from "../review/add.svg";
import { useForm } from "react-hook-form";
import Navbar from "../../asset/include/navbar/Navbar";
import { address } from "../service/editAdress/address.service";
import { getAddress } from "../service/editAdress/getAddress";
import { useHistory } from "react-router-dom";
import allLocation from "./allLocation";
import Applogo from "../../asset/include/navbar/LogoBanner.png";
import Statusbar from "../order/Statusbar";

export default function statusorder() {
  return (
    <div className="w-full h-full font-body bg-theme">
      <div className="bg-gray-50 font-body">
        <div className="max-w-2xl px-4 py-16 mx-auto rounded-lg sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <div className="grid justify-between grid-cols-1 mt-2 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8"> */}
          <div className="grid justify-between grid-row-3 mt-2 gap-y-10 gap-x-6  xl:gap-x-8">
            <div className="grid justify-between grid-cols-4 mt-2 gap-y-10 gap-x-6 xl:gap-x-8">
              {/* <div className="flex flex-row p-4 pt-2 pb-2 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-md max-w"> */}
              <div className="">
                <img classname="object-contain" src={Applogo} alt="Applogo" />
              </div>
              <div class="col-span-2">
                <Statusbar />
              </div>
              <div>
                {allLocation.map((location) => (
                  <>
                    <div className="flex flex-row p-4 pt-2 pb-2 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-md max-w">
                      <a href="#" className="px-2">
                        <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                          {location.name}
                        </p>
                        <p class="font-normal text-gray-700">
                          {location.disFirst}
                        </p>
                        <p class="font-normal text-gray-700">
                          {location.disSecond}
                        </p>
                        <p class="font-normal text-gray-700">
                          {location.postNumber}
                        </p>
                        <p class="font-normal text-gray-700">
                          {location.phoneNumber}
                        </p>
                      </a>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="grid justify-between grid-cols-4 mt-2 gap-y-10 gap-x-6 xl:gap-x-8 ">
              <div className="">
                <div className="relative flex justify-center ">
                  <img
                    src={
                      "https://www.jorakay.co.th/ckfinder/userfiles/images/%E0%B8%9E%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%9D%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B3%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A5%E0%B9%89%E0%B8%A1%E0%B8%97%E0%B8%B1%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%20%E0%B8%A1%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3%20%20%E0%B9%83%E0%B8%99%201.jpg"
                    }
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="grid justify-between grid-cols-2 ">
                <div className="relative flex justify-center items-center">
                  <p className="font-green">T001</p>
                </div>
                <div className="relative flex justify-center items-center">
                  <p className="font-brown">ต้นกุหลาบหิน</p>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <p className="font-green">2500 บาท</p>
              </div>
              <div className="flex flex-col px-4">
                <img
                  src={
                    "https://www.jorakay.co.th/ckfinder/userfiles/images/%E0%B8%9E%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%9D%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B3%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A5%E0%B9%89%E0%B8%A1%E0%B8%97%E0%B8%B1%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%20%E0%B8%A1%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3%20%20%E0%B9%83%E0%B8%99%201.jpg"
                  }
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="font-green text-xl font-bold">ราคา 2500 บาท</p>
              </div>
            </div>
            <div className="flex content-center object-center w-full h-full item-center ">
              <div className="p-6 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
