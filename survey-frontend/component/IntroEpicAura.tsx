'use client';

import { Users, Sparkles, Zap, Globe, Share2, TrendingUp } from 'lucide-react';

export default function EpicAuraIntroSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#02040a] text-white overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-[85%] mx-auto text-center">

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight opacity-0 animate-fade-in"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Introducing <span className="font-normal">Epic Aura</span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-gray-300 text-sm md:text-lg font-light mt-4 opacity-0 animate-fade-in-delay"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          A centralized event management platform designed to reduce confusion, boost engagement and help
          clubs run events with powerful AI assisted workflows.
        </p>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="ea-card animate-rise">
            <div className="ea-icon"><Zap className="w-6 h-6" /></div>
            <h3 className="ea-title">Streaks Management</h3>
            <p className="ea-text">Encourage regular participation with measurable streaks and badges.</p>
          </div>

          <div className="ea-card animate-rise delay-150">
            <div className="ea-icon"><Share2 className="w-6 h-6" /></div>
            <h3 className="ea-title">Student Promotions</h3>
            <p className="ea-text">Motivate students to promote events using controlled campaigns.</p>
          </div>

          <div className="ea-card animate-rise delay-300">
            <div className="ea-icon"><Users className="w-6 h-6" /></div>
            <h3 className="ea-title">Club Growth Hub</h3>
            <p className="ea-text">Give clubs tools to engage, coordinate and scale inside campus.</p>
          </div>

          <div className="ea-card animate-rise delay-450">
            <div className="ea-icon"><TrendingUp className="w-6 h-6" /></div>
            <h3 className="ea-title">Campus Engagement Tools</h3>
            <p className="ea-text">Polls, badges and shoutouts to keep the campus active.</p>
          </div>

          <div className="ea-card animate-rise delay-600">
            <div className="ea-icon"><Globe className="w-6 h-6" /></div>
            <h3 className="ea-title">External Event Recommendations</h3>
            <p className="ea-text">AI suggests top events from nearby colleges based on your interests.</p>
          </div>

          <div className="ea-card animate-rise delay-750">
            <div className="ea-icon"><Sparkles className="w-6 h-6" /></div>
            <h3 className="ea-title">AI Powered Workflows</h3>
            <p className="ea-text">Smart scheduling, personalised event feed and automated suggestions.</p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col items-center opacity-0 animate-fade-in-delay">

          {/* CTA Button Glassmorphism */}
          <button
            onClick={() => {
              const el = document.getElementById('survey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 transition-transform hover:scale-105 group overflow-visible"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute inset-0 animate-border-spin">
                <div
                  className="absolute w-20 h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, white, royalblue, transparent)',
                    filter: 'blur(10px)',
                  }}
                />
              </div>
            </div>

            {/* Label */}
            <span className="relative z-10 text-white text-sm md:text-base font-semibold">
              Continue to Survey
            </span>

            {/* Arrow */}
            <span className="relative z-10 text-white transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <p
            className="mt-4 text-gray-400 text-xs md:text-sm tracking-wide"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Your feedback decides what we build first.
          </p>
        </div>
      </div>

      {/* Animations and Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s ease forwards; }
        .animate-fade-in-delay { animation: fadeIn 1.4s ease forwards; }

        @keyframes rise {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-rise { animation: rise .8s ease forwards; opacity: 0; }
        .delay-150 { animation-delay: .15s; }
        .delay-300 { animation-delay: .30s; }
        .delay-450 { animation-delay: .45s; }
        .delay-600 { animation-delay: .60s; }
        .delay-750 { animation-delay: .75s; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow { animation: floatSlow 10s ease-in-out infinite; }
        .animate-float-slow-delay { animation: floatSlow 12s ease-in-out infinite; }

        /* CTA border animation */
        @keyframes borderSpin {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(300%); }
        }
        .animate-border-spin { animation: borderSpin 3s linear infinite; }

        /* Cards */
        .ea-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          text-align: left;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .ea-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
        }

        .ea-icon {
          width: 46px;
          height: 46px;
          background: rgba(255,255,255,0.12);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .ea-title {
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .ea-text {
          font-size: 0.9rem;
          line-height: 1.4rem;
          color: #b3b8c6;
        }
      `}</style>
    </section>
  );
}
