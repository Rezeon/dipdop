export function  Footer() {
  return (
    <footer className="bg-[#E5E5E5] w-full">
      <div className="w-full  mx-auto px-10 py-12">
        
        <h1 className="text-6xl font-black tracking-tighter mb-16 text-black">
          DIPDOP
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-gray-800 ">
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Contact</h3>
            <div className="space-y-1 text-sm md:text-base">
              <p><span className="font-bold">Email:</span> official.dipdop@gmail.com</p>
              <p><span className="font-bold">Phone:</span> +62 811-305-490</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">About Us</h3>
            <div className="space-y-4 text-[10px] md:text-xs leading-relaxed max-w-xs uppercase">
              <p>
                When your business needs branding or a kick-ass campaign, 
                DIPDOP™ is here for you.
              </p>
              <p>
                We believe in building meaningful projects that improve lives 
                through research, creativity, and technology.
              </p>
              <p>
                Collaboration is the art of getting results with trust. 
                Build yours with DIPDOP™
              </p>
            </div>
          </div>

          <div className="md:text-left">
            <h3 className="font-bold text-lg mb-4 uppercase">Social</h3>
            <ul className="space-y-1 font-bold underline decoration-1 underline-offset-2">
              <li><a href="https://instagram.com/dipdop.id" className="hover:opacity-70">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/dipdop/posts/?feedView=all" className="hover:opacity-70">LinkedIn</a></li>
              <li><a href="https://twitter.com/dipdop_id" className="hover:opacity-70">X</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
