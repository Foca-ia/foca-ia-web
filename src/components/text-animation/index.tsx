import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box fontSize="2xl">{text}</Box>
    </motion.div>
  );
};

export default TextAnimation;
