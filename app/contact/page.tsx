import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Contact() {
  return (
    <div>
        <Header></Header>
        <div>
        <div className="text-yellow-100/90 bg-gradient-to-r from-sky-400/90 to-blue-600/90 text-center py-8 font-extrabold text-4xl font-serif" style={{backgroundImage:'url("/images/image.jpg")', backgroundRepeat:'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center',}}>
      <div className="hover:bg-gradient-to-tl from-blue-500/60 via-fuchsia-800/60 to-violet-900/60  hover:text-stone-900">
          <h1>Welcome to Contact Us Page!</h1>
          <h1>In Contact, We provide our info and Social Media Links. </h1>
          <h1>Email!</h1>
          <h1>Facebook Instagram</h1>
          <h1>Twitter LinkedIn</h1>
          <h1>Discord</h1>
          </div>
      </div>
        </div>
        <Footer></Footer>

    </div>
  )
}
