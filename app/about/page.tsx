import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Image from "next/image"

export default function About() {
  return (
    <div>
        <Header></Header>
        <div className="text-white bg-gradient-to-r from-sky-400/90 to-blue-600/90 text-center py-8 font-extrabold text-4xl font-serif my-1 " style={{backgroundImage:'url("/images/galaxy.jpg")', backgroundRepeat:'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center',}}>
          <h1>Welcome to About Us!</h1>
          <h1>In this section we provide information of ourselves.</h1>
          <h1>About our organization.</h1>
          <h1>How creative we are!</h1>
          <h1>I copy pasted it from home just to add functionality.</h1>
          <h1>Main Assignment was Landing Page.</h1>
          <h1 className="flex justify-center"><a href="https://github.com/Muhammad-Fahad-MF" target="_blank" className="hover:opacity-80 "><Image src="/images/github-logo.png" alt="logo" height={50} width={50} className="bg-white border-transparent rounded-full"/></a></h1>
      </div>
        <Footer></Footer>
    </div>
  )
}
