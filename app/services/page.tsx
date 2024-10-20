import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Services() {
  return (
    <div>
        <Header></Header>
        <div>
        <div className="text-yellow-100/90 bg-gradient-to-r from-sky-400/90 to-blue-600/90 text-center py-8 font-extrabold text-4xl font-serif my-1" style={{backgroundImage:'url("/images/image2.jpeg")', backgroundRepeat:'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center',}}>
      <div  className="py-16 hover:bg-gradient-to-tl from-blue-500/70 via-fuchsia-800/70 to-violet-900/60 hover:text-stone-900 ">
          <h1>Welcome to Services Page!</h1>
          <h1>Our services are :</h1>
          <h1>Web Development</h1>
          <h1>App Development</h1>
          <h1>Machine Learning</h1>
          <h1>Artificial Intelligence</h1>
          <h1>Cloud Structure</h1>     
      </div>
      </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
