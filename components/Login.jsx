import { signIn } from 'next-auth/react';
import Image from 'next/image';
import TwitterIcon from '../assets/twitter.png';

function Login({ providers }) {
  return (
    <div className='flex h-screen bg-black'>
      <div className='flex flex-col w-full max-w-xs p-8 m-auto space-y-8 bg-black border-2 rounded-lg'>
        <Image src={TwitterIcon} width={60} height={60} objectFit='contain' />

        <div className='mx-auto'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                <span className='w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-[#FBBC05] to-[#EA4335] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
                <span className='relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
                  Sign in with {provider.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
