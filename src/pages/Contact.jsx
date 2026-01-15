import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div className="pt-28 pb-24 flex justify-center px-4 bg-secondary min-h-screen">
      {/* LIVE BORDER WRAPPER */}
      <div className="relative w-full max-w-6xl rounded-3xl p-[2px] overflow-hidden">
        
        {/* Animated White Border */}
        <div className="absolute inset-0 animate-border bg-[conic-gradient(from_0deg,#E4FF30,#E4FF30,#E4FF30)]"></div>

        {/* Main Content */}
        <div className="relative bg-white rounded-3xl px-10 py-16">
          <h2 className="text-4xl font-bold text-secondary text-center">
            Get in Touch
          </h2>

          <p className="mt-4 text-center text-slate-600">
            We’d love to discuss your business requirements. Reach out to us today.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT INFO */}
            <div className="space-y-4 text-slate-700 text-lg">
              <p><strong>Company:</strong> Nova Global Enterprises</p>
              <p><strong>Address:</strong> Sharadadevi Nagara, Tumakuru, Karnataka – 572103</p>
              <p><strong>Phone:</strong> 9743668698</p>
              <p><strong>Email:</strong> bnmuruli@gmail.com</p>
            </div>

            {/* RIGHT BLUE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightBlue/30 to-transparent"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Business Enquiries & Partnerships
                </h3>
                <p className="leading-relaxed text-slate-100">
                  For business inquiries, partnerships, and service requests, please contact us via phone or email. Our professional team is always ready to assist you with reliable and timely responses.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Border animation style */}
      <style>
        {`
          .animate-border {
            animation: spin 6s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}
