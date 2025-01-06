import Link from "next/link";


export default function Home() {
  return( 
     <div className="text-lg w-screen h-screen flex items-center justify-center"> <br />
      <div> 
      Todo Application
      <br />
      <Link href="./signin" className="border border-md"> Sign in</Link> <br />
      <Link href="./signup" className="border border-md"> Sign up</Link>
      </div>
  </div>
  )
}
