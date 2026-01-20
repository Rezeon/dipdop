import './App.css'
import { Header } from './component/Header'
import Team from '/grub.jpg'
import A from '/a.jpg'
import { Footer } from './component/Footer'
import { useState } from 'react'
import { FaRegMessage } from "react-icons/fa6";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dipData = [
    {
      "id": 1,
      "unit": "DIPDOP AGENCY",
      "category": "CREATIVE & MARKETING AGENCY",
      "description": "DIPDOP Agency menyediakan solusi kreatif dan pemasaran digital untuk brand, UMKM, dan institusi. Kami membantu perencanaan strategi komunikasi, kampanye digital, serta aktivasi berbasis komunitas yang relevan dan berdampak.",
      "scopes": [
        "Digital marketing & campaign",
        "Branding & content strategy",
        "Event & community activation"
      ],
      "link": "https://dipdop.net"
    },
    {
      "id": 2,
      "unit": "DIPDOP MERCH (CIPTALOKA)",
      "category": "CREATIVE MERCHANDISE PLATFORM",
      "description": "DIPDOP Merch menghadirkan produk merchandise sebagai media komunikasi brand, identitas komunitas, serta sarana kolaborasi kreatif dalam berbagai kampanye dan kegiatan.",
      "scopes": [
        "Merchandise komunitas & event",
        "Custom product untuk brand & CSR",
        "Limited collaboration items"
      ],
      "link": "https://www.ciptaloka.com/+dipdop/"
    },
    {
      "id": 3,
      "unit": "DIPDOP COMMUNITY",
      "category": "COMMUNITY DEVELOPMENT & COLLABORATION HUB",
      "description": "DIPDOP Community merupakan ruang kolaboratif bagi pelaku UMKM, anak muda, kreator, dan komunitas untuk bertumbuh melalui program edukasi, diskusi, dan kolaborasi lintas sektor.",
      "scopes": [
        "Webinar & kelas edukasi",
        "Program komunitas & mentoring",
        "Kolaborasi brand & CSR"
      ],
      "link": "https://www.instagram.com/dipdop.community"
    },
    {
      "id": 4,
      "unit": "UMKM UPDATE",
      "category": "DIGITAL MEDIA FOR UMKM",
      "description": "UMKM Update adalah media digital yang berfokus pada edukasi, informasi, dan eksposur UMKM. Media ini menjadi kanal distribusi konten, kampanye, dan pesan brand yang ingin menjangkau pelaku usaha secara langsung.",
      "scopes": [
        "Edukasi & insight UMKM",
        "Promosi & storytelling",
        "Kampanye kolaboratif"
      ],
      "link": "https://www.instagram.com/umkmupdate.id"
    }
  ]
  const collaborationData = {
    title: "WHY COLLABORATE WITH DIPDOP",
    reasons: [
      "PENDEKATAN EKOSISTEM, BUKAN ONE-OFF PROJECT",
      "AKSES LANGSUNG KE KOMUNITAS & UMKM",
      "FLEKSIBEL UNTUK BRAND, CSR, DAN INSTITUSI",
      "BERORIENTASI DAMPAK, BUKAN SEKADAR EXPOSURE"
    ],
    footer: {
      tagline: "CREATING IMPACT THROUGH COLLABORATION",
      description: "DIPDOP TELAH TERLIBAT DALAM BERBAGAI PROGRAM EDUKASI, KOMPETISI BISNIS, WEBINAR, SERTA INISIATIF PEMBERDAYAAN UMKM DAN KOMUNITAS MUDA DI TINGKAT LOKAL HINGGA NASIONAL."
    }
  };
  const contactData = {
    title: "LET'S BUILD IMPACT TOGETHER",
    description: "KAMI TERBUKA UNTUK KOLABORASI DENGAN BRAND, PERUSAHAAN, INSTITUSI, DAN ORGANISASI YANG INGIN TUMBUH BERSAMA EKOSISTEM KREATIF DAN UMKM INDONESIA.",
    actions: [
      { label: "START COLLABORATION", url: "#" },
      { label: "CONTACT DIPDOP", url: "#" }
    ]
  };
  return (
    <>
      <Header />
      <div className='w-full flex flex-col pt-20 bg-white'>
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

          {/* Container Menu yang akan muncul/hilang */}
          <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${isOpen ? 'scale-100 opacity-100 mb-2' : 'scale-0 opacity-0 h-0 pointer-events-none'
            }`}>

            {/* Tombol WhatsApp */}
            <a
              href="https://wa.me/62811305490"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-3"
            >
              <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                Chat on WhatsApp
              </span>
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>

            {/* Tombol Email */}
            <a
              href="mailto:official.dipdop@gmail.com"
              className="group flex items-center justify-end gap-3"
            >
              <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                Send Email
              </span>
              <div className="w-12 h-12 bg-[#588A96] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Tombol Pemicu (Trigger Button) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 text-center rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/30 backdrop-blur-md ${isOpen ? 'bg-red-500' : 'bg-[#588A96]'
              }`}
          >
            <FaRegMessage />
          </button>

        </div>
        <div className='w-full border-t border-gray-800 border-b h-20 flex justify-center items-center'>
          <h2 className="text-center px-4 text-lg md:text-4xl text-gray-900 font-bold uppercase flex flex-wrap justify-center items-center gap-2">
            Creative One-Stop Communication
            <span className="text-teal-800">Agency</span>
          </h2>
        </div>
        <section id='hero' className='w-full md:flex-row flex-col border-b md:border-b-0 border-black h-auto md:h-lvh lg:h-lvh flex bg-[#E5E5E5]'>
          <img src={Team} className='w-full md:w-2/3 h-auto' alt="" />
          <div className='md:w-1/3 h-auto md:h-full flex flex-col gap-5 p-5 md:p-4 md:gap-5 lg:gap-5 lg:p-10 '>
            <h1 className='w-full h-auto text-xl lg:text-3xl font-bold text-black'>Membangun Brand, Menggerakkan UMKM, Menciptakan Dampak Nyata</h1>
            <article className='w-full h-auto text-sm lg:text-xl font-semibold text-gray-900'>
              PT DIPDOP UNIVERSE CORP adalah holding company berbasis ekosistem kreatif yang  mengintegrasikan agency, media UMKM, komunitas, dan produk kreatif untuk mendukung  pertumbuhan bisnis dan pemberdayaan berkelanjutan.
            </article>
            <div className='w-fit p-2 flex flex-col gap-2 group'>
              <a href="#" className='text-black'>
                Explore Our Ecosystem →
              </a>
              <div className='w-1 h-1 bg-[#588A96] rounded-lg transition-all duration-300 group-hover:w-full'></div>
            </div>
            <div className='w-fit p-2 flex flex-col gap-2 group'>
              <a href="#" className='text-black'>
                Collaborate with DIPDOP →
              </a>
              <div className='w-1 h-1 bg-[#588A96] rounded-lg transition-all duration-300 group-hover:w-full'></div>
            </div>
          </div>
        </section>
        <section id='overview' className='w-full h-auto md:h-lvh flex flex-col gap-7 md:gap-20 justify-center items-center px-1 py-2 md:px-5 md:py-10 bg-[#588A96] text-white '>
          <div className='w-auto px-10 flex flex-col items-center gap-5'>
            <h1 className='w-auto font-bold underline text-3xl lg:text-4xl'>TENTANG DIPDOP UNIVERSE CORP</h1>
            <article className='text-sm lg:text-2xl font-semibold md:text-base '>
              PT DIPDOP UNIVERSE CORP merupakan holding company yang menaungi berbagai unit  usaha di bidang kreatif, media, dan pemberdayaan UMKM.  Kami berfokus pada pengembangan ekosistem kolaboratif yang menghubungkan brand,  UMKM, komunitas, dan audiens melalui pendekatan strategis, partisipatif, dan  berorientasi dampak.  Dengan pengalaman dalam kampanye digital, edukasi, media UMKM, dan pengelolaan  komunitas, DIPDOP hadir sebagai mitra strategis bagi perusahaan, institusi, dan  organisasi yang ingin menciptakan pertumbuhan berkelanjutan sekaligus dampak sosial  yang terukur.
            </article>
          </div>
          <div className='bg-[#808DFD] w-full text-xs md:text-base  py-1 font-semibold px-1 grid grid-cols-4'>
            <p className='h-full p-2 border-r-2 border-white'># Creative & Marketing Expertise</p>
            <p className='h-full p-2 border-r-2 border-white'># Community & Grassroots Engagement</p>
            <p className='h-full p-2 border-r-2 border-white'># UMKM Empowerment Platform</p>
            <p className='h-full p-2'># Integrated Ecosystem Approach</p>
          </div>
        </section>
        <section id='ecosystem' className='w-full h-auto pb-8 pt-8 flex justify-center flex-col bg-[#808DFD] '>
          <div className='flex flex-col text-white justify-center p-10 items-center'>
            <p className=' text-4xl uppercase font-extrabold '>Our Ecosystem</p>
            <h1 className='text-lg font-bold'>Empat unit usaha yang saling terintegrasi untuk menjawab kebutuhan bisnis, komunitas,  dan pemberdayaan UMKM.</h1>
          </div>
          <div className="flex flex-col gap-8 p-10 bg-gray-200">
            {dipData.map((d) => (
              <div key={d.id} className="bg-[#E5E7EB] group p-8 max-w-2xl font-sans border-b-2 border-gray-600">

                <div className="flex flex-col gap-1  w-fit">
                  <h1 className="text-4xl font-black tracking-tighter text-black uppercase">
                    {d.unit}
                  </h1>
                  <div className="h-1.5 bg-[#588A96] w-16 transition-all duration-500 group-hover:w-full"></div>
                </div>

                <h2 className="text-[#588A96] font-bold mt-2 tracking-wide text-xs uppercase">
                  {d.category}
                </h2>

                <p className="font-semibold text-black text-sm mt-4 leading-relaxed max-w-xl">
                  {d.description}
                </p>

                <ul className="mt-6 space-y-1 text-black font-semibold text-sm font-medium">
                  {d.scopes.map((scope, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-lg">•</span> {scope}
                    </li>
                  ))}
                </ul>

                {/* Tombol Link Dinamis */}
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex bg-[#588A96] text-white px-6 py-3 rounded-lg items-center gap-2 font-bold text-sm hover:bg-[#466e78] transition-colors"
                >
                  VISIT WEBSITE <span className="text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <h2 className="text-center px-4 text-lg md:text-4xl text-gray-900 py-8 font-bold uppercase  flex flex-wrap justify-center items-center gap-2">More Than a Vendor. Your  <span className='text-teal-700'>Ecosystem Partner</span></h2>
        <div className='w-full h-auto flex md:flex-row flex-col bg-[#E5E5E5] text-gray-800 border-t border-b border-black'>
          <div className='w-full h-auto flex flex-col '>
            <h1 className='w-full h-auto border-b border-black text-black p-3 sm:p-4 md:p-5 text-base sm:text-lg md:text-xl lg:text-xl font-bold '>
              DIPDOP tidak hanya menyediakan jasa, tetapi membangun ekosistem.  Melalui integrasi agency, media, komunitas, dan produk kreatif, DIPDOP mampu  membantu perusahaan dan institusi dalam:
            </h1>
            <div className='w-full h-auto flex flex-col gap-2 px-10 py-4 lg:gap-4 lg:px-20 border-b border-black '>
              <h2 className='text-xl font-bold text-black'>EXPERT SOLUTIONS</h2>
              <p>
                Menjalankan kampanye yang relevan dengan target akar rumput
              </p>
            </div>
            <div className='w-full h-auto flex flex-col gap-2 px-10 py-4 lg:gap-4 lg:px-20 border-b border-black '>
              <h2 className='text-xl font-bold text-black'>RESULTS-DRIVEN STRATEGIES</h2>
              <p>
                Menjangkau UMKM dan komunitas secara autentik
              </p>
            </div>
            <div className='w-full h-auto flex flex-col gap-2 px-10 py-5 lg:gap-4 lg:px-20 border-b border-black '>
              <h2 className='text-xl font-bold text-black'>A CREATIVE PARTNERSHIP</h2>
              <p>
                Mengemas program CSR dan branding menjadi kegiatan yang berkelanjutan
              </p>
            </div>
            <div className='w-full h-auto flex flex-col gap-4 p-3 sm:p-4 md:p-5 border-black '>
              <h1 className='w-full h-auto text-black text-base sm:text-base md:text-xl lg:text-xl font-bold '>Dengan pendekatan ini, kolaborasi bersama DIPDOP tidak berhenti pada satu proyek,  tetapi berkembang menjadi kemitraan jangka panjang yang menciptakan nilai bisnis  sekaligus dampak sosial.</h1>
            </div>

          </div>
        </div>
        <section id='why-us' className="bg-[#7B89FF] p-10 font-sans min-h-screen flex flex-col items-center">

          <div className="w-full max-w-4xl border-2 border-dashed border-white/50 pt-20 p-6 md:p-12">

            <h2 className="text-white text-center text-2xl md:text-4xl font-black mb-10 tracking-tight">
              {collaborationData.title}
            </h2>
            <div className="flex flex-col gap-6">
              {collaborationData.reasons.map((item, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex items-center gap-4 text-white">
                    <span className="text-2xl font-black opacity-80">#</span>
                    <h3 className="text-lg md:text-xl font-extrabold tracking-wide uppercase">
                      {item}
                    </h3>
                  </div>
                  <div className="h-1.5 bg-[#00F0FF] mt-1 w-full scale-x-100 origin-left transition-transform duration-500 group-hover:bg-white"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-4xl mt-10 bg-white rounded-t-[50px] md:rounded-t-[80px] p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="text-[#7B89FF] text-xl">→</span>
              <h4 className="text-[#7B89FF] font-black text-xl md:text-2xl tracking-tighter">
                {collaborationData.footer.tagline}
              </h4>
            </div>
            <p className="text-[#7B89FF] text-xs md:text-sm font-bold leading-relaxed text-center md:text-left">
              {collaborationData.footer.description}
            </p>
          </div>
        </section>
        <section
          id='contact'
          className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${A})` }}
        >
          <div className="absolute inset-0 bg-black/60 -z-10"></div>

          <div className="border border-white/30 px-6 py-2 rounded-full mb-4 backdrop-blur-sm">
            <h2 className="text-[#7B89FF] font-black text-xl md:text-2xl tracking-tight">
              {contactData.title}
            </h2>
          </div>

          <div className="relative w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16 flex flex-col items-center shadow-2xl">

            <p className="text-white text-center font-bold text-sm md:text-base leading-relaxed tracking-wide mb-12 max-w-3xl">
              {contactData.description}
            </p>

            <div className="flex flex-col gap-8 w-full items-center">
              {contactData.actions.map((action, index) => (
                <a
                  key={index}
                  href={action.url}
                  className="group flex items-center gap-3 text-white transition-all"
                >
                  <span className="text-[#588A96] text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-3xl font-black tracking-tighter uppercase">
                      {action.label}
                    </span>
                    <div className="h-[2px] bg-white w-full scale-x-100 group-hover:bg-[#588A96] transition-colors"></div>
                  </div>
                </a>
              ))}
            </div>

            <div className="absolute -z-10 w-64 h-64 bg-[#7B89FF]/30 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"></div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
