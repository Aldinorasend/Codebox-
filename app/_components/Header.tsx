"use client";


import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

const courses = [
  {
    id: 1,
    name: "Frontend Development",
    desc: "Belajar membangun tampilan website modern dengan HTML, CSS, JavaScript, dan React.",
    path: "/courses/frontend",
  },
  {
    id: 2,
    name: "Backend Development",
    desc: "Mempelajari logika server, REST API, database, dan autentikasi menggunakan Node.js.",
    path: "/courses/backend",
  },
  {
    id: 3,
    name: "Fullstack Web",
    desc: "Menggabungkan frontend dan backend untuk membangun aplikasi web end-to-end.",
    path: "/courses/fullstack",
  },
  {
    id: 4,
    name: "UI/UX Design",
    desc: "Belajar desain antarmuka dan pengalaman pengguna yang intuitif dan menarik.",
    path: "/courses/ui-ux",
  },
  {
    id: 5,
    name: "Mobile App Development",
    desc: "Membangun aplikasi mobile menggunakan React Native atau Flutter.",
    path: "/courses/mobile",
  },
  {
    id: 6,
    name: "DevOps Fundamental",
    desc: "Pengenalan CI/CD, Docker, deployment, dan monitoring aplikasi.",
    path: "/courses/devops",
  },
  {
    id: 7,
    name: "Database & SQL",
    desc: "Memahami pengelolaan database relasional, query SQL, dan optimasi data.",
    path: "/courses/database",
  },
  {
    id: 8,
    name: "AI for Developer",
    desc: "Penerapan AI dan machine learning untuk meningkatkan aplikasi modern.",
    path: "/courses/ai",
  },
]
function Header() {
    const {user} = useUser();
  return (
    <div className='p-4 max-w-7xl flex mx-auto items-center w-full'>
        <div className='flex-1 flex gap-2 items-center'>
            <Image src={'/crown.png'} alt='logo' width={40} height={40}></Image>
            <h2 className='font-game text-4xl font-bold'>Codebox</h2>
        </div>

        {/* Navbar */}
        <div className='flex-1 flex justify-center'>
            <NavigationMenu>
                <NavigationMenuList className='gap-8'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid md:grid-cols-2 gap-4 p-4 sm:w-[400px] md:w-[600px] lg:w-[800px]'>
                                {courses.map((course, index)=>(
                                    <div key={index} className='p-2 hover:bg-accent'>
                                        <h2 className='font-semibold'>{course.name}</h2>
                                        <p className='text-xs'>{course.desc}</p>
                                    </div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/project'}>Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/about'}>Abouts</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/contact'}>Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        {/* Signup Button */}
        <div className='flex-1 flex justify-end'>
            {!user? 
            <Link href={'/sign-in'}>
                <Button className='font-game text-2xl' variant={'pixel'}>Signup</Button>
            </Link>
            :
            <div className='flex items-center gap-4'>
                <Button className='font-game text-2xl' variant={'pixel'}>Dashboard</Button>
                <UserButton />
            </div>
            }
        </div>
    </div>
  )
}

export default Header