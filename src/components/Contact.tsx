import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Mari <span className="text-gradient">Terhubung</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Saya selalu terbuka untuk mendiskusikan peluang baru, proyek kolaborasi, atau sekadar bertukar pikiran mengenai teknologi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            <a href="tel:082152066312" className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-3xl glass-panel glass-panel-hover group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                <Phone className="text-cyan-600 dark:text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium tracking-wide uppercase">Telepon / WhatsApp</div>
                <div className="text-slate-900 dark:text-white font-display text-lg sm:text-xl">08XXXXXXXX</div>
              </div>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </a>
            
            <a href="mailto:alexandronadio057@gmail.com" className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-3xl glass-panel glass-panel-hover group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                <Mail className="text-indigo-600 dark:text-indigo-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium tracking-wide uppercase">Email</div>
                <div className="text-slate-900 dark:text-white font-display text-base sm:text-xl truncate sm:break-all">alexandronadio057@gmail.com</div>
              </div>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-400 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
            </a>
            
            <div className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-3xl glass-panel">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center">
                <MapPin className="text-purple-600 dark:text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium tracking-wide uppercase">Alamat</div>
                <div className="text-slate-900 dark:text-white font-display text-base sm:text-xl leading-tight">Komplek Husada Bhakti Laburan</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-8 rounded-3xl glass-panel flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 dark:from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.1)] dark:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <Linkedin className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display">LinkedIn Profile</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
              Kunjungi profil LinkedIn saya untuk melihat detail pengalaman profesional dan koneksi.
            </p>
            <a 
              href="https://linkedin.com/in/alexandro-nadio-hutajulu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 relative z-10"
            >
              <Linkedin className="w-5 h-5" />
              Lihat Profil
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
