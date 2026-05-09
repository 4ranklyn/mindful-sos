"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Wind, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

export default function MindfulSOSPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0502] text-[#e0d8d0] font-sans relative flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden selection:bg-orange-500/30">
      {/* Atmospheric Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#3a1510] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1a2a4a] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-[#5a3a20] rounded-full blur-[120px] opacity-20"></div>
      </div>

      <main className="relative w-full max-w-2xl mx-auto flex flex-col min-h-[60vh] justify-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl p-8 sm:p-12 z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-orange-400 font-semibold">Digital Wellness Assistant</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-light italic mb-8 leading-tight font-serif text-center text-white">
                &quot;Halo, saya di sini untukmu.&quot;
              </h1>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                <p className="text-lg leading-relaxed text-white/60 font-light">
                  <span className="font-medium text-white/90">Validasi Cepat:</span> Wajar banget kamu merasa malu sekarang. Tubuhmu sedang mengalami lonjakan adrenalin dan meresponsnya sebagai ancaman.
                </p>
                <p className="text-lg leading-relaxed text-white/60 font-light">
                  Itu adalah reaksi alami melihat kejadian tadi (terpeleset di depan gebetan memang bikin kaget!). Tarik napas dalam, kamu aman. Mari kita tenangkan pikiranmu agar kamu bisa tidur nyenyak malam ini.
                </p>
              </div>
              <div className="flex justify-center pt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-xs tracking-widest uppercase hover:bg-white/10 transition-all text-white font-medium shadow-lg active:scale-95"
                >
                  Mulai Tenangkan Diri
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium text-[10px] tracking-widest uppercase mb-4">
                <Wind className="w-3 h-3" />
                Fase 01: Penurunan Panik
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-white">
                Tindakan SOS (Meditasi Singkat)
              </h2>
              
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-1 text-sm font-mono tracking-tighter">01</div>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                      Sekarang, buka aplikasi <strong className="text-white/90 font-medium">Calm</strong> atau <strong className="text-white/90 font-medium">Riliv</strong> di hp kamu.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-1 text-sm font-mono tracking-tighter">02</div>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                      Cari sesi meditasi berlabel <strong className="text-white/90 font-medium">&apos;SOS&apos;</strong> atau <strong className="text-white/90 font-medium">&apos;Panic&apos;</strong>.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-1 text-sm font-mono tracking-tighter">03</div>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                      Dengarkan panduan pernapasan selama 3 menit saja. Fokuskan pikiran hanya pada suara tarikan dan hembusan napas untuk me-reset sistem sarafmu.
                    </p>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center justify-center py-6">
                  <BreathAnimation />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(0)}
                  className="px-6 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-white/5 transition-all text-white/50 hover:text-white"
                >
                  Kembali
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-xs tracking-widest uppercase hover:bg-white/10 transition-all text-white font-medium shadow-lg active:scale-95"
                >
                  Lanjut
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium text-[10px] tracking-widest uppercase mb-4">
                <BookOpen className="w-3 h-3" />
                Fase 02: Pemrosesan Emosi
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-white">
                Tindakan Reframing (Jurnal)
              </h2>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-1 text-sm font-mono tracking-tighter">01</div>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                      Setelah detak jantungmu normal, buka <strong className="text-white/90 font-medium">Daylio</strong> atau aplikasi catatanmu.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-1 text-sm font-mono tracking-tighter">02</div>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                      Tulis kejadian tadi secara berlebihan seolah-olah kamu sedang menulis naskah film komedi.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0 mt-1 text-sm font-mono tracking-tighter">03</div>
                    <div className="text-lg text-white/60 font-light leading-relaxed w-full">
                      <p>Contohnya:</p>
                      <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[11px] text-orange-300 uppercase tracking-widest mb-2">Prompt Jurnal</p>
                        <p className="text-sm italic text-white/80 leading-relaxed font-serif">
                          &quot;Adegan 1: Tokoh utama mencoba tampil keren, namun gravitasi berkata lain dan memutuskan untuk menariknya ke lantai.&quot;
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <p className="text-white/80 font-light bg-white/5 p-4 rounded-2xl flex items-start gap-3 mt-4 border border-white/10 text-sm">
                   <span className="text-xl">💡</span>
                   <span>
                     Mengubah memori menjadi lelucon melepaskan ikatan emosional negatif. Bayangkan tawa penonton sebagai dukungan, bukan ejekan.
                   </span>
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-white/5 transition-all text-white/50 hover:text-white"
                >
                  Kembali
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-xs tracking-widest uppercase hover:bg-white/10 transition-all text-white font-medium shadow-lg active:scale-95"
                >
                  Selesaikan
                  <CheckCircle2 className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white/90 mx-auto mb-8 shadow-sm border border-white/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-light italic text-center tracking-tight text-white mb-6 font-serif">
                &quot;Kerja Bagus.&quot;
              </h1>
              <div className="max-w-xl mx-auto space-y-6">
                <p className="text-xl leading-relaxed text-white/60 font-light">
                  Kejadian jatuh di kafe hari ini memang memalukan, tapi ingatlah bahwa <strong className="text-white/90 font-medium">kejadian tersebut hanyalah satu bingkai kecil dari film hidupmu, bukan keseluruhan ceritanya.</strong>
                </p>
                <p className="text-lg leading-relaxed text-white/40 italic font-light">
                  Besok adalah hari yang baru. Sekarang, letakkan hp kamu, pejamkan mata, dan selamat beristirahat. 🌙
                </p>
              </div>
              
              <div className="pt-12 flex justify-center">
                <button
                  onClick={() => setStep(0)}
                  className="text-white/30 hover:text-white/60 text-[10px] tracking-widest font-mono uppercase transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-white/50"
                >
                  Restart Protocol
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function BreathAnimation() {
  return (
    <div className="relative flex flex-col items-center justify-center h-48 w-full">
      <motion.div
        className="absolute w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-white/10 rounded-full blur-md"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="z-10 bg-white/5 backdrop-blur-md shadow-lg border border-white/20 px-6 py-3 rounded-full text-white/90 font-medium tracking-wide flex items-center justify-center relative w-40 h-12"
        animate={{
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.span
          className="absolute"
          animate={{ opacity: [1, 0, 0, 1] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.5, 1] }}
        >
           Tarik Napas...
        </motion.span>
        <motion.span
          className="absolute"
          animate={{ opacity: [0, 0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.5, 0.9] }}
        >
          Hembuskan...
        </motion.span>
      </motion.div>
    </div>
  );
}
