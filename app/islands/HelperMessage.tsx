import { MoveUpRight } from "lucide-react";

interface HelperMessageProps {
  onMessageClick: (message: string) => void;
}
const helperMessages = [
  "What can you do?",
  "How can you help me?",
  "What are your capabilities?",
];

const HelperMessage = ({ onMessageClick }: HelperMessageProps) => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-2xl mb-2 md:mb-0">
      {helperMessages.map((message, index) => (
        <div
          key={index}
          className="flex-1 bg-transparent rounded-xl shadow-lg h-32 md:h-10 flex items-center text-nowrap justify-between px-3 py-4 md:py-0 cursor-pointer border border-gray-300 hover:border-black transition-colors duration-300"
          onClick={() => onMessageClick(message)}
        >
          <span className="text-black font-mono text-xs">{message}</span>
          <MoveUpRight size={12} className="ml-2 text-black" />
        </div>
      ))}
    </div>
  );
};

export default HelperMessage;
