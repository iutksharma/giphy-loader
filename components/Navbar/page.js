"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'


const navbar = (params) => {

  const router = useRouter();
  const [user] = useAuthState(auth);



  const [slug, setslug] = useState('')

  async function searchHandler(e) {
    try {
      e.preventDefault();

      setslug("")
      params.length = 0;
      router.push(`/search/${slug}`);

    } catch (error) {
      console.log(error)
    }
  }




  return (
    <>

      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 ">
        <Link className="flex items-center space-x-2" href="/">
          <span className=" text-2xl font-bold">
           Giphy
          </span>
        </Link>
        {user &&
          <form onSubmit={searchHandler} className="flex items-center pl-32" >

            <div className="flex border overflow-hidden border-black rounded-md">
              <input
                type="text" value={slug} onChange={(e) => setslug(e.target.value)}
                className=" border w-screen p-2 md:w-80 rounded-md placeholder:font-thin focus:outline-none"
                placeholder="Search your imagination..."
              />

              <button className="text-white bg-black px-2 " type='submit'>Search</button>


            </div>
          </form>


        }
     <div className="flex items-center space-x-4">
        {user ? (
          <Link href="/favorites" className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer">
            Favorites
          </Link>
        ) : (
          ""
        )}
        <button
          className="bg-black text-white py-2 px-4 rounded-md cursor-pointer"
          onClick={() => {
            signOut(auth);
            router.push('/')
          }}
        >
          {user ? "LogOut" : "LogIn"}
        </button>
      </div>


      </div>

    </>
  )
}

export default navbar