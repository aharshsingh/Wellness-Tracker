'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-white dark:bg-zinc-800 transition-all hover:bg-gray-50/70 hover:shadow-md',
				'dark:hover:bg-zinc-700/60 focus-visible:outline-none focus-visible:ring-2',
				'dark:data-[state=open]:bg-zinc-700 data-[state=open]:shadow-md',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<HelpCircle className="h-5 w-5 text-gray-600 dark:text-white" />
				<span className="text-lg font-medium tracking-wide bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-600/70 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
				<ChevronDown className="h-4 w-4 text-gray-800 dark:text-white" />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-4 ml-14">
			<div className="flex items-start gap-4 rounded-2xl bg-white dark:bg-zinc-700 p-4 shadow-md transition-all">
				<span className="flex-1 text-md leading-relaxed bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
					{children}
				</span>
				<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300/70 dark:bg-zinc-600 transition-transform hover:scale-105">
					<MessageCircle className="h-5 w-5 text-gray-700 dark:text-white" />
				</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};

const faqs = [
	{
		question: 'What is the Wellness Tracker app?',
		answer:
			'Wellness Tracker is a fitness and lifestyle app that helps you log your daily activities such as steps, sleep, exercise, and mood. Based on your inputs, our AI provides personalized insights and suggestions to improve your overall well-being.',
	},
	{
		question: 'How does the AI generate suggestions?',
		answer:
			'The AI analyzes your daily inputs—like exercise duration, sleep quality, and mood—and identifies patterns. It then provides tailored recommendations such as adjusting workout intensity, improving sleep routines, or balancing activity levels.',
	},
	{
		question: 'Can I track my progress over time?',
		answer:
			'Yes! You can view your daily, weekly, and monthly reports for metrics like steps, exercise, and sleep. This helps you understand your progress and stay motivated toward your fitness goals.',
	},
	{
		question: 'Is my data safe and private?',
		answer:
			'Absolutely. Your data is securely stored and only used to generate personalized insights for you. We do not share your personal wellness information with third parties.',
	},
	{
		question: 'Can I set fitness goals in the app?',
		answer:
			'Yes, you can set custom goals such as step count, exercise duration, or sleep targets. The app will track your progress and notify you when you’re close to achieving them.',
	},
];

export function AccordionComponent() {
	return (
		<main className="min-h-screen max-w-4xl w-full p-4 flex flex-col items-center justify-center md:p-8 mx-auto">
			<div className="max-w-3xl w-full">
				<h2 className="mb-8 text-center text-2xl font-bold md:text-3xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
					Frequently Asked Questions
				</h2>
				<CustomAccordion
					type="single"
					collapsible
					defaultValue="item-0"
					className="space-y-6"
				>
					{faqs.map((faq, index) => (
						<CustomAccordionItem key={index} value={`item-${index}`}>
							<CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
							<CustomAccordionContent>{faq.answer}</CustomAccordionContent>
						</CustomAccordionItem>
					))}
				</CustomAccordion>
			</div>
		</main>
	);
}
