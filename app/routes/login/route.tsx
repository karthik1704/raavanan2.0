import type { V2_MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">Login to your account</h1>

        <Form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="phone">
              <p className="font-medium text-slate-700 pb-2">Phone Number</p>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter phone number"
              />
            </label>

            <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <span>Sent OTP</span>
            </button>
            <p className="text-center">
              Not registered yet?{" "}
              <a
                href="/"
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
               
           
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
