'use client';

import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';

export default function AboutPage() {
  return (
    <PageContainer className="py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Haqqımızda', href: undefined }]} />
      <div className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-[var(--nw-text)] mb-6">Haqqımızda</h1>
        <p className="text-[var(--nw-text-secondary)] leading-relaxed">
          Alcipan Baku — Bakıda tikinti materialları və alçipan sistemləri üzrə peşəkar təchizatçıdır.
          20 illik təcrübə ilə keyfiyyətli məhsul və xidmət təklif edirik.
        </p>
        <p className="mt-4 text-[var(--nw-text-secondary)] leading-relaxed">
          Gipsarton lövhələr, metal profillər, vidalar, izolyasiya və montaj aksesuarları geniş çeşiddə mövcuddur.
          KNAUF, RIGIPS, GILAN kimi brendlərin rəsmi tərəfdaşıyıq.
        </p>
        <a href="tel:+994506368731" className="mt-8 inline-block font-semibold text-[var(--nw-primary)] hover:underline">
          +994 50 636 87 31
        </a>
      </div>
    </PageContainer>
  );
}
