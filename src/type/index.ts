import React from "react";

export type ButtonProps = {
   title: string;
   id?: string;
   rightIcon?: React.ReactNode;
   leftIcon?: React.ReactNode;
   btnClass?: string;
};
export type AnimatedTitleProps = {
   title: string;
   containerClass?: string;
   sectionId?: string;
};

export type BentoCardProps = {
   src: string;
   title: React.ReactNode;
   description?: string;
};

export type BentoTiltProps = {
   children: React.ReactNode;
   className?: string;
};
