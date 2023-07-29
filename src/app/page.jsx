import Contact from "@/components/contact/Contact";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";
import Topbar from "@/components/topbar/Topbar";
import Works from "@/components/works/Works";
import "./page.scss"

export default function Home() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  )
}
