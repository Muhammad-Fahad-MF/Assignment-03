import Header from "./components/header/header"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="text-yellow-100/90 bg-gradient-to-r from-sky-400/90 to-blue-600/90 text-center py-8 font-extrabold text-4xl font-serif" style={{backgroundImage:'url("/images/image.jpg")', backgroundRepeat:'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center',}}>
      <div className="hover:bg-gradient-to-tl from-blue-500/60 via-fuchsia-800/60 to-violet-900/60  hover:text-stone-900">
          <h1>Welcome to Banner Section!</h1>
          <h1>It is also called Hero Section.</h1>
          <h1>In Banner, We show our services that we provide. </h1>
          <h1>Web Development</h1>
          <h1>App Development</h1>
          <h1>Machine Learning</h1>
          <h1>Artificial Intelligence</h1>
          </div>
      </div>
      <div className="text-yellow-100/90 bg-gradient-to-r from-sky-400/90 to-blue-600/90 text-center py-8 font-extrabold text-4xl font-serif my-1" style={{backgroundImage:'url("/images/image2.jpeg")', backgroundRepeat:'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center',}}>
      <div  className="py-16 hover:bg-gradient-to-tl from-blue-500/60 via-fuchsia-800/60 to-violet-900/60 hover:text-stone-900 ">
          <h1>Welcome to CTA!</h1>
          <h1>Full Form of CTA is Call to Action.</h1>
          <h1>In CTA, We provide links to place order.</h1>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="hover:text-sky-400">Click Me to place order.</a>
      </div>
      </div>
      <div className="text-white bg-gradient-to-r from-sky-400/90 to-blue-600/90 text-center py-8 font-extrabold text-4xl font-serif my-1 " style={{backgroundImage:'url("/images/galaxy.jpg")', backgroundRepeat:'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center',}}>
          <h1>Welcome to About Us!</h1>
          <h1>In this section we provide information of ourselves.</h1>
          <h1>About our organization.</h1>
          <h1>How creative we are!</h1>
      </div>
      <Footer></Footer>   
    </div>
  )
}
