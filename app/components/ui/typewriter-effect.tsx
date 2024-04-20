import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const containerVariants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const renderWords = () => {
    return (
      <div>
        {words.map((word, idx) => {
          return (
            <motion.span
              key={`word-${idx}`}
              className={cn(`dark:text-white text-black`, word.className)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay: idx * 0.05 }}
            >
              {word.text}
            </motion.span>
          );
        })}
      </div>
    );
  };

  return (
    <motion.div
      className={cn("flex items-center", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-sm sm:text-base break-words whitespace-pre-wrap">
        {renderWords()}
      </div>
    </motion.div>
  );
};
