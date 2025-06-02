"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { feachuser, updateprofile } from '../actions/useraction';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "toastify-js/src/toastify.css"
import { Bounce } from 'react-toastify'


const Dashboard = () => {
    const [form, setform] = useState({});
    const route = useRouter()
    const { data: session, update } = useSession()

    useEffect(() => {

        
  document.title= 'Profile-Youser profile details'
  document.description= 'Profile- use for see a details for user  '


        getData();
        if (!session) {
            route.push('/login')
        }
    }, [route, session])

    const getData = async () => {
        let u = await feachuser(session?.user?.name)
        setform(u);
    }


    const handelChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handelSubmit = async (e) => {
        update();
        let a = await updateprofile(e, session.user.name);
          toast.success('Your Profile is Update sucssefull', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
    }

    return (
        <>
        
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="container m-auto ">

                <div className="profile md:max-w-[50vw] px-10 md:ps-0 m-auto ">
                    <div className="heading max-w-[80vw] m-auto ">
                        
                        <h2 className="font-bold text-3xl my-3 text-center mb-5">Your Profile</h2>
                    </div>
                    <form action={handelSubmit}>
                        <div className="my-2">
                            <label htmlFor="name " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>Name</label>

                            <input value={form.name ? form.name : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' name='name' id='name' type="text" />
                        </div>

                        <div className="my-2">
                            <label htmlFor="email " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>Email</label>

                            <input value={form.email ? form.email : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' id='email' name='email' type="email" />
                        </div>

                        <div className="my-2">
                            <label htmlFor="userName " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>UserName</label>

                            <input value={form.username ? form.username : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' name='username' id='userName' type="text" />
                        </div>

                        <div className="my-2">
                            <label htmlFor="profile " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>Profile Picture URL</label>

                            <input value={form.profilepic ? form.profilepic : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' name='profilepic' id='profilepic' type="text" />
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="cover " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>cover Picture URL</label>

                            <input value={form.coverpic ? form.coverpic : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' name='coverpic' id='coverpic' type="text" />
                            
                        </div>
                        <div className="my-2">
                            <label htmlFor="razorpayid " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>razorpay Id</label>

                            <input value={form.razorpayid ? form.razorpayid : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' name='razorpayid' id='razorpayid' type="password" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="razorpaysecret " className='block font-medium mx-2 mb-1 text-sm text-gray-50 dark:text-white'>razorpay Secret</label>

                            <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handelChange} className='w-full bg-slate-800 p-1 rounded-lg' name='razorpaysecret' id='razorpaysecret' type="password" />
                        </div>
                        <div className="my-8">
                            <button type='submit' className="flex justify-center items-center  text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}



export default Dashboard
