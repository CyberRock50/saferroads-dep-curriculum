"use client";

import { useState } from "react";
import { Slide } from "../types";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

export default function Slideshow({ slides }: { slides: Slide[] | undefined }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) {
    return (
      <div className="p-10 text-center text-slate-500">
        No slides available for this module.
      </div>
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-slate-900 rounded-xl overflow-hidden flex flex-col relative min-h-[400px]">
        {/* Slide Content */}
        <div className="flex-1 p-10 flex flex-col justify-center max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            {currentSlide.title}
          </h2>
          <ul className="space-y-6">
            {currentSlide.content.map((point, idx) => (
              <li key={idx} className="flex items-start text-slate-200 text-xl md:text-2xl leading-relaxed">
                <span className="mr-4 text-blue-400 font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Slide Controls */}
        <div className="bg-slate-800 p-4 flex items-center justify-between text-slate-300">
          <button 
            onClick={() => setCurrentIndex((c) => Math.max(0, c - 1))}
            disabled={currentIndex === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <div className="font-semibold text-sm">
            Slide {currentIndex + 1} of {slides.length}
          </div>
          
          <button 
            onClick={() => setCurrentIndex((c) => Math.min(slides.length - 1, c + 1))}
            disabled={currentIndex === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Instructor Notes */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="flex items-center font-bold text-amber-900 mb-2">
          <BookOpen className="w-5 h-5 mr-2" />
          Instructor Notes
        </h3>
        <p className="text-amber-800 leading-relaxed text-lg">
          {currentSlide.instructorNotes || "No specific notes for this slide."}
        </p>
      </div>
    </div>
  );
}
