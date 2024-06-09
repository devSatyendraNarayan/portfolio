import React from "react";

function Contact() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
       
          <div className="flex flex-col items-center">
            <p className="text-md">Get in touch</p>
            <h1 className="text-3xl text-purple-500">Contact Me</h1>
          </div>
        
        <div className="">
          <footer className="footer footer-center p-4">
            <aside>
              <div className="flex items-center">
                <span className="bg-green-600 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                  Available for Hire
                </span>
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
              </div>{" "}
            </aside>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Contact;
