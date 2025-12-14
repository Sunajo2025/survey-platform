'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SurveySection() {
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    role: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted || loading) return;

    setLoading(true);

    emailjs
      .send(
        "service_nz2s78k",     // ✅ your service ID
        "template_drdpmwe",    // ✅ your template ID
        formData,
        "iv5l2GAkhWB05nX6w"     // ✅ your public key
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);

        // Optional: reset form
        setFormData({
          name: "",
          college: "",
          role: "",
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          q5: "",
          q6: "",
          q7: ""
        });
        setRole("");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        alert("Failed to submit survey. Please try again.");
      });
  };

  return (
    <section
      id="survey"
      className="relative w-full py-28 md:py-36 bg-[#02040a] text-white overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light">
            Help Us Improve <span className="font-normal">Epic Aura</span>
          </h2>
          <p className="text-gray-300 mt-4">
            Your feedback directly shapes upcoming features.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-20 flex flex-col gap-10" onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="survey-input"
            placeholder="Enter your name"
            required
          />

          {/* College */}
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="survey-input"
            placeholder="Enter college name"
            required
          />

          {/* Role */}
          <select
            name="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setFormData(prev => ({ ...prev, role: e.target.value }));
            }}
            className="modern-select"
            required
          >
            <option value="" disabled>Select role</option>
            <option value="Student">Student</option>
            <option value="Professor">Professor</option>
            <option value="Management">Management</option>
          </select>

          {/* Questions */}
          {[
            { label: "How do you currently discover events on campus", name: "q1" },
            { label: "How often do you participate in events", name: "q2" },
            { label: "What feature would improve your event experience", name: "q3" },
            { label: "Are event reminders useful for you", name: "q4" },
            { label: "Should clubs track engagement and participation", name: "q5" },
            { label: "Do you want AI to recommend events", name: "q6" },
            { label: "Should rewards or streaks exist for participation", name: "q7" }
          ].map((q, i) => (
            <textarea
              key={i}
              name={q.name}
              value={(formData as any)[q.name]}
              onChange={handleChange}
              className="survey-input h-32 resize-none"
              placeholder={q.label}
            />
          ))}

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={submitted || loading}
              className={`px-14 py-4 rounded-full border transition cursor-pointer
                ${submitted
                  ? 'bg-green-500/20 border-green-400 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 hover:scale-105'
                }`}
            >
              {submitted
                ? "Submitted"
                : loading
                  ? "Submitting..."
                  : "Submit Survey"}
            </button>
          </div>

        </form>
      </div>
      <style jsx>
        {`
          .survey-input {
          width: 100%;
          padding: 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .modern-select {
          width: 100%;
          padding: 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          color: #b4b4b4;
        }

        /* ✅ THIS FIXES THE VISIBILITY ISSUE */
        .modern-select option {
          background-color: #02040a;
          color: white;
        }

        .modern-select option:hover {
          background-color: #4A4DFF;
          color: white;
        }
        `}
      </style>
    </section>
  );
}
