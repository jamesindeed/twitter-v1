import React from 'react';
import Image from 'next/image';
import SidebarIcons from './SidebarIcons';
import { HomeIcon } from '@heroicons/react/outline';
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline';
import TwitterIcon from '../assets/twitter.png';
import { signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
      <div className='flex items-center justify-center p-0 w-14 h-14 hoverAnimation xl:ml-24'>
        <Image src={TwitterIcon} alt='TwitterIcon' width={30} height={30} />
      </div>
      <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
        <SidebarIcons text='Home' Icon={HomeIcon} active />
        <SidebarIcons text='Notifications' Icon={BellIcon} />
        <SidebarIcons text='Messages' Icon={InboxIcon} />
        <SidebarIcons text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarIcons text='Lists' Icon={ClipboardListIcon} />
        <SidebarIcons text='Profile' Icon={UserIcon} />
        <SidebarIcons text='More' Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md transition duration-400 hover:scale-[0.98] hover:bg-gradient-to-br from-[#1d9bf0] to-blue-400'>
        Tweet
      </button>
      <div
        className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5'
        onClick={signOut}
      >
        <img
          src={
            session
              ? session?.user.image
              : 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=PastelRed&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light'
          }
          alt=''
          className='h-10 w-10 rounded-full xl:mr-2.5'
        />
        <div className='hidden leading-5 xl:inline'>
          <h4 className='font-bold'>
            {session ? session.user.name : 'Anonymous'}
          </h4>
          <p className='text-[#6e767d]'>
            @{session ? session.user.tag : 'Anonymous'}
          </p>
        </div>
        <DotsHorizontalIcon className='hidden h-5 ml-10 xl:inline' />
      </div>
    </div>
  );
};

export default Sidebar;
