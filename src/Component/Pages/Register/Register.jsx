import React from 'react';

const Register = () => {
    return (
        <div className='hero bg-orange-300 min-h-screen text-white'>
            <div className=" w-[25%] rounded-2xl bg-orange-400 p-8 m-8 ">
                <p className="text-center text-2xl font-bold leading-8">Sign UP</p>

                <form className="mt-6">

                    <div className="mt-1 text-sm leading-5">
                        <label htmlFor="username" className="block  mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="w-full rounded-lg border border-gray-800  px-4 py-3 text-gray-100 outline-none focus:border-orange-300"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="mt-1 text-sm leading-5">
                        <label htmlFor="email" className="block  mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full rounded-lg border border-gray-800  px-4 py-3 text-gray-100 outline-none focus:border-orange-300"
                            placeholder="Email"
                        />
                    </div>

                    <div className="m-1 text-sm leading-5">
                        <label htmlFor="password" className="block  mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full rounded-lg border  border-gray-800  px-4 py-3 text-gray-100 outline-none focus:border-orange-300"
                            placeholder="Password"
                        />
                    </div>

                    <div className="m-1 text-sm leading-5">
                        <label htmlFor="password" className="block  mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmpasswor"
                            id="confirmpassword"
                            className="w-full rounded-lg border  border-gray-800  px-4 py-3 text-gray-100 outline-none focus:border-orange-300"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-8 block w-full px-3 py-3 text-center border border-gray-800 rounded-lg font-semibold  outline-none hover:bg-amber-600"
                    >Submit   
                 </button>
                </form>



                <p className="text-center text-xs leading-4 pt-5">
                    {"Already have an account? "}
                    <a href="" className="ml-2 text-violet-800 underline">
                        Login
                    </a>
                </p>
            </div>
        </div>

    );
};

export default Register;