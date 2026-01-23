import "./App.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
//img
import Team from "/grub.jpg";
import Kemenin from "/kemenin.jpg";
import start4 from "/startup4.jpeg";
//logo partner
import dealls from "/dealls.png";
import kerja from "/kerja.png";
import glint from "/glint.jpg";
import pijar from "/pijar.png";
import cc from "/cc.png";
import cakap from "/cakap.png";
import dana from "/dana.png";
import gocorp from "/gocorp.png";
import kampus from "/kampus.png";
import taldo from "/taldo.png";
import voucherku from "/voucherku.png";
import xendit from "/xendit.png";
import tembapbelajar from "/tempatbelajar.webp";
import original from "/original.webp";

//logo colaborator
import agriculture from "/agriculture.png";
import banking from "/banking.png";
import consulting from "/consulting.png";
import educational from "/educational.png";
import fnb from "/fnb.png";
import goverment from "/goverment.png";
import hotel from "/hotel.png";
import mining from "/mining.png";
import organizations from "/organizations.png";
import retail from "/retail.png";
import se from "/se.png";
import smes from "/smes.png";
import smess2 from "/smess2.png";
import startup from "/startup.png";
import training from "/training.png";

//component react bits
import CurvedLoop from "./components/CurvedLoop";
import CircularText from "./components/CircularText";
import LogoLoop from "./components/LogoLoop";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const partnerLogos = [
    { src: dealls, title: "Dealls", href: "" },
    { src: kerja, title: "IKERJA", href: "" },
    { src: glint, title: "Glints", href: "" },
    { src: pijar, title: "Pijar Mahir", href: "" },
    { src: cc, title: "Cerdas Cermat", href: "" },
    { src: cakap, title: "Cakap", href: "" },
    { src: dana, title: "DANA", href: "" },
    { src: gocorp, title: "GoCorp", href: "" },
    { src: kampus, title: "Kampus Merdeka", href: "" },
    { src: taldo, title: "Taldo", href: "" },
    { src: voucherku, title: "Voucherku", href: "" },
    { src: xendit, title: "Xendit", href: "" },
    { src: tembapbelajar, title: "Teman Belajar", href: "" },
    { src: original, title: "Original", href: "" },
  ];
  const colaboratorLogo = [
    { src: agriculture, title: "Dealls", category: "agriculture" },
    { src: banking, title: "IKERJA", category: "banking" },
    { src: consulting, title: "Glints", category: "consulting" },
    { src: educational, title: "Pijar Mahir", category: "educational" },
    { src: fnb, title: "Cerdas Cermat", category: "fnb" },
    { src: goverment, title: "Cakap", category: "goverment" },
    { src: hotel, title: "DANA", category: "hotel" },
    { src: mining, title: "GoCorp", category: "mining" },
    { src: organizations, title: "Kampus Merdeka", category: "organizations" },
    { src: retail, title: "Taldo", category: "retail" },
    { src: se, title: "Voucherku", category: "smes" },
    { src: smess2, title: "Xendit", category: "smes" },
    { src: smes, title: "Teman Belajar", category: "smes" },
    { src: startup, title: "Original", category: "startup" },
    { src: training, title: "Original", category: "training" },
  ];
  const dipData = [
    {
      id: 1,
      unit: "DIPDOP AGENCY",
      category: " CREATIVE & MARKETING AGENCY |",
      description:
        "DIPDOP Agency menyediakan solusi kreatif dan pemasaran digital untuk brand, UMKM, dan institusi. Kami membantu perencanaan strategi komunikasi, kampanye digital, serta aktivasi berbasis komunitas yang relevan dan berdampak.",
      scopes: [
        "Digital marketing & campaign",
        "Branding & content strategy",
        "Event & community activation",
      ],
      link: "https://dipdop.net",
    },
    {
      id: 2,
      unit: "DIPDOP MERCH",
      category: " CREATIVE MERCHANDISE PLATFORM |",
      description:
        "DIPDOP Merch menghadirkan produk merchandise sebagai media komunikasi brand, identitas komunitas, serta sarana kolaborasi kreatif dalam berbagai kampanye dan kegiatan.",
      scopes: [
        "Merchandise komunitas & event",
        "Custom product untuk brand & CSR",
        "Limited collaboration items",
      ],
      link: "https://www.ciptaloka.com/+dipdop/",
    },
    {
      id: 3,
      unit: "DIPDOP COMMUNITY",
      category: " DEVELOPMENT & COLLABORATION HUB |",
      description:
        "DIPDOP Community merupakan ruang kolaboratif bagi pelaku UMKM, anak muda, kreator, dan komunitas untuk bertumbuh melalui program edukasi, diskusi, dan kolaborasi lintas sektor.",
      scopes: [
        "Webinar & kelas edukasi",
        "Program komunitas & mentoring",
        "Kolaborasi brand & CSR",
      ],
      link: "https://www.instagram.com/dipdop.community",
    },
    {
      id: 4,
      unit: "UMKM UPDATE",
      category: " DIGITAL MEDIA FOR UMKM |",
      description:
        "UMKM Update adalah media digital yang berfokus pada edukasi, informasi, dan eksposur UMKM. Media ini menjadi kanal distribusi konten, kampanye, dan pesan brand yang ingin menjangkau pelaku usaha secara langsung.",
      scopes: [
        "Edukasi & insight UMKM",
        "Promosi & storytelling",
        "Kampanye kolaboratif",
      ],
      link: "https://www.instagram.com/umkmupdate.id",
    },
  ];
  const collaborationData = {
    title: "WHY COLLABORATE WITH DIPDOP",
    reasons: [
      "PENDEKATAN EKOSISTEM, BUKAN ONE-OFF PROJECT",
      "AKSES LANGSUNG KE KOMUNITAS & UMKM",
      "FLEKSIBEL UNTUK BRAND, CSR, DAN INSTITUSI",
      "BERORIENTASI DAMPAK, BUKAN SEKADAR EXPOSURE",
    ],
    footer: {
      tagline: "CREATING IMPACT THROUGH COLLABORATION",
      description:
        "DIPDOP TELAH TERLIBAT DALAM BERBAGAI PROGRAM EDUKASI, KOMPETISI BISNIS, WEBINAR, SERTA INISIATIF PEMBERDAYAAN UMKM DAN KOMUNITAS MUDA DI TINGKAT LOKAL HINGGA NASIONAL.",
    },
  };
  const contactData = {
    title: "LET'S BUILD IMPACT TOGETHER",
    description:
      "KAMI TERBUKA UNTUK KOLABORASI DENGAN BRAND, PERUSAHAAN, INSTITUSI, DAN ORGANISASI YANG INGIN TUMBUH BERSAMA EKOSISTEM KREATIF DAN UMKM INDONESIA.",
    actions: [
      { label: "START COLLABORATION", url: "#" },
      { label: "CONTACT DIPDOP", url: "#" },
    ],
  };

  const filteredLogos =
    activeCategory === "All"
      ? colaboratorLogo
      : colaboratorLogo.filter((logo) => logo.category === activeCategory);
  const categories = ["training", "startup", "smes", "retail", , "mining", "hotel", "goverment", "fnb", "consulting", "banking", "agriculture", "organizations"]

  return (
    <>
      <Header />
      <div className="w-full flex flex-col pt-20 bg-white">
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
          <div
            className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
              isOpen
                ? "scale-100 opacity-100 mb-2"
                : "scale-0 opacity-0  pointer-events-none"
            }`}
          >
            <a
              href="https://wa.me/62811305490"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-3"
            >
              <span className="bg-white/20 backdrop-blur-md border border-white/20 text-blue-500 text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                Chat on WhatsApp
              </span>
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>
            <a
              href="mailto:official.dipdop@gmail.com"
              className="group flex items-center justify-end gap-3"
            >
              <span className="bg-white/20 backdrop-blur-md border border-white/20 text-blue-500 text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                Send Email
              </span>
              <div className="w-12 h-12 bg-[#005691] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-white/20">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 text-center rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/30 backdrop-blur-md ${
              isOpen ? "bg-red-500" : "bg-[#005691]"
            }`}
          >
            <FaRegMessage color="white" />
          </button>
        </div>
        <section
          id="hero"
          className="relative min-h-screen rounded-b-2xl grid grid-cols-1 md:grid-cols-2 font-sans bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${Team})` }}
        >
          <div className="absolute top-0 right-0 backdrop-blur-xl w-full border-gray-800 border-b h-20 flex justify-center items-center z-20">
            <h2 className="text-center px-4 limelight-regular text-lg md:text-4xl text-gray-900 font-bold uppercase flex flex-wrap justify-center items-center gap-2">
              <span className="text-[#005691]">DIPDOP</span> UNIVERSE
            </h2>
          </div>

          <div className="hidden md:block"></div>
          <div className="relative self-end w-full h-auto md:h-fit flex flex-col bg-white p-5 md:p-10 lg:p-14 gap-6 rounded-tl-[50px]">
            <div className="absolute -top-[50px] right-0 w-[50px] h-[50px] hidden md:block">
              <div className="w-full h-full rounded-br-[50px] shadow-[20px_20px_0_20px_white]"></div>
            </div>

            <div className="absolute bottom-0 -left-[50px] w-[50px] h-[50px] hidden md:block">
              <div className="w-full h-full rounded-br-[50px] shadow-[20px_20px_0_20px_white]"></div>
            </div>
            <h1 className="limelight-regular text-2xl lg:text-5xl text-[#005691] font-bold leading-tight">
              Membangun Brand, Menggerakkan UMKM, Menciptakan Dampak Nyata
            </h1>

            <article className="text-sm lg:text-lg font-medium text-slate-700 max-w-xl">
              <span className="text-[#005691] font-bold transition-all duration-300 group-hover:text-yellow-400 group-hover:underline">
                PT DIPDOP UNIVERSE CORP
              </span>{" "}
              adalah holding company berbasis ekosistem kreatif yang
              mengintegrasikan agency, media UMKM, dan produk kreatif.
            </article>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#"
                className="px-8 py-3 bg-amber-400 hover:bg-[#005691] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-none"
              >
                Explore Ecosystem →
              </a>
              <a
                href="#"
                className="px-8 py-3 border-2 border-[#005691] text-[#005691] hover:bg-[#005691] hover:text-white rounded-full font-bold transition-all"
              >
                Collaborate →
              </a>
            </div>
          </div>
        </section>
        <section
          id="overview"
          className="w-full h-auto md:h-lvh flex flex-col md:flex-row gap-7 md:gap-20 justify-center items-center px-1 py-2 md:px-5 md:py-10 bg-white text-white "
        >
          <div className="w-auto md:w-[50%] h-auto pl-10 flex flex-col items-start gap-5">
            <h1 className="w-auto font-bold text-yellow-500 limelight-regular text-2xl lg:text-8xl">
              TENTANG DIPDOP UNIVERSE CORP
            </h1>
            <article className="text-sm montserrat-a text-blue-500 lg:text-lg font-semibold md:text-lg ">
              PT DIPDOP UNIVERSE CORP merupakan holding company yang menaungi
              berbagai unit usaha di bidang kreatif, media, dan pemberdayaan
              UMKM. Kami berfokus pada pengembangan ekosistem kolaboratif yang
              menghubungkan brand, UMKM, komunitas, dan audiens melalui
              pendekatan strategis, partisipatif, dan berorientasi dampak.
              Dengan pengalaman dalam kampanye digital, edukasi, media UMKM, dan
              pengelolaan komunitas, DIPDOP hadir sebagai mitra strategis bagi
              perusahaan, institusi, dan organisasi yang ingin menciptakan
              pertumbuhan berkelanjutan sekaligus dampak sosial yang terukur.
            </article>
          </div>
          <div className="text-[#004A7C] w-[50%] text-xs md:text-base  py-1 font-semibold">
            <CurvedLoop
              marqueeText="✦ Integrated Ecosystem Approach ✦ UMKM Empowerment Platform ✦ Community & Grassroots Engagement ✦ Creative & Marketing Expertise"
              speed={2.1}
              curveAmount={250}
              interactive
            />
          </div>
        </section>
        <section id="achievements" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[#005691] limelight-regular text-4xl md:text-7xl font-bold uppercase leading-none mb-4">
                  Pencapaian <br />
                  <span className="text-yellow-500 italic">DIPDOP</span>
                </h2>
                <div className="h-1.5 w-32 bg-[#005691] rounded-full"></div>
              </div>
              <p className="text-slate-600 font-medium max-w-sm text-right hidden md:block">
                Dedikasi kami dalam membangun ekosistem digital dan pemberdayaan
                telah diakui oleh berbagai institusi nasional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="group relative bg-white p-1 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="bg-slate-50 rounded-[36px] p-8 flex flex-col items-center text-center h-full border border-slate-100">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <img
                      src={start4}
                      alt="Startup4Industry"
                      className="max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="w-full bg-[#005691] py-6 px-4 rounded-3xl text-white relative">
                    <p className="text-3xl font-black italic">20</p>
                    <p className="uppercase tracking-[0.2em] text-[10px] font-bold opacity-80">
                      Finalis Startup
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#005691] p-1 rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="bg-white rounded-[36px] p-8 flex flex-col items-center text-center h-full">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <img
                      src={Kemenin}
                      alt="Kemenperin"
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="w-full bg-slate-100 py-6 px-4 rounded-3xl text-[#005691]">
                    <p className="text-lg md:text-xl font-black uppercase leading-tight">
                      Penerima Dana <br /> Hibah Implementasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white border-2 border-[#005691]/10 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-slate-100 italic select-none group-hover:text-yellow-100 transition-colors">
                200+
              </div>

              <div className="relative flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[kerja, glint, dealls, pijar].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-white shadow bg-white shadow-slate-200"
                    >
                      <img
                        src={i}
                        className="w-full rounded-full h-full"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="h-12 w-[2px] bg-slate-200 hidden md:block"></div>
                <div className="text-center md:text-left">
                  <span className="text-5xl md:text-7xl font-black text-[#005691] tracking-tighter">
                    200+
                  </span>
                  <p className="text-[#005691] font-bold uppercase tracking-widest text-sm">
                    Happy Clients & Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="ecosystem"
          className="w-full h-auto pb-8 pt-8 flex justify-center flex-col  "
        >
          <div className="flex text-[#005691] limelight-regular justify-start items-start bg-white">
            <div className="bg-[#005691] p-10 rounded-tr-[40px] relative">
              <p className="text-4xl md:text-8xl uppercase text-white font-extrabold leading-none">
                Our Ecosystem
              </p>
              <h1 className="text-lg text-yellow-400 font-bold mt-4 max-w-2xl">
                Empat unit usaha yang saling terintegrasi untuk menjawab
                kebutuhan bisnis, komunitas, dan pemberdayaan UMKM.
              </h1>

              <div className="absolute -top-[40px] left-0 w-[40px] h-[40px] overflow-hidden">
                <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#005691]"></div>
              </div>

              <div className="absolute bottom-0 hidden md:block -right-[40px] w-[40px] h-[40px] overflow-hidden">
                <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#005691]"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-8 p-10 rounded-b-3xl md:rounded-tr-4xl bg-[#005691]">
            {dipData.map((d) => (
              <div
                key={d.id}
                className="bg-[#E5E7EB] group p-8 w-full font-sans rounded-3xl shadow-2xl"
              >
                <div className="flex relative flex-col gap-1  w-full">
                  <h1 className="text-4xl fugaz-one-regular text-yellow-600 md:text-6xl font-black tracking-tighter  uppercase">
                    {d.unit}
                  </h1>
                  <div className="absolute p-8 hidden md:block right-0 top-0 ">
                    <CircularText
                      text={d.category}
                      onHover="pause"
                      spinDuration={20}
                      className="custom-class"
                    />
                  </div>
                  <div className="h-1.5 bg-[#005691] w-16 transition-all duration-500 group-hover:w-[50%]"></div>
                </div>

                <p className="montserrat-a text-black text-base font-bold mt-4 leading-relaxed max-w-xl">
                  {d.description}
                </p>

                <ul className="mt-6 space-y-1 montserrat-a text-[#005691] font-bold text-2xl ">
                  {d.scopes.map((scope, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-lg ">#</span> {scope}
                    </li>
                  ))}
                </ul>

                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex bg-white text-[#005691] px-6 py-3 rounded-4xl items-center gap-2 font-bold text-sm hover:bg-[#005691] hover:text-white text-center transition-colors"
                >
                  VISIT WEBSITE <span className=" text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white py-20 px-4 md:px-10">
          <h2 className="text-4xl md:text-7xl limelight-regular text-[#005691] mb-12 font-bold uppercase leading-tight">
            More Than a Vendor. <br />
            Your{" "}
            <span className="text-yellow-500 italic">Ecosystem Partner</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-200 rounded-[40px] overflow-hidden shadow-sm">
            <div className="lg:col-span-5 bg-[#005691] p-8 md:p-12 text-white flex flex-col justify-between relative">
              <h1 className="text-xl md:text-2xl font-bold leading-relaxed">
                DIPDOP tidak hanya menyediakan jasa, tetapi membangun ekosistem
                melalui integrasi agency, media, dan komunitas.
              </h1>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold italic">Expert</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    Solutions
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold italic">Impact</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    Social Value
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white grid grid-cols-1 md:grid-cols-2 relative">
              <div className="p-8 border-b border-gray-100 md:border-r group hover:bg-gray-50 transition-colors cursor-default">
                <div className="w-10 h-10 bg-yellow-400 rounded-full mb-4 flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-[#005691] mb-2 uppercase">
                  Expert Solutions
                </h2>
                <p className="text-gray-600 text-sm">
                  Menjalankan kampanye yang relevan dengan target akar rumput
                  secara strategis.
                </p>
              </div>

              <div className="p-8 border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
                <div className="w-10 h-10 bg-yellow-400 rounded-full mb-4 flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-bold text-[#005691] mb-2 uppercase">
                  Results-Driven
                </h2>
                <p className="text-gray-600 text-sm">
                  Menjangkau UMKM dan komunitas secara autentik dengan hasil
                  yang terukur.
                </p>
              </div>

              <div className="md:col-span-2 p-8 bg-gray-50/50 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                <div className="hidden md:block absolute top-0 left-0 w-8 h-8">
                  <div className="w-full h-full bg-white rounded-tl-[30px] shadow-[-15px_-15px_0_15px_#f9fafb]"></div>
                </div>

                <h2 className="text-xl font-bold text-[#005691] uppercase shrink-0">
                  Creative Partnership
                </h2>
                <p className="text-gray-700 font-medium italic border-l-4 border-yellow-400 pl-4">
                  "Kolaborasi yang berkembang menjadi kemitraan jangka panjang
                  untuk menciptakan nilai bisnis dan dampak sosial."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="why-us"
          className="bg-[#004A7C] font-sans min-h-screen flex flex-col items-center pt-20"
        >
          <div className="w-full max-w-6xl px-6 mb-12">
            <h2 className="text-white text-left text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none limelight-regular opacity-90">
              {collaborationData.title}
            </h2>
          </div>

          <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch px-6 gap-0">
            <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-t-[40px] md:rounded-tr-none md:rounded-l-[40px] border border-white/10">
              <div className="flex flex-col gap-8">
                {collaborationData.reasons.map((item, index) => (
                  <div key={index} className="group cursor-default relative">
                    <div className="flex items-start gap-4 text-white">
                      <span className="text-[#00F0FF] text-xl font-black">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {item}
                      </h3>
                    </div>
                    <div className="h-[1px] bg-white/20 mt-4 w-full"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center relative rounded-b-[40px] md:rounded-bl-none md:rounded-r-[40px] shadow-2xl">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#004A7C]"></div>
                  <h4 className="text-[#004A7C] font-black text-2xl md:text-3xl tracking-tighter uppercase italic">
                    {collaborationData.footer.tagline}
                  </h4>
                </div>

                <p className="text-[#004A7C]/80 text-base md:text-lg font-medium leading-relaxed mb-8">
                  {collaborationData.footer.description}
                </p>

                <button className="group flex items-center gap-4 bg-[#004A7C] text-white px-6 py-4 rounded-full font-bold hover:bg-[#00F0FF] hover:text-[#004A7C] transition-all duration-300 shadow-lg">
                  Mulai Kolaborasi
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="h-20"></div>
        </section>
        <section
          id="partners"
          className="relative w-full bg-white pt-24 pb-20 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-20 bg-[#004A7C] rounded-b-[50px] md:rounded-b-[100px]"></div>

          <div className="relative group pt-8 z-10 w-full mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
              <div>
                <h2 className="text-[#004A7C] text-4xl md:text-8xl font-black tracking-tighter uppercase limelight-regular">
                  Our <span className="text-yellow-500">Partners</span>
                </h2>
                <div className="h-1.5 bg-yellow-400 w-16 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <p className="text-[#004A7C] font-bold uppercase tracking-widest text-lg">
                Trusted by industry leaders
              </p>
            </div>

            <div className="bg-slate-50/50 rounded-[40px] border border-slate-100 py-10">
              <div className="relative overflow-hidden h-[120px] flex items-center">
                <LogoLoop
                  logos={partnerLogos}
                  speed={40}
                  direction="eft"
                  logoHeight={50}
                  gap={100}
                  hoverSpeed={10}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="collaborator" className="py-24 bg-white">
          <div className="w-full  mx-auto px-6">
            
            <div className="mb-12 w-auto group text-center md:text-left">
              <h2 className="text-[#004A7C] text-5xl md:text-8xl font-black uppercase limelight-regular mb-4">
                Our <span className="text-yellow-500">Network</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Klik kategori untuk melihat partner strategis kami
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
                    activeCategory === cat
                      ? "bg-[#004A7C] text-white border-[#004A7C] shadow-lg scale-105"
                      : "bg-transparent text-slate-400 border-slate-100 hover:border-[#004A7C] hover:text-[#004A7C]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row w-auto  items-center">
              {filteredLogos.map((logo, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col w-auto items-center justify-center p-6 rounded-3xl border border-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in"
                >
                  <img
                    src={logo.src}
                    alt={logo.title}
                    className="min-h-[100px] w-auto object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${Team})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#004A7C]/80 -z-10"></div>

          <div className="bg-white px-8 py-3 rounded-full mb-8 shadow-xl">
            <h2 className="text-[#004A7C] font-black text-sm md:text-lg tracking-widest uppercase italic">
              {contactData.title}
            </h2>
          </div>

          <div className="relative w-full max-w-5xl bg-white p-8 md:p-20 flex flex-col md:flex-row gap-12 items-center rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#004A7C] font-bold text-xl md:text-3xl leading-tight tracking-tight">
                {contactData.description}
              </p>
              <div className="mt-8 h-1 w-20 bg-yellow-400 hidden md:block"></div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-6">
              {contactData.actions.map((action, index) => (
                <a
                  key={index}
                  href={action.url}
                  className="group flex flex-col bg-slate-50 hover:bg-[#005691] p-6 rounded-3xl transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#005691] group-hover:text-yellow-400 text-sm font-black uppercase tracking-widest mb-1 transition-colors">
                      Get in Touch
                    </span>
                    <span className="text-[#005691] group-hover:text-white group-hover:translate-x-2 transition-all text-2xl">
                      →
                    </span>
                  </div>
                  <span className="text-2xl md:text-4xl font-black text-slate-800 group-hover:text-white tracking-tighter uppercase transition-colors">
                    {action.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/20 blur-[100px] rounded-full -z-10"></div>
          </div>

          <div className="mt-12 text-white/60 text-xs font-bold uppercase tracking-[0.3em]">
            © 2026 PT DIPDOP UNIVERSE CORP
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
