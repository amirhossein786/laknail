import Link from "next/link";
import manikor from "@/public/img/manikor.jpg";
import pedikor from "@/public/img/pedikor.jpg";
import tarahy from "@/public/img/tarahy.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <section className="bg-pink-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          زیبایی دستانتان، هنر ماست
        </h1>
        <p className="text-gray-600 mb-6">
          بهترین خدمات مانیکور، پدیکور و طراحی ناخن در محیطی آرام و حرفه‌ای
        </p>
        <Link
          href="/tickets"
          className="bg-pink-600 text-white py-3 px-6 rounded-full text-lg shadow-lg hover:bg-pink-700"
        >
          رزرو نوبت
        </Link>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
          خدمات محبوب
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <Image
              src={manikor}
              alt="مانیکور"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-pink-700">مانیکور</h3>
            <p className="text-gray-600 mt-2">
              زیبایی و سلامت دستان شما با مانیکور حرفه‌ای
            </p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <Image
              src={pedikor}
              alt="پدیکور"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-pink-700">پدیکور</h3>
            <p className="text-gray-600 mt-2">
              رسیدگی کامل به پاهای شما با پدیکور حرفه‌ای
            </p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <Image
              src={tarahy}
              alt="طراحی ناخن"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-pink-700">طراحی ناخن</h3>
            <p className="text-gray-600 mt-2">
              طراحی‌های خاص و سفارشی مطابق با سلیقه شما
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
}
