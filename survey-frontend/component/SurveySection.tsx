'use client';

import { useState } from 'react';

export default function SurveySection() {
  const [role, setRole] = useState("");

  return (
    <section
      id="survey"
      className="relative w-full py-28 md:py-36 bg-[#02040a] text-white overflow-hidden"
    >

      {/* Glow Layers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative">
          <div className="absolute w-[50rem] h-[50rem] bg-gradient-to-b from-[#2A2C80]/35 to-transparent rounded-full blur-[180px]"></div>
          <div className="absolute w-[32rem] h-[32rem] bg-gradient-to-b from-[#4A4DFF]/25 to-transparent rounded-full blur-[140px]"></div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-light opacity-0 animate-fade-in"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Help Us Improve <span className="font-normal">Epic Aura</span>
          </h2>

          <p
            className="text-gray-300 text-sm md:text-lg font-light mt-4 opacity-0 animate-fade-in-delay"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Your feedback directly shapes upcoming features and enhancements.
          </p>
        </div>

        {/* Survey Form (Vertical Layout) */}
        <form className="mt-20 flex flex-col gap-10">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="survey-label">Name</label>
            <input type="text" className="survey-input" placeholder="Enter your name" />
          </div>

          {/* College Name */}
          <div className="flex flex-col gap-2">
            <label className="survey-label">College Name</label>
            <input type="text" className="survey-input" placeholder="Enter college name" />
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <label className="survey-label">You Are</label>

            <div className="relative w-full">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="modern-select"
              >
                <option value="" disabled>Select role</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
                <option value="management">Management</option>
              </select>

              {/* Custom Arrow Icon */}
              <div className="select-arrow-wrapper">
                <svg 
                  className="select-arrow" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none"
                >
                  <path 
                    d="M5 7.5L10 12.5L15 7.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Questions */}
          {[
            "How do you currently discover events on campus",
            "How often do you participate in events",
            "What feature would improve your event experience",
            "Are event reminders useful for you",
            "Should clubs track engagement and participation",
            "Do you want AI to recommend events",
            "Should rewards or streaks exist for participation"
          ].map((q, i) => (
            <div key={i} className="flex flex-col gap-2">
              <label className="survey-label">{q}</label>
              <textarea
                className="survey-input h-32 resize-none"
                placeholder="Type your response here"
              />
            </div>
          ))}

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="cursor-pointer relative inline-flex items-center gap-3 px-14 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-transform hover:scale-105 group"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <span className="relative z-10 text-white font-semibold text-lg">
                Submit Survey
              </span>
              <span className="relative z-10 text-white text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

        </form>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        .survey-label {
          color: #d0d3df;
          font-size: 1rem;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
        }

        .survey-input {
          width: 100%;
          padding: 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          color: white;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          transition: border 0.2s ease, background 0.2s ease;
          outline: none;
        }
        
        .survey-input::placeholder {
          color: rgba(255,255,255,0.4);
        }
        
        .survey-input:focus {
          border: 1px solid #6c7bff;
          background: rgba(255,255,255,0.10);
        }

        /* Modern Dropdown */
        .modern-select {
          width: 100%;
          padding: 16px;
          padding-right: 48px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          color: white;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
          transition: border 0.2s ease, background 0.2s ease;
          outline: none;
        }

        .modern-select option {
          background: #1a1d2e;
          color: white;
          padding: 12px;
          font-family: "Poppins", sans-serif;
        }

        .modern-select option:disabled {
          color: rgba(255,255,255,0.4);
        }

        .modern-select:hover {
          background: rgba(255,255,255,0.08);
        }

        .modern-select:focus {
          border-color: #6c7bff;
          background: rgba(255,255,255,0.10);
        }

        /* Custom Dropdown Arrow Wrapper */
        .select-arrow-wrapper {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          border-left: 1px solid rgba(255,255,255,0.08);
        }

        .select-arrow {
          color: rgba(255,255,255,0.5);
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .modern-select:hover ~ .select-arrow-wrapper .select-arrow {
          color: rgba(255,255,255,0.7);
        }

        .modern-select:focus ~ .select-arrow-wrapper .select-arrow {
          color: #6c7bff;
          transform: rotate(180deg);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s ease forwards; }
        .animate-fade-in-delay { animation: fadeIn 1.3s ease forwards; }
      `}</style>

    </section>
  );
}