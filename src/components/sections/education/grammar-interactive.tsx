"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Lightbulb, Zap, Trophy, ArrowRight } from 'lucide-react';

const lessons = [
  {
    id: 1,
    sentence: "She don't like pizza.",
    options: ["She doesn't like pizza.", "She not like pizza.", "She don't likes pizza."],
    correct: 0,
    rule: "Subject-verb agreement",
    explanation: "With third-person singular subjects (he, she, it), use 'doesn't' instead of 'don't'."
  },
  {
    id: 2,
    sentence: "I have went there before.",
    options: ["I have gone there before.", "I have going there before.", "I went have there before."],
    correct: 0,
    rule: "Past participle",
    explanation: "'Gone' is the past participle of 'go'. Use it with 'have/has' for present perfect tense."
  },
  {
    id: 3,
    sentence: "Their going to the park.",
    options: ["They're going to the park.", "There going to the park.", "Theirs going to the park."],
    correct: 0,
    rule: "Homophones",
    explanation: "'They're' is a contraction of 'they are'. 'Their' shows possession. 'There' indicates a place."
  },
  {
    id: 4,
    sentence: "Me and him went to school.",
    options: ["He and I went to school.", "Him and me went to school.", "I and he went to school."],
    correct: 0,
    rule: "Pronoun order",
    explanation: "Use subject pronouns (I, he) when they are the subject. Always put yourself last as a courtesy."
  },
];

// Confetti animation component
const Confetti = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * 400 - 200,
          y: -20,
          rotate: 0,
          opacity: 1,
        }}
        animate={{
          y: 400,
          rotate: Math.random() * 360,
          opacity: 0,
        }}
        transition={{
          duration: 1.5 + Math.random(),
          delay: Math.random() * 0.3,
          ease: "easeOut",
        }}
        className="absolute left-1/2 w-3 h-3 rounded-sm"
        style={{
          backgroundColor: ['#F9A825', '#22c55e', '#3b82f6', '#a855f7'][Math.floor(Math.random() * 4)],
        }}
      />
    ))}
  </div>
);

export default function GrammarInteractive() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [xp, setXp] = useState(0);

  const lesson = lessons[currentLesson];
  const isCorrect = selectedAnswer === lesson.correct;
  const isComplete = currentLesson >= lessons.length - 1 && showResult;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === lesson.correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      setXp(prev => prev + 10 + streak * 2);
      if (streak >= 2) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Reset game
      setCurrentLesson(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
      setStreak(0);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-[700px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9A825]/10 rounded-full mb-6"
          >
            <Zap size={16} className="text-[#F9A825]" />
            <span className="text-sm font-bold text-[#6B5439]">Interactive Lesson</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-4">
            Grammar That <span className="text-[#F9A825]">Teaches</span>
          </h2>
          <p className="text-xl text-slate-500">
            Learn by doing. Each correction is a lesson.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-[#F9A825]" />
              <span className="font-bold text-[#0f172a]">{score}/{lessons.length}</span>
            </div>
            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 px-3 py-1 bg-orange-100 rounded-full"
              >
                <span className="text-sm">🔥</span>
                <span className="text-sm font-bold text-orange-600">{streak} streak</span>
              </motion.div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#F9A825]">+{xp} XP</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            {lessons.map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 h-2 rounded-full overflow-hidden bg-slate-200"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: i < currentLesson ? 1 : i === currentLesson && showResult && isCorrect ? 1 : 0
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="h-full bg-green-500 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lesson Card */}
        <motion.div
          layout
          className="bg-white rounded-[32px] border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] overflow-hidden relative"
        >
          {showConfetti && <Confetti />}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentLesson}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="p-8"
            >
              {/* Question */}
              <div className="mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">
                  Fix this sentence
                </span>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl md:text-3xl font-bold text-red-500"
                >
                  <span className="line-through decoration-2 decoration-red-300">{lesson.sentence}</span>
                </motion.p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {lesson.options.map((option, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(i)}
                    disabled={showResult}
                    className={`w-full p-5 rounded-2xl border-2 text-left font-medium transition-all ${
                      showResult
                        ? i === lesson.correct
                          ? 'border-green-500 bg-green-50 text-green-700 shadow-lg'
                          : i === selectedAnswer
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-slate-200 text-slate-300'
                        : 'border-slate-200 hover:border-[#F9A825] hover:bg-[#FFFAE7] hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{option}</span>
                      <AnimatePresence>
                        {showResult && i === lesson.correct && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            <CheckCircle size={24} className="text-green-500" />
                          </motion.div>
                        )}
                        {showResult && i === selectedAnswer && i !== lesson.correct && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            <XCircle size={24} className="text-red-500" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Result Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`p-5 rounded-2xl mb-6 ${
                      isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ rotate: -30, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <Lightbulb size={24} className={isCorrect ? 'text-green-600' : 'text-amber-600'} />
                      </motion.div>
                      <div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`text-sm font-black block mb-1 ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}
                        >
                          {isCorrect ? '🎉 Correct! ' : '💡 Learn: '}{lesson.rule}
                        </motion.span>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className={`text-sm ${isCorrect ? 'text-green-600' : 'text-amber-600'}`}
                        >
                          {lesson.explanation}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              <AnimatePresence>
                {showResult && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="w-full bg-[#0f172a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_#000] hover:shadow-[0_2px_0_#000] hover:translate-y-[2px] transition-all"
                  >
                    {isComplete ? 'Play Again' : 'Continue'}
                    <ArrowRight size={20} />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
