import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm, useWatch } from "react-hook-form";

function Signup() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <>
            <div className="flex h-screen items-center justify-center dark:text-black">
                <div className=" w-[600px] ">
                    <div className="modal-box">

                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">

                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </Link>


                            {/* Name */}

                            <h3 className="font-bold text-xl dark:text-black">Signup</h3>
                            <div className="mt-4 space-y-1">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className="text-red-500">Please enter fullname</span>}

                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-1">

                                <span>Email</span>

                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-4 py-2 border rounded-md  dark:text-black outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className="text-red-500">Please enter email</span>}

                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-1">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-4 py-2 border  dark:text-black rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className="text-red-500">Please enter your password</span>}
                            </div>
                            {/* Button */}
                            <div className="flex justify-between mt-4">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Signup
                                </button>
                                <p className='dark:text-black'>
                                    Have account?{" "}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
