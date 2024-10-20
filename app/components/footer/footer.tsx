import Image from "next/image"
export default function footer() {
  return (
    <div className="text-white bg-gradient-to-br from-black to-gray-900 text-center pt-8 font-extrabold text-4xl font-serif  " >
        <h1 className="pb-4 border-b-2 border-gray-700">And! Finally Footer</h1>
        <div>
            <div >
                <ul className="flex justify-between text-3xl">
                    
                    <li>
                      <div className="text-left">
                      <h1 className="text-3xl">Information</h1>
                        <ul className="text-gray-500 text-lg font-normal font-mono hover:cursor-pointer">
                            <li>Pricing </li>
                            <li>About Us</li>
                            <li>API</li>
                            <li>Jobs</li>
                            <li>Sell Content</li>
                            <li>Brand Guideline</li>
                            <li>Event</li>
                            <li>Blogs</li>
                        </ul>
                        </div>
                    </li>
                    
                    <li>
                      <div className="text-left">
                       <h1 className="text-3xl">Legal</h1>
                        <ul className="text-gray-500 text-lg font-normal font-mono hover:cursor-pointer">
                            <li>Terms of Use</li>
                            <li>License Agreement</li>
                            <li>Privacy Policy</li>
                            <li>Copyright Information</li>
                            <li>Cookies Policy</li>
                            <li>Cookies Settings</li>
                        </ul>
                        </div>
                    </li>
                    <li>
                      <div className="text-left">
                        <h1 className="text-3xl">Support</h1>
                        <ul className="text-gray-500 text-lg font-normal font-mono hover:cursor-pointer">
                            <li>FAQ</li>
                            <li>Search Guide</li>
                            <li>Contact</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="mr-6">
                        <h1 className="text-3xl">Social Media</h1>
                        <ul className="text-gray-500 text-lg font-normal font-mono flex justify-center items-center ">
                          <li className="mr-2"><a href="https://www.facebook.com" target="_blank" className="hover:opacity-80  "><Image src="/images/Facebook.png" alt="logo" height={31} width={31}/></a></li>
                          <li className="mx-2"><a href="https://www.twitter.com" target="_blank" className="hover:opacity-80 "><Image src="/images/X.png" alt="logo" height={31} width={31} className="border-transparent rounded-full "/></a></li>
                          <li className="mx-2"><a href="https://www.instagram.com" target="_blank" className="hover:opacity-80 "><Image src="/images/instagram.png" alt="logo" height={31} width={31} /></a></li>
                          <li className="mx-2"><a href="https://github.com/Muhammad-Fahad-MF" target="_blank" className="hover:opacity-80 "><Image src="/images/github-logo.png" alt="logo" height={31} width={31} className="bg-white border-transparent rounded-full"/></a></li>
                        </ul>
                        <ul className="text-gray-500 text-lg font-normal font-mono flex justify-center items-center  ">
                        <li className="mr-2 my-3 "><a href="https://www.youtube.com" target="_blank" className="hover:opacity-80  "><Image src="/images/Youtube.png" alt="logo" height={31} width={31}/></a></li>
                          <li className="mx-2 my-3"><a href="https://www.linkedin.com/in/muhammad-fahad-a92a312b8/" target="_blank" className="hover:opacity-80 "><Image src="/images/LinkedIn.png" alt="logo" height={31} width={31}/></a></li>
                          <li className="mx-2 my-3"><a href="https://discord.com" target="_blank" className="hover:opacity-80 "><Image src="/images/discord.png" alt="logo" height={31} width={31}/></a></li>
                          <li className="mx-2 my-3"><a href="https://vercel.com/muhammad-fahad-mfs-projects" target="_blank" className="hover:opacity-80 "><Image src="/images/vercel.ico" alt="logo" height={31} width={31} /></a></li>
                        </ul>
                        <h3 className="text-lg text-gray-500 text-left">Get exclsive assets</h3>
                        <a href="https://myaccount.google.com" className="text-slate-400 hover:text-white text-2xl bg-gradient-to-br from-blue-700 to-cyan-600 px-2 rounded-lg" >Sign Up</a> 

                      </div>
                    </li>
                    
                </ul>
            </div>
            <div className="border-t-2 border-gray-500 flex justify-between items-center ">
            <div className="flex items-center ">
            <h1 className='font-serif font-bold text-3xl text-stone-300/60 my-3  '>Lorem Ipsum </h1>
            <h3 className="text-base pt-2 ml-3 my-3 text-stone-600/60">Copyright © 2007-2024 Lorem Ipsum Company.Ltd.All Rights Reserved.</h3>
            </div> 
            <div className="flex items-center">
              <Image src="/images/rb_1365.png" alt="Logo" width={85} height={65} className="mx-4 my-2"/>
            </div> 
            </div>
            <div className="bg-gray-500 text-left text-2xl text-black flex justify-between py-4">
              <h1 className="text-2xl">Lorem Ipsum Company Projects</h1>
              <div className="flex text-lg text-gray-800"><h1 className="px-2">Lorem</h1><h1 className="px-2">Ipsum</h1><h1 className="px-2">Dolor</h1><h1 className="px-2">Sit Amet</h1></div>


            </div>
        </div>
    </div>
  )
}
