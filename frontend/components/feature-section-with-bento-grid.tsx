import React from "react";
import { cn } from "@/lib/utils";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Track Your Daily Health",
      description:
        "Log your steps, exercise, sleep, and mood in one simple dashboard.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Get personalized health recommendations powered by AI analytics.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Stay Motivated Anywhere",
      description:
        "Access your wellness journey from any device and never miss a day.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Connect Globally",
      description:
        "Join a worldwide community of wellness enthusiasts and share your progress.",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        {/* Gradient heading */}
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-extrabold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Wellness Features That Empower You
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-600 dark:text-neutral-300 text-center font-normal">
          From daily tracking to AI-driven insights, Wellness Tracker helps you
          build healthier habits and stay consistent with your wellness goals.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-xl md:text-2xl md:leading-snug font-semibold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-600 font-normal dark:text-neutral-300",
        "max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

// Feature images
export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <img
        src="https://images.unsplash.com/photo-1554288248-efa343376084?auto=format&fit=crop&w=800&q=80"
        alt="Track Daily Health"
        className="w-full h-60 object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 gap-4 h-full">
      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
        alt="AI Insights"
        className="w-full h-60 object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full mx-auto group h-full flex items-center justify-center relative rounded-md">
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
        alt="Stay Motivated"
        className="w-full h-60 object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="w-full mx-auto group h-full flex items-center justify-center relative rounded-md">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
        alt="Connect Globally"
        className="w-full h-60 object-cover rounded-md shadow-md"
      />
    </div>
  );
};
