import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";
import experience from "../data/experience.json";
import SectionTitle from "./SectionTitle";

export default function ExperienceJourney() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "tween" as const,
      },
    },
  };

  const checkpointVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        type: "tween" as const,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        type: "tween" as const,
      },
    },
  };

  return (
    <section id="experience" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionTitle
          label="03 Professional Experience"
          title="Enterprise software development experience"
          description="My professional journey through real-world banking technology, workflow automation, and AI-integrated solutions"
        />

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Vertical Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-1/2 top-0 bottom-0 w-1 origin-top -translate-x-1/2 transform bg-gradient-to-b from-cyan-500 via-cyan-400 to-blue-500"
            style={{
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
            }}
          ></motion.div>

          {/* Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.period}`}
                variants={itemVariants}
                className={`relative flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Container */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <motion.div
                    className={`group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 ${
                      index === 0 ? "ring-1 ring-cyan-400/50" : ""
                    }`}
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 group-hover:opacity-100"></div>

                    <div className="relative z-10">
                      {/* Period Badge */}
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-300">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </div>

                      {/* Current Badge */}
                      {index === 0 && (
                        <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 ml-2 text-xs font-semibold text-amber-300">
                          <Star className="h-3 w-3 fill-amber-300" />
                          Current
                        </div>
                      )}

                      {/* Role and Company */}
                      <h3 className="mt-4 text-2xl font-bold text-white">{item.role}</h3>
                      <div className="mt-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        <p className="font-semibold text-cyan-300">
                          {item.company} • {item.department}
                        </p>
                      </div>

                      {/* Summary */}
                      <p className="mt-4 leading-6 text-slate-300">{item.summary}</p>

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Checkpoint Marker */}
                <motion.div
                  variants={checkpointVariants}
                  className="absolute left-1/2 top-6 -translate-x-1/2 transform"
                >
                  <div className="relative h-12 w-12">
                    {/* Outer glow ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-500/20"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(34, 211, 238, 0.4)",
                          "0 0 40px rgba(34, 211, 238, 0.6)",
                          "0 0 20px rgba(34, 211, 238, 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>

                    {/* Main checkpoint circle */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>

                    {/* Badge for years of experience */}
                    {index === 0 && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute -right-8 top-0 whitespace-nowrap rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white"
                      >
                        Latest
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent element */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 h-20 w-1 origin-bottom -translate-x-1/2 transform bg-gradient-to-b from-blue-500 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
