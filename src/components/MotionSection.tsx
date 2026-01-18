import React from "react";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface MotionSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: any;
}

export default function MotionSection({ children, className = "", as: As = "section", ...rest }: MotionSectionProps) {
  const Comp: any = motion(As);

  // Wrap direct children so they animate with stagger
  const wrappedChildren = React.Children.map(children, (childNode, i) => {
    if (!React.isValidElement(childNode)) return childNode;
    return (
      <motion.div key={(childNode as any).key ?? i} variants={child}>
        {childNode}
      </motion.div>
    );
  });

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={parent}
      {...rest}
    >
      {wrappedChildren}
    </Comp>
  );
}
