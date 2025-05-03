"use client"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from "react-toastify"; 
import { useDispatch } from 'react-redux';
import { setRoleValue } from '@/store/slices/roleSlice';
import { logedToTrue } from '@/store/slices/logedSlice';
import { setuserImageValue } from '@/store/slices/userImageSlice';
import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';
import Link from 'next/link';

const SignUpComponent = () => {
   const dispatch=useDispatch();
   const router=useRouter();
   const [userBlogSlug,setuserBlogSlug]=useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch
   } = useForm({});

   useEffect(()=>{
      if(userBlogSlug!=false){
         router.push(`/blog/${userBlogSlug}`)
      }
   },[userBlogSlug]);

   const signUper = () => {
      toast.info("لطفا صبر کنید.", {
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });

      const formData = {
         username: watch("username"),
         phone: watch("phone"),
         password: watch("password"),
      }

      axios.post(`/api/user/sign-up`,formData)
      .then(data=>{
         toast.success("ثبت نام با موفقیت انجام شد.", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });

         dispatch(logedToTrue());
         dispatch(setRoleValue(3));
         dispatch(setuserImageValue(data.data.data.user_image));
         setuserBlogSlug(data.data.data.blog_slug);

      })
      .catch((error)=>{
         const message=error.response.data?error.response.data.data:"خطا در فرایند ثبت نام";
         toast.error(message, {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
      })


   }

  //  const activeBtn = {
  //     username: watch("username")?watch("username"):"",
  //     displayname: watch("displayname")?watch("displayname"):"",
  //     blog_name: watch("blog_name")?watch("blog_name"):"",
  //     phone: watch("phone")?watch("phone"):"",
  //     password: watch("password")?watch("password"):"",
  //  }

  return (
    <div className="flex h-screen items-center justify-center bg-pink-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600">
          ثبت‌نام
        </h2>
        <form onSubmit={handleSubmit(signUper)} className="space-y-4">
          <div>
            <input
              autoComplete="off"
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500"
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 20,
              })}
            />
            {errors.username && errors.username.type == "required" && (
              <div className=" text-rose-600 text-sm">
                لطفا نام و نام خانوادگی خود را وارد کنید...
              </div>
            )}
            {errors.username && errors.username.type == "minLength" && (
              <div className=" text-rose-600 text-sm">
                باید بیشتر از 4 کارکتر وارد کنید...
              </div>
            )}
            {errors.username && errors.username.type == "maxLength" && (
              <div className=" text-rose-600 text-sm">
                باید کمتر از 20 کارکتر وارد کنید....
              </div>
            )}
          </div>

          <div>
            <input
              autoComplete="off"
              type="text"
              placeholder="9** *** ** **"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500"
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors.phone && errors.phone.type == "required" && (
              <div className=" text-rose-600 text-sm">
                لطفا شماره تلفن را وارد کنید...
              </div>
            )}
            {errors.phone && errors.phone.type == "minLength" && (
              <div className=" text-rose-600 text-sm">
                باید 10 کارکتر وارد کنید...
              </div>
            )}
            {errors.phone && errors.phone.type == "maxLength" && (
              <div>
                <div className=" text-rose-600 text-sm">
                  باید 10 کارکتر وارد کنید...
                </div>
                <div className=" text-rose-600 text-sm">
                  لطفا از 0 و 98+ در ابتدای شماره همراه استفاده نکنید...
                </div>
              </div>
            )}
          </div>
          <div>
            <input
              autoComplete="off"
              type="password"
              placeholder="رمز عبور"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 24,
              })}
            />
            {errors.password && errors.password.type == "required" && (
              <div className=" text-rose-600 text-sm">
                لطفا رمز عبور را وارد کنید...
              </div>
            )}
            {errors.password && errors.password.type == "minLength" && (
              <div className=" text-rose-600 text-sm">
                باید بیشتر از 8 کارکتر وارد کنید...
              </div>
            )}
            {errors.password && errors.password.type == "maxLength" && (
              <div className=" text-rose-600 text-sm">
                باید کمتر از 24 کارکتر وارد کنید....
              </div>
            )}
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link href="/login" className="text-pink-500 hover:underline">
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignUpComponent;
