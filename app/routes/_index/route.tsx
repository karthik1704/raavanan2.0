import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar/navbar";
import { Button } from "~/components/shadcn/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Raavanan 2.0" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> 
    <Button className="w-full" onClick={()=>alert('Hey Idiot')}>HI</Button>
    </div>
  );
}
