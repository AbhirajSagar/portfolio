'use client';
import { motion } from "framer-motion";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-900/50 rounded-3xl p-10 border border-neutral-800 backdrop-blur-sm"
      >
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4">Get in Touch</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let us Build Something Amazing</h3>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
            Whether you have a game concept, a web project, or just want to say hi, I am always open to new opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href="mailto:abhirajsagar99@gmail.com" 
                className="px-8 py-4 bg-amber-500 text-neutral-900 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
            >
                <FaEnvelope /> Email Me
            </a>
            <a 
                href="/abhiraj_unity_dev.pdf" 
                download
                className="px-8 py-4 bg-neutral-800 text-white rounded-full font-bold text-lg hover:bg-neutral-700 transition-colors border border-neutral-700 flex items-center justify-center gap-2"
            >
                <FaFileDownload /> Download Resume
            </a>
        </div>
      </motion.div>
    </div>
  );
}