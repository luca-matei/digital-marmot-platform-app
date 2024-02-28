'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeIconOutline from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from Material UI

export default function BaseAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden"> {/* Ensure full window size and prevent overflow */}
      <div className="w-16 bg-gray-800 flex flex-col justify-between"> {/* Sidebar remains unchanged */}
        <div className="flex flex-col items-center py-2"> {/* Center items and reduce padding */}
          <Link href="/" passHref>
            <Tooltip title="Logo" placement="right">
              <div className="cursor-pointer">
                {/* Replace `/logo.png` with your actual logo path */}
                <Image src="/logo.png" alt="Logo" width={40} height={40}/> {/* Adjust size if necessary */}
              </div>
            </Tooltip>
          </Link>
          <div className="flex flex-col items-center space-y-2 mt-4"> {/* Center icons and reduce space */}
            <Tooltip title="Dashboard" placement="right">
              <Link href="/dashboard" passHref>
                <div className="cursor-pointer">
                  <HomeIconOutline
                      className="text-gray-400 hover:text-primary transition-colors duration-200"/> {/* Updated for smoother transition */}
                </div>
              </Link>
            </Tooltip>
            <hr className="border-t-[0.5px] border-gray-600 w-3/4 my-2"/>
            {/* Slim separator */}
            <Tooltip title="Add" placement="right">
              <div className="cursor-pointer">
                <AddIcon className="text-gray-400 hover:text-primary transition-colors duration-200"/>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="pb-2 flex justify-center"> {/* Center the settings icon */}
          <Tooltip title="Settings" placement="right">
            <div className="cursor-pointer">
              <SettingsIcon className="text-gray-400 hover:text-primary transition-colors duration-200"/>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="flex-1 p-5 overflow-auto"> {/* Make main content area scrollable */}
        {children}
      </div>
    </div>
  );
}
