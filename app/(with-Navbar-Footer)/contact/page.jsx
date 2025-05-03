import Image from "next/image";
import eitta from "@/public/img/eitaa.png";
import telegram from "@/public/img/telegram.png";
import whatsapp from "@/public/img/whatsapp.png";
import phone from "@/public/img/phone.png";
import instagram from "@/public/img/instagram.png";
import Gmail from "@/public/img/Gmail.png";

export default function contact() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-teal-200 to-teal-400 flex justify-center items-center py-10">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          ارتباط با ما
        </h2>
        <div dir="rtl" className="space-y-6">
          <div className="flex items-center hover:bg-teal-100 p-5 rounded-lg transition duration-300 ease-in-out shadow-md">
            <Image className="w-10 h-10 mr-4" src={telegram} alt="تلگرام" />
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700">
                تلگرام:
              </label>
              <a
                href="https://telegram.me/+09352147921"
                className="text-teal-600 hover:underline text-lg"
              >
                laknail_zahra
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-teal-100 p-5 rounded-lg transition duration-300 ease-in-out shadow-md">
            <Image className="w-10 h-10 mr-4" src={whatsapp} alt="واتساپ" />
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700">
                واتساپ:
              </label>
              <a
                href="https://wa.me/+09352147921"
                className="text-teal-600 hover:underline text-lg"
              >
                laknail_zahra
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-teal-100 p-5 rounded-lg transition duration-300 ease-in-out shadow-md">
            <Image className="w-10 h-10 mr-4" src={phone} alt="تلفن" />
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700">تلفن:</label>
              <a
                href="tel:09352147921"
                className="text-teal-600 hover:underline text-lg"
              >
                09352147921
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-teal-100 p-5 rounded-lg transition duration-300 ease-in-out shadow-md">
            <Image
              className="w-10 h-10 mr-4"
              src={instagram}
              alt="اینستاگرام"
            />
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700">
                اینستاگرام:
              </label>
              <a
                href="https://instagram.com/laknail_zahra"
                className="text-teal-600 hover:underline text-lg"
              >
                laknail_zahra
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-teal-100 p-5 rounded-lg transition duration-300 ease-in-out shadow-md">
            <Image className="w-10 h-10 mr-4" src={eitta} alt="ایتا" />
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700">ایتا:</label>
              <a
                href="https://web.eitaa.com/+09352147921"
                className="text-teal-600 hover:underline text-lg"
              >
                laknail_zahra
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-teal-100 p-5 rounded-lg transition duration-300 ease-in-out shadow-md">
            <Image className="w-10 h-10 mr-4" src={Gmail} alt="ایمیل" />
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700">
                ایمیل:
              </label>
              <a
                href="mailto:reihanehnzr@gmail.com"
                className="text-teal-600 hover:underline text-lg"
              >
                reihanehnzr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
