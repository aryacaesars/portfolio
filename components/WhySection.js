import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Why() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    const reasons = [
        {
            title: "Creative Problem Solver",
            description: "I approach each project with innovative solutions and creative thinking.",
        },
        {
            title: "Detail Oriented",
            description: "I pay attention to every detail to ensure the highest quality output.",
        },
        {
            title: "Timely Delivery",
            description: "I respect deadlines and deliver projects on time, every time.",
        },
        {
            title: "Clear Communication",
            description: "I maintain clear and consistent communication throughout the project.",
        },
    ];

    return (
        <section ref={containerRef} className="py-8 sm:py-20 px-4 md:px-12 bg-gray-50 min-h-lg">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
                        y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
                    }}
                    className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
                >
                    Why Hire Me?
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [0.1 + index * 0.1, 0.3 + index * 0.1],
                                    [0, 1]
                                ),
                                y: useTransform(
                                    scrollYProgress,
                                    [0.1 + index * 0.1, 0.3 + index * 0.1],
                                    [100, 0]
                                )
                            }}
                            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

