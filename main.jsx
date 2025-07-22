
// React.js Portfolio Website for Amged Sayed
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
  const [lang, setLang] = useState("ar");

  const isArabic = lang === "ar";

  const switchLang = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <header className="bg-zinc-800 p-5 flex justify-between items-center shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Amged Sayed</h1>
        <button
          onClick={switchLang}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
        >
          {isArabic ? "English" : "العربية"}
        </button>
      </header>

      <main className="p-6 max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-xl text-cyan-400 font-semibold mb-3">
            {isArabic ? "من أنا" : "About Me"}
          </h2>
          <p className="text-lg">
            {isArabic
              ? "أنا مطور ويب Full-Stack متخصص في أطر عمل JavaScript الحديثة. أستمتع ببناء مواقع نظيفة ومتجاوبة."
              : "I'm a full-stack web developer specializing in modern JavaScript frameworks. I love building clean and responsive websites."}
          </p>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-semibold mb-3">
            {isArabic ? "المهارات" : "Skills"}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-base list-disc list-inside">
            <li>HTML / CSS / JavaScript</li>
            <li>React / Node.js</li>
            <li>Python / Django</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-semibold mb-3">
            {isArabic ? "التواصل" : "Contact"}
          </h2>
          <ul className="space-y-2 text-base">
            <li>
              📧 <a href="mailto:amged@amgedsayed.my" className="text-blue-400 hover:underline">amged@amgedsayed.my</a>
            </li>
            <li>
              📱 <a href="https://wa.me/+201102033165" target="_blank" className="text-blue-400 hover:underline">WhatsApp 1</a>
            </li>
            <li>
              📱 <a href="https://wa.me/+201021205370" target="_blank" className="text-blue-400 hover:underline">WhatsApp 2</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-zinc-400">
        © {new Date().getFullYear()} Amged Sayed. All rights reserved.
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
