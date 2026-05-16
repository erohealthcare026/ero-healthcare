"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, CheckCircle, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const courses = [
    {
        title: "CPC® (Certified Professional Coder)",
        description: "The gold standard in medical coding. Comprehensive training for AAPC's CPC certification.",
        duration: "4 Months",
        features: ["AAPC Official Curriculum", "CPT, ICD-10-CM, HCPCS", "Exam Prep & Mock Tests", "Project Work"],
        price: "Advanced",
        popular: true,
    },
    {
        title: "ICD-10-CM/PCS Training",
        description: "Specialized training in the latest classification systems used worldwide for clinical coding.",
        duration: "2 Months",
        features: ["Clinical Classification", "Coding Guidelines", "Hands-on Practice", "Certification Support"],
        price: "Specialized",
        popular: false,
    },
    {
        title: "Medical Billing & Coding",
        description: "End-to-end training covering the entire Revenue Cycle Management and reimbursement process.",
        duration: "3 Months",
        features: ["RCM Knowledge", "Insurance Types", "Claim Submissions", "Software Training"],
        price: "Comprehensive",
        popular: false,
    },
];

export function Courses() {
    return (
        <section id="courses" className="py-24">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-xs">Our Expert Courses</h2>
                    <h3 className="text-3xl font-extrabold tracking-tight">Level Up Your Career with Our Programs</h3>
                    <p className="text-base text-muted">
                        Choose from our range of specialized training programs designed to make you an industry leader.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={course.popular ? "border-primary ring-2 ring-primary/10 relative overflow-hidden" : ""}>
                                {course.popular && (
                                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader>
                                    <div className="flex items-center space-x-2 text-primary text-sm font-semibold mb-2">
                                        <Clock className="size-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <h4 className="text-xl font-bold">{course.title}</h4>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-muted text-sm leading-relaxed">{course.description}</p>
                                    <ul className="space-y-3">
                                        {course.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-xs text-slate-700">
                                                <CheckCircle className="size-4 text-secondary mr-2 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant={course.popular ? "primary" : "outline"} className="w-full">
                                        Enquire Now <ChevronRight className="ml-2 size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
