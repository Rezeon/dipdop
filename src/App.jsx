import './App.css'
import { Header } from './component/Header'
import Team from '/grub.png'
import Team2 from '/grub2.png'
import Team3 from '/grub3.png'
import Comunity from '/comunity.png'
import Umkm from '/umkm.png'
import Dipdop2 from '/dipdop2.png'
import Ecommerce from '/ecommerce.png'
import { Footer } from './component/Footer'

function App() {
  const dip = [
    {
      img: Umkm,
      desc: "Jangan ketinggalan info peluang bisnis! Follow @umkmupdate.id, teman setia UMKM Indonesia dalam berbagi info pelatihan, dana bantuan, dan tips promosi terkini. Kami juga membuka ruang luas untuk partnership dan kolaborasi melalui link di bio kami.",
      link: "https://www.instagram.com/dipdop.community?igsh=OHpleTNteDJjeHVj"
    },
    {
      img: Comunity,
      desc: "Platform kreatif ini didedikasikan untuk menyajikan berbagai proyek inovatif dan acara seru yang dirancang khusus untuk memberdayakan individu. Jangan lewatkan juga update terbaru tentang gerakan UMKM . Yuk, jadi bagian dari keseruan kami!",
      link: "https://www.instagram.com/dipdop.community?igsh=OHpleTNteDJjeHVj"
    },
    {
      img: Dipdop2,
      desc: "DIPDOP adalah agensi digital inovatif yang membantu bisnis dan individu berkembang melalui layanan Branding, Marketing, Publishing, dan Pelatihan Kapasitas. Berdiri sejak 2018, kami berdedikasi menciptakan identitas kuat dan strategi digital yang berdampak nyata.",
      link:"https://dipdop.net/"
    },
    {
      img: Ecommerce,
      desc: "Toko yang menyediakan merchandise untuk dipdop.",
      link:"https://www.ciptaloka.com/+dipdop/"
    },
  ]
  return (
    <>
      <Header />
      <div className='w-full flex flex-col bg-white'>
        <div className='w-full border-t border-gray-800 border-b h-32 flex justify-center items-center'>
          <h2 className='w-full h-full p-2 flex justify-center items-center text-4xl text-gray-900 font-bold uppercase gap-2'>CREATIVE One-Stop Communication <p className='text-teal-800'> Agency</p></h2>
        </div>
        <div className='w-full h-120 flex bg-[#E5E5E5]'>
          <img src={Team} className='w-2/3 h-full' alt="" />
          <div className='w-1/3 h-full flex flex-col gap-44 p-10 '>
            <h1 className='w-full h-auto text-2xl font-bold text-black'>FOR THE COMMITTED</h1>
            <article className='w-full h-auto text-lg text-gray-800'>
              DIPDOP is a Creative One-Stop Communication Agency, trusted by Institutions, Start-up, SME, and Digital Nomad. We have vast experience of both small and large scale projects. Chrismasopy Bintari https://www.youtube.com/watch?v=v6ujwA8QWD8 Stay
            </article>
          </div>
        </div>
        <div className='w-full h-120 flex  bg-[#E5E5E5]'>
          <div className='w-1/3 h-full flex border-black border-b border-r flex-col gap-44 p-10 '>
            <h1 className='w-full h-auto text-2xl font-bold text-black'>CREATED by experts</h1>
            <article className='w-full h-auto text-lg text-gray-800'>
              We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.
            </article>
          </div>
          <div className='w-1/3 h-full flex border-black border-b flex-col gap-44 p-10 '>
            <h1 className='w-full h-auto text-2xl font-bold text-black'>DYNAMIC DIGITAL AGENCY</h1>
            <article className='w-full h-auto text-lg text-gray-800'>
              We are your partner in digital transformation, offering comprehensive solutions in product branding, professional website development, digital marketing, and design services to elevate your online presence.
            </article>
          </div>
          <img src={Team2} className='w-1/3 aspect-video' alt="" />
        </div>
        <h1 className='w-full h-auto text-7xl p-10 flex gap-6 font-extrabold text-black'>WORK WITH <p className='text-teal-700'>US</p></h1>
        <div className='w-full h-auto flex bg-[#E5E5E5] text-gray-800 border-t border-b border-black'>
          <div className='w-1/2 h-[600px] flex flex-col '>
            <h1 className='w-full h-[151px] border-b border-black text-black p-10 text-3xl font-extrabold '>
              DISCOVER YOUR POTENTIAL
            </h1>
            <div className='w-full h-[124px] flex flex-col gap-4 p-4 border-b border-black '>
              <h2 className='text-xl font-bold text-black'>EXPERT SOLUTIONS</h2>
              <p>
                Professional consultants dedicated to your business growth.
              </p>
            </div>
            <div className='w-full h-[124px] flex flex-col gap-4 p-4 border-b border-black '>
              <h2 className='text-xl font-bold text-black'>RESULTS-DRIVEN STRATEGIES</h2>
              <p>
                Digital campaigns and websites designed to deliver tangible, measurable success.
              </p>
            </div>
            <div className='w-full h-[124px] flex flex-col gap-4 p-4 border-b border-black '>
              <h2 className='text-xl font-bold text-black'>A CREATIVE PARTNERSHIP</h2>
              <p>
                A collaborative team that pushes your brand to be its absolute best.
              </p>
            </div>
            <div className='w-full h-[124px] flex flex-col gap-4 p-4  border-black '>
              <h2 className='text-2xl font-bold text-black'>DIPDOP</h2>
            </div>

          </div>
          <img src={Team3} className='aspect-auto w-full h-[600px] ' alt="" />
        </div>
        <div className='w-full h-auto pb-8 pt-8 flex justify-center flex-col bg-[#588A96] '>
          <div className='flex flex-col justify-center p-10 items-center'>
            <p className='text-black'>WHAT WE BELIVE</p>
            <h1 className='text-4xl text-black font-bold'>WORK WITH US</h1>
          </div>
          {dip.map((d) => {
            return (
              <div className='w-full flex border-black border-t border-b h-100 '>
                <div className='w-full h-full bg-[#E5E5E5] font-semibold text-lg text-gray-800 flex flex-col pr-5 pl-5 pt-10 pb-10 justify-between '>
                  <p className='w-full h-auto '>{d.desc}</p>
                  <a className='w-fit rounded-xl h-15 flex justify-center items-center text-center text-lg p-3 text-white font-bold bg-[#588A96] ' href={d.link}>Learn More...</a>
                </div>
                <img src={d.img} className='w-[28%] h-auto' alt={d.desc} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
