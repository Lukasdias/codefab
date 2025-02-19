"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type TreeItemProps = {
  id: string;
  name: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const TreeItem = ({ id, name, children, onClick }: TreeItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = React.Children.count(children) > 0;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <li className="ml-4">
      <div
        className="flex items-center cursor-pointer py-1"
        onClick={handleClick}
      >
        {hasChildren && (
          <motion.span
            className="mr-1"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </motion.span>
        )}
        <span>{name}</span>
      </div>
      {hasChildren && (
        <motion.ul
          className="ml-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.ul>
      )}
    </li>
  );
};

export const Tree = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-1">{children}</ul>;
};
