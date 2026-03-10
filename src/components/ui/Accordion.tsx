'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  value: string;
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ value, title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[var(--nw-border)] last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-medium text-[var(--nw-text)] hover:text-[var(--nw-primary)] transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={cn('w-5 h-5 shrink-0 transition-transform', open && 'rotate-180')} />
      </button>
      {open && <div className="pb-4 text-[var(--nw-text-secondary)]">{children}</div>}
    </div>
  );
}

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('', className)}>{children}</div>;
}
