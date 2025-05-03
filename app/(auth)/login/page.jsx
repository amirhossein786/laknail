// pages/login.js
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-pink-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600">ورود به حساب</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">شماره</label>
            <input
              type="text"
              id="number"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="9** *** ** **"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input
              type="password"
              id="password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="******"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600"
          >
            ورود
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          حساب کاربری ندارید؟ <Link href="/signup" className="text-pink-500 hover:underline">ثبت‌نام کنید</Link>
        </p>
      </div>
    </div>
  );
}
