"use client";

import { motion } from "framer-motion";

const AnnouncementBar = () => {
  const announcementText = "Over £2,000,000 Generated for hospitality venues • 0 RISK • 5 star rated by over 400 venues • ";
  
  return (
    <div className="bg-primary text-slate-900 py-2 relative z-[110] overflow-hidden border-b border-slate-900/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-4 items-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
        >
          <span className="inline-block">{announcementText}</span>
          <span className="inline-block">{announcementText}</span>
          <span className="inline-block">{announcementText}</span>
          <span className="inline-block">{announcementText}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
