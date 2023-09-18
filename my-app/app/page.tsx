"use client";
import { signOut, useSession, signIn } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);

  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-semibold">My Website</div>
          <div>
            <a href="#" className="text-white mr-4 hover:text-gray-200">
              Home
            </a>
            <a href="#" className="text-white mr-4 hover:text-gray-200">
              About
            </a>
            <a href="#" className="text-white mr-4 hover:text-gray-200">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Contact
            </a>
          </div>
          {session?.user && (
            <div>
              <div className="text-white mr-4">{session.user?.name}</div>
              <span
                className="text-white hover:text-gray-200"
                onClick={() => signOut()}
              >
                Sign Out
              </span>
            </div>
          )}
        </div>
      </nav>
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet facilisis urna.
        </p>
      </div>
      {!session && (
        <div className="container mx-auto text-center">
          <span
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block mt-4"
            onClick={() => signIn()}
          >
            Sign In
          </span>
        </div>
      )}
      <footer className="bg-gray-200 py-4 text-center">
        <div className="container mx-auto">
          &copy; 2023 My Website. All rights reserved.
        </div>
      </footer>
    </>
  );
}
