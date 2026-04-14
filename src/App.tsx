/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Starfield from './components/Starfield';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Starfield />
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-500">
        <p>© {new Date().getFullYear()} Alexandro Nadio Hutajulu. All rights reserved.</p>
      </footer>
    </div>
  );
}
