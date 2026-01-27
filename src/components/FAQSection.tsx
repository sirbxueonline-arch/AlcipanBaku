'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
    const { language } = useAdmin();

    const faqData = [
        {
            question: {
                AZ: 'Alçıpan işləri üçün qiymət necə hesablanır?',
                RU: 'Как рассчитывается цена на гипсокартонные работы?',
                EN: 'How is the price calculated for drywall works?'
            },
            answer: {
                AZ: 'Qiymət kvadrat metrə görə hesablanır. Layihənin ölçüsü, material seçimi və dizayn mürəkkəbliyinə görə dəyişir.',
                RU: 'Цена рассчитывается за квадратный метр. Она зависит от размера проекта, выбора материала и сложности дизайна.',
                EN: 'The price is calculated per square meter. It varies depending on the project size, material choice, and design complexity.'
            }
        },
        {
            question: {
                AZ: 'Zəmanət verirsiniz?',
                RU: 'Вы даете гарантию?',
                EN: 'Do you provide a warranty?'
            },
            answer: {
                AZ: 'Bəli, bütün işlərə zəmanət veririk. Bizim üçün keyfiyyət və müştəri məmnuniyyəti əsasdır.',
                RU: 'Да, мы даем гарантию на все работы. Для нас качество и удовлетворенность клиентов имеют первостепенное значение.',
                EN: 'Yes, we provide a warranty for all works. Quality and customer satisfaction are paramount to us.'
            }
        }
    ];

    return (
        <section className="container mx-auto px-4 py-16 max-w-4xl" id="faq">
            <h2 className="text-center text-3xl font-bold mb-12 text-white">
                {language === 'AZ' ? 'Tez-tez Verilən Suallar' : language === 'RU' ? 'Часто Задаваемые Вопросы' : 'FAQ'}
            </h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <AccordionItem key={index} question={item.question[language]} answer={item.answer[language]} />
                ))}
            </div>
        </section>
    );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl bg-[var(--card)] overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className={`p-2 rounded-full bg-white/5 text-white/50 transition-colors ${isOpen ? 'bg-white/10 text-white' : ''}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="p-4 md:p-6 pt-0 text-[var(--muted)] leading-relaxed border-t border-white/5">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
