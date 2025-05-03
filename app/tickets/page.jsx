"use client";

import { useState } from "react";

export default function Tickets() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(""); 
  const [selectedNailTech, setSelectedNailTech] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });


  const depositPrices = {
    "کاشت پودر": 100000,
    "کاشت ژل": 100000,
    "ترمیم پودر": 80000,
    "ترمیم ژل": 80000,
    "ژلیش دست": 60000,
    "ژلیش پا": 60000,
    "کاور با پودر": 80000,
    "کاور با ژل": 80000,
    "لمینیت": 60000,
    "فرنچ": 50000,
    "آمبره": 50000,
    "شکستگی": 20000,
    "مانیکور ساده": 30000,
    "پدیکور ساده و خشک": 30000,
    "ریمو ژلیش": 30000,
    "ریمو کاشت": 40000,
    "تغییر لاک": 40000,
  };

  const depositAmount = depositPrices[selectedService] || 0;

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ]; 

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("fa-IR", options);
  };

  const handleChangeDate = (direction) => {
    const newDate = new Date(selectedDate);
    if (direction === "next") {
      newDate.setDate(newDate.getDate() + 1);
    } else if (direction === "prev" && newDate > new Date()) {
      newDate.setDate(newDate.getDate() - 1);
    }
    setSelectedDate(newDate);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  // const handleTimeSelect = (time) => {
  //   setSelectedTime(time); 
  // };

  const handleNextStep = () => {
    if (step === 1 && (selectedService.length === 0 || !selectedNailTech)) {
      alert("لطفاً یک گزینه و یک ناخن کار انتخاب کنید.");
      return;
    }
    if (step === 2 && !selectedTime) {
      alert("لطفاً یک زمان انتخاب کنید.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  // const generateWeekDays = () => {
  //   const days = [];
  //   const today = new Date();
  //   today.setDate(today.getDate() + currentWeek * 7);

  //   for (let i = 0; i < 7; i++) {
  //     const day = new Date(today);
  //     day.setDate(today.getDate() + i);
  //     days.push(day);
  //   }

  //   return days;
  // };

  // const renderTimeSlots = () => {
  //   const timeSlots = ["9:00", "11:00", "13:00", "15:00", "17:00"];
  //   const weekDays = generateWeekDays();

  //   return (
  //     <div className="grid grid-cols-7 gap-4 text-center">
  //       {weekDays.map((day, index) => (
  //         <div key={index} className="border border-gray-300 p-2 rounded-lg">
  //           <div className="font-semibold text-pink-600">
  //             {day.toLocaleDateString("fa-IR", {
  //               weekday: "short",
  //               day: "numeric",
  //               month: "numeric",
  //             })}
  //           </div>
  //           {timeSlots.map((time, idx) => (
  //             <button
  //               key={idx}
  //               onClick={() =>
  //                 handleTimeSelect(
  //                   `${time} روز ${day.toLocaleDateString("fa-IR")}`
  //                 )
  //               }
  //               className={`mt-2 block w-full py-1 px-2 rounded ${
  //                 selectedTime ===
  //                 `${time} روز ${day.toLocaleDateString("fa-IR")}`
  //                   ? "bg-pink-600 text-white"
  //                   : "bg-pink-50 text-gray-700 hover:bg-pink-100"
  //               }`}
  //             >
  //               {time}
  //             </button>
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <main dir="rtl" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
            رزرو نوبت
          </h1>
          {step === 1 && (
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-pink-600 mb-4">مرحله 1: انتخاب خدمات</h2>
              <label className="block text-pink-600 mb-2">انتخاب خدمات</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
              >
                <option value="">لطفاً یک خدمت را انتخاب کنید</option>
                {Object.keys(depositPrices).map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <label className="block text-pink-600 mb-2">انتخاب ناخن‌کار</label>
              <select
                value={selectedNailTech}
                onChange={(e) => setSelectedNailTech(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
              >
                <option value="">لطفاً یک ناخن‌کار را انتخاب کنید</option>
                <option value="ریحانه">ریحانه</option>
                <option value="زهرا">زهرا</option>
              </select>
              <div className="flex justify-between">
                <button
                  disabled
                  className="px-4 py-2 bg-gray-300 text-white rounded-lg cursor-not-allowed"
                >
                  بازگشت
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500"
                >
                  تایید و ادامه
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-pink-600 mb-4">
                مرحله 2: انتخاب تاریخ
              </h2>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => handleChangeDate("prev")}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500"
                >
                  روز قبل
                </button>
                <span className="text-lg font-semibold text-pink-600">
                  {formatDate(selectedDate)}
                </span>
                <button
                  onClick={() => handleChangeDate("next")}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500"
                >
                  روز بعد
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                لطفاً یک زمان را انتخاب کنید:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelection(time)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedTime === time
                        ? "bg-pink-600 text-white border-pink-600"
                        : "bg-white text-gray-700 border-gray-300"
                    } hover:bg-pink-500 hover:text-white`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  بازگشت
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500"
                  disabled={!selectedTime}
                >
                  تایید و ادامه
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-pink-600 mb-2">
                مرحله 3: وارد کردن اطلاعات
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-pink-600">نام</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex items-center space-x-2 ltr:space-x-reverse"
                >
                  <span className="px-3 py-2 bg-gray-200 text-gray-700 rounded-l-md">
                    +98
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="9** *** ** **"
                    maxLength="10" 
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    onChange={handleFormChange}
                    value={formData.phone}
                    className="border border-gray-300 rounded-r-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                {formData.phone && formData.phone.length < 10 && (
                  <p className="text-red-500 text-sm mt-2">
                    شماره موبایل باید 10 رقم باشد.
                  </p>
                )}

                <div className="mb-4">
                  <label className="block text-pink-600">توضیحات</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevStep}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    بازگشت
                  </button>
                  <button
                    onClick={handleNextStep}
                    className={`mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 ${
                      !formData.name ||
                      !formData.phone ||
                      formData.phone.length < 10
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={
                      !formData.name ||
                      !formData.phone ||
                      formData.phone.length < 10
                    } 
                  >
                    تایید و ادامه
                  </button>
                </div>
              </form>
            </div>
          )}
          {step === 4 && (
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-semibold text-pink-600 mb-4">مرحله 4: اطلاعات شما</h2>
                <p className="text-gray-700 mb-4">
                  شما خدمات <strong>{selectedService}</strong> با ناخن‌کار <strong>{selectedNailTech}</strong> در
                  تاریخ <strong>{formatDate(selectedDate)}</strong> ساعت <strong>{selectedTime}</strong> انتخاب
                  کردید.
                </p>
                <p className="text-gray-700">نام: {formData.name}</p>
                <p className="text-gray-700">تلفن: {formData.phone}</p>
                <p className="text-gray-700 mb-4">توضیحات: {formData.description || "بدون توضیحات"}</p>
                <p className="text-gray-700 mb-4">
                  مبلغ بیعانه: <strong>{depositAmount.toLocaleString()} تومان</strong>
                </p>
                <div className="mt-6 text-center">
                  <a
                    href="https://ppng.ir/d/kzf9"
                    className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500"
                  >
                    پرداخت {depositAmount.toLocaleString()} تومان
                  </a>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevStep}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    بازگشت
                  </button>
                  <button
                    onClick={() => alert("رزرو انجام شد")}
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500"
                  >
                    تایید و رزرو
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </main>
  );
}
