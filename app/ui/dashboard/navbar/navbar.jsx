"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './navbar.module.css'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import { FaDiscord } from "react-icons/fa6";

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='search' className={styles.input}/>
        </div>
        <div className={styles.icon}>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <a href='https://discord.gg/QUW3Yah5aT'>
          <FaDiscord size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar