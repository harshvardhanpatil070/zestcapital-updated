import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "Step 1",
    title: "Register Your Account",
    description: `• Click on Sign Up and complete the registration form.
• Provide basic details and create a secure login.
• Verify your email and mobile number.`,
  },
  {
    year: "Step 2",
    title: "Complete KYC & Verification",
    description: `• Submit required documents for identity and address verification.
• Our compliance team reviews and approves your account swiftly.
• Secure and regulatory-compliant onboarding process.`,
  },
  {
    year: "Step 3",
    title: "Fund Your Account",
    description: `• Choose from multiple deposit options (bank transfer, crypto, payment gateways).
• Enjoy fast and secure transactions with no hidden fees.
• Funds are credited to your account instantly.`,
  },
  {
    year: "Step 4",
    title: "Choose Your Market & Start Trading",
    description: `• Access a wide range of CFD and Crypto instruments.
• Use advanced trading tools for analysis and execution.
• Set stop-loss and take-profit orders to manage risk effectively.`,
  },
  {
    year: "Step 5",
    title: "Monitor & Optimize Your Portfolio",
    description: `• Track real-time performance via our trading dashboard.
• Utilize expert insights and risk management features.
• Modify positions and strategies as needed.`,
  },
  {
    year: "Step 6",
    title: "Withdraw Profits Securely",
    description: `• Request withdrawals anytime with swift processing.
• Funds are transferred securely to your preferred payment method.
• Transparent policies with no hidden withdrawal charges.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2, // Stagger the children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((windowHeight - rect.top) / (windowHeight + rect.height)) * 100
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={timelineRef}
      // Use a soft gradient background or pattern
      className="relative w-full py-20 flex justify-center bg-gradient-to-b from-white to-gray-100"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Large blurred circle top-left */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
        {/* Large blurred circle bottom-right */}
        <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000" />
      </div>

      <motion.div 
        className="relative flex items-start max-w-6xl w-full px-4"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full">
          {/* Progress Indicator */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.0, ease: "linear" }}
          />
        </div>

        {/* Timeline Events */}
        <div className="relative w-full flex flex-col gap-20 z-10">
          {timelineData.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex w-full ${isEven ? "justify-start" : "justify-end"}`}
              >
                {/* Connector Dot */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-white shadow-md z-20 ${
                    isEven ? "-left-3" : "-right-3"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`relative bg-white shadow-2xl rounded-xl p-8 w-full max-w-xl 
                    ${
                      isEven
                        ? "ml-6 border-l-4 border-blue-500"
                        : "mr-6 border-r-4 border-purple-500"
                    }
                  `}
                >
                  {/* Animated gradient highlight / subtle glow behind the card */}
                  <div
                    className={`absolute top-0 left-0 w-full h-full rounded-xl opacity-30 pointer-events-none blur-xl
                      ${
                        isEven
                          ? "bg-gradient-to-r from-blue-200 to-transparent"
                          : "bg-gradient-to-l from-purple-200 to-transparent"
                      }
                    `}
                  />
                  <h3
                    className={`text-sm font-semibold ${
                      isEven ? "text-blue-600" : "text-purple-600"
                    }`}
                  >
                    {event.year}
                  </h3>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {event.title}
                  </h2>
                  <p className="text-gray-700 text-lg mt-3 whitespace-pre-line">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;