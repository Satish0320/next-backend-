// "use client"

// import axios from "axios";
// import { useRef } from "react"


// export default function Signin(){

//     const usernameref = useRef<HTMLInputElement>(null);
//     const passwordref = useRef<HTMLInputElement>(null)

//     async function handlesign(){

//         const username = usernameref.current?.value
//         const password = passwordref.current?.value

//            const response =await axios.post("http://localhost:3000/api/v1/signin",{
//                 username,
//                 password
//             });
//             console.log(response.data);
//     }

//     return  <div className="h-screen flex justify-center flex-col">
//         <div className="flex justify-center">
//         <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
//                 <div>
//                     <div className="px-10">
//                         <div className="text-3xl font-extrabold">
//                             Sign up
//                         </div>
//                     </div>
//                     <div className="pt-2">
//                          <input type="text" placeholder="text" ref={usernameref}/> 
//                          <input type="password" placeholder="text" ref={passwordref} /> 
//                         <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
//                         onClick={handlesign}
//                         >Sign in</button>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     </div>

    
// }