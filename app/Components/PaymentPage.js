"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { feachpayment, feachuser, initiate } from '../actions/useraction'
import { useSession } from "next-auth/react"
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import "toastify-js/src/toastify.css"
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
    const [currantuser, setcurrantuser] = useState({})
    const [payments, setpayments] = useState([])
    const { data: session } = useSession()
    const serchParams = useSearchParams()
    const router = useRouter()

    const handelChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    useEffect(() => {


        getData()
    }, [])

    useEffect(() => {

        if (serchParams.get("paymentdone") == "true") {
            toast.success('Your Mony risiving sucssfull', {
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
        router.push(`/${username}`)
    }, [])



    const getData = async (params) => {
        let u = await feachuser(username);
        setcurrantuser(u)

        let dbpayment = await feachpayment(username);
        setpayments(Array.isArray(dbpayment) ? dbpayment : (dbpayment ? [dbpayment] : []))
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            "key": currantuser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Get Me a Chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };



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


            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>



            <div className='cover w-full relative'>
                <img className='object-cover h-[55vh] w-full' src={currantuser.coverpic} alt="" />
                <div className="profilepic absolute -bottom-9 md:left-[46.5%] left-[43%]">
                    <img className=' rounded-full size-15 md:size-22' width={100} height={100} src={currantuser.profilepic} alt="" />

                </div>
            </div>
            <div className="info flex justify-center items-center my-12 flex-col gap-2">
                <div className="font-bold text-lg">
                    @{username}
                </div>
                <div className="text-slate-400">
                    Buy <span className="font-bold">"{username}"</span> Hand Makinge Chai
                </div>
                <div className="text-slate-400 mb-10">
                    {payments.length} Cup sell a chai and collect Monay is {payments.reduce((a, b) => a + b.amount, 0)}
                </div>
                <div className="payment px-5 flex gap-2 md:w-[80%] w-full  items-center  md:flex-row flex-col">
                    <div className="suppoters md:w-1/2 bg-slate-900 p-10 rounded-lg">
                        <h2 className="font-bold text-xl my-5 text-center">Suppoters</h2>
                        <ul className='my-[1px] min-h-70 '>
                            {payments.map((p, i) => {

                                return <li key={i} className=' text-sm flex gap-1  items-start'>
                                    <img width={33} className='bg-none' src="user.gif" alt="user" />
                                    <span>
                                        {p.name} doneted a <span className='font-bold'>₹{p.amount} </span>with a massage "{p.message}"
                                    </span>
                                </li>
                            })
                            }
                        </ul>
                    </div>
                    <div className="makepayment px-5 md:w-1/2 w-full  bg-slate-900  p-10 rounded-lg">
                        <h2 className="font-bold text-xl my-3">Make a Payment</h2>
                        <div className="flex gap-2 flex-col min-h-60">
                            <input onChange={handelChange} value={paymentform.name || ''} name='name' className='w-full p-2 bg-slate-800 rounded-lg' type="text" placeholder='Enter Name' />
                            <input onChange={handelChange} name='message' value={paymentform.message || ''} className='w-full p-2 bg-slate-800 rounded-lg' type="text" placeholder='Enter massage' />

                            <input onChange={handelChange} value={paymentform.amount || ''} name='amount' className='w-full p-2 bg-slate-800 rounded-lg' type="text" placeholder='Enter Amount' />
                            <button type="button" onClick={() => pay(Number(paymentform.amount) * 100)} className="cursor-pointer text-white bg-gradient-to-r from-cyan-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:to-slate-900" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3 || paymentform.amount?.length < 1}>Pay</button>
                        </div>
                        <div className=" flex gap-2 mt-5">
                            <button className="cursor-pointer bg-slate-800 p-2 px-5 rounded-lg" onClick={() => pay(1000)}>₹10</button>
                            <button className="cursor-pointer bg-slate-800 p-2 px-5 rounded-lg" onClick={() => pay(2000)}>₹20</button>
                            <button className="cursor-pointer bg-slate-800 p-2 px-5 rounded-lg" onClick={() => pay(5000)}>₹50</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default PaymentPage;
