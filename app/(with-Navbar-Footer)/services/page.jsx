import React from "react";
import logo from "@/public/img/logo.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-pink-100 to-purple-200 p-8 rounded-2xl shadow-xl h-full w-full">
      <div className="flex-1 mx-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          تعرفه خدمات ناخن
        </h2>
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-pink-300 to-purple-300 text-white">
              <th className="border border-gray-400 px-6 py-3 text-lg">خدمت</th>
              <th className="border border-gray-400 px-6 py-3 text-lg">
                قیمت (تومان)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["کاشت پودر", "۳۰۰,۰۰۰"],
              ["کاشت ژل", "۳۰۰,۰۰۰"],
              ["ترمیم پودر", "۲۰۰,۰۰۰"],
              ["ترمیم ژل", "۲۰۰,۰۰۰"],
              ["ژلیش دست", "۱۴۰,۰۰۰"],
              ["ژلیش پا", "۱۲۰,۰۰۰"],
              ["کاور با پودر", "۲۰۰,۰۰۰"],
              ["کاور با ژل", "۲۰۰,۰۰۰"],
              ["لمینیت", "۱۸۰,۰۰۰"],
              ["فرنچ", "۹۰,۰۰۰"],
              ["آمبره", "۹۰,۰۰۰"],
              ["شکستگی", "۲۰,۰۰۰"],
              ["مانیکور ساده", "۵۰,۰۰۰"],
              ["پدیکور ساده و خشک", "۵۰,۰۰۰"],
              ["ریمو ژلیش", "۷۰,۰۰۰"],
              ["ریمو کاشت", "۸۰,۰۰۰"],
              ["تغییر لاک", "۸۰,۰۰۰"],
              
            ].map(([service, price], index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-6 py-4 text-lg">
                  {service}
                </td>
                <td className="border border-gray-400 px-6 py-4 text-lg">
                  {price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex-1 flex justify-center items-center mx-6">
        <Image
          src={logo}
          alt="Nail Services"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
