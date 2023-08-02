"use client";

import Contact from "@/components/contact/Contact";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";
import Topbar from "@/components/topbar/Topbar";
import Skills from "@/components/skills/Skills";
import "./page.scss"
import { useState } from "react";
import Menu from "@/components/menu/Menu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}
