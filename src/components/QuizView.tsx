"use client";

import { useState } from "react";
import { Quiz } from "../types";
import { CheckCircle2, XCircle, RefreshCw, Key } from "lucide-react";

export default function QuizView({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const questions = quiz.questions;

  if (!questions || questions.length === 0) {
    return (
      <div className="p-10 text-center text-slate-500">
        No formal questions listed for this quiz. Check sample questions in the overview.
      </div>
    );
  }

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (showResults || showAnswerKey) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) correct++;
    });
    return Math.round((correct / questions.length) * 100);
  };

  const score = calculateScore();
  const passed = score >= quiz.passingScore;

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-10">
      <div className="flex justify-end">
        <button 
          onClick={() => setShowAnswerKey(!showAnswerKey)} 
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors border ${showAnswerKey ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'}`}
        >
          <Key className="w-4 h-4" />
          {showAnswerKey ? 'Hide Answer Key' : 'Instructor Answer Key'}
        </button>
      </div>

      {/* Quiz Header */}
      {!showResults ? (
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">Module Quiz ({questions.length} Questions)</h3>
          <p className="text-indigo-800 mb-4">You must score {quiz.passingScore}% to pass. This quiz should take ~{quiz.durationMinutes} minutes.</p>
          <div className="flex justify-between items-center bg-indigo-100/50 p-3 rounded-lg border border-indigo-100">
             <span className="text-indigo-900 font-semibold text-sm">Answered: {Object.keys(answers).length} / {questions.length}</span>
             <button 
               onClick={() => setShowResults(true)}
               disabled={Object.keys(answers).length < questions.length}
               className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
             >
               Submit Quiz
             </button>
          </div>
        </div>
      ) : (
        <div className={`rounded-2xl p-6 border ${passed ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${passed ? 'text-emerald-900' : 'text-red-900'}`}>
                {passed ? 'Passed!' : 'Needs Review'}
              </h3>
              <p className={`text-lg font-medium ${passed ? 'text-emerald-700' : 'text-red-700'}`}>
                You scored {score}% (Required: {quiz.passingScore}%)
              </p>
            </div>
            <button 
               onClick={() => {
                 setAnswers({});
                 setShowResults(false);
               }}
               className="flex items-center space-x-2 bg-white px-4 py-2 shadow-sm border rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isSelected = answers[q.id] !== undefined;
          const selectedAnswer = answers[q.id];
          const isCorrect = selectedAnswer === q.correctIndex;

          return (
            <div key={q.id} className="bg-white border rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-lg mb-4">
                <span className="text-slate-400 mr-2">{idx + 1}.</span>
                {q.question}
              </h4>
              
              <div className="space-y-3">
                {q.options.map((opt, optIdx) => {
                  let optStyle = "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50";
                  let showIcon = null;

                  if (showAnswerKey) {
                    optStyle = "border-slate-200 opacity-60";
                    if (optIdx === q.correctIndex) {
                       optStyle = "bg-amber-50 border-amber-300 font-semibold text-amber-900";
                       showIcon = <CheckCircle2 className="w-5 h-5 text-amber-600" />;
                    }
                  } else if (showResults) {
                    optStyle = "border-slate-200 opacity-60"; // default if not selected and not correct
                    if (optIdx === q.correctIndex) {
                      optStyle = "bg-emerald-50 border-emerald-300 font-semibold text-emerald-900";
                      showIcon = <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
                    } else if (optIdx === selectedAnswer) {
                      optStyle = "bg-red-50 border-red-300 text-red-900";
                      showIcon = <XCircle className="w-5 h-5 text-red-600" />;
                    }
                  } else {
                     if (selectedAnswer === optIdx) {
                       optStyle = "bg-indigo-50 border-indigo-400 font-semibold text-indigo-900 shadow-sm";
                     }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={showResults || showAnswerKey}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {showIcon}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
