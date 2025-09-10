import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    {/* Gradient heading */}
                    <h2 className="text-4xl font-medium lg:text-5xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Trusted by fitness enthusiasts and wellness seekers
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-300">
                        Wellness Tracker is helping people build healthier habits with AI-powered
                        insights, personalized fitness suggestions, and an easy way to monitor their
                        progress every day.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <Image
                                className="h-6 w-fit dark:invert"
                                src="/ChatGPT Image Sep 4, 2025, 12_27_49 PM.png"
                                alt="Wellness Logo"
                                height={100}
                                width={100}
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                    Wellness Tracker completely changed how I look at my fitness.
                                    The AI suggestions are spot on—whether it’s reminding me to rest
                                    more, suggesting lighter workouts, or pushing me when I need it.
                                    I’ve never felt this consistent before!
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/32.jpg"
                                            alt="Priya Sharma"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>PS</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        {/* Gradient name */}
                                        <cite className="text-sm font-medium bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            Priya Sharma
                                        </cite>
                                        <span className="text-muted-foreground block text-sm">
                                            Fitness Enthusiast
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                    I’ve tried many tracking apps, but this one feels personal. The
                                    weekly and monthly reports motivate me to keep going, and I love
                                    how I can set my own goals and actually stick to them.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/45.jpg"
                                            alt="Rahul Mehta"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>RM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        {/* Gradient name */}
                                        <cite className="text-sm font-medium bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            Rahul Mehta
                                        </cite>
                                        <span className="text-muted-foreground block text-sm">
                                            Software Engineer & Runner
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-gray-800 dark:text-gray-200">
                                    The sleep tracking insights are amazing. It helped me fix my
                                    irregular schedule, and I feel more energetic during workouts
                                    now. Highly recommended for anyone serious about overall
                                    wellness.
                                </p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            alt="Aisha Khan"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AK</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        {/* Gradient name */}
                                        <cite className="text-sm font-medium bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            Aisha Khan
                                        </cite>
                                        <span className="text-muted-foreground block text-sm">
                                            Yoga Instructor
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-gray-800 dark:text-gray-200">
                                    I use Wellness Tracker to keep an eye on my daily activity and
                                    mood. It feels like having a fitness coach in my pocket—always
                                    reminding me to stay on track without being overwhelming.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/25.jpg"
                                            alt="David Lopez"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>DL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        {/* Gradient name */}
                                        <p className="text-sm font-medium bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            David Lopez
                                        </p>
                                        <span className="text-muted-foreground block text-sm">
                                            Marketing Professional
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
