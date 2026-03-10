'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductPrice } from '@/components/products/ProductPrice';
import { ProductSpecsTable } from '@/components/products/ProductSpecsTable';
import { AddToCartButton } from '@/components/products/AddToCartButton';
import { QuantitySelector } from '@/components/products/QuantitySelector';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getCategorySlugForProduct } from '@/lib/catalog';
import type { Product, Package } from '@/types';

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const { products, packages, language } = useAdmin();

  const product = useMemo(() => {
    const p = products.find((x) => x.id === id) ?? packages.find((x) => x.id === id);
    return p as (Product | Package) | undefined;
  }, [id, products, packages]);

  const [quantity, setQuantity] = React.useState(product?.type === 'package' ? (product.step ?? 20) : 1);

  if (!product) {
    return (
      <PageContainer className="py-16 text-center">
        <h1 className="text-2xl font-bold text-[var(--nw-text)]">Məhsul tapılmadı</h1>
        <Link href="/newebsite/catalog" className="mt-4 inline-block text-[var(--nw-primary)] hover:underline">
          Kataloqa qayıt
        </Link>
      </PageContainer>
    );
  }

  const categorySlug = getCategorySlugForProduct(product);
  const categoryLabel = categorySlug;

  const specRows = [
    { label: language === 'AZ' ? 'Məhsul kodu' : 'Product ID', value: product.id },
    { label: language === 'AZ' ? 'Valyuta' : 'Currency', value: product.currency },
    ...(product.type === 'package' && product.step
      ? [{ label: language === 'AZ' ? 'Ölçü (m²)' : 'Size (m²)', value: product.step }]
      : []),
  ];

  const allItems = [...packages.filter((p) => p.isActive), ...products.filter((p) => p.isActive)];
  const related = allItems.filter((p) => getCategorySlugForProduct(p) === categorySlug && p.id !== product.id);

  return (
    <PageContainer className="py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: categoryLabel, href: `/newebsite/catalog/${categorySlug}` },
          { label: product.name[language], href: undefined },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <ProductGallery images={[product.image]} alt={product.name[language]} />

        <div>
          {product.type === 'package' && (
            <Badge variant="info" className="mb-3">
              Paket
            </Badge>
          )}
          <Badge variant="success" className="mb-3">
            {language === 'AZ' ? 'Stokda' : language === 'RU' ? 'В наличии' : 'In stock'}
          </Badge>

          <h1 className="text-2xl md:text-3xl font-bold text-[var(--nw-text)] leading-tight">
            {product.name[language]}
          </h1>

          <div className="mt-4">
            <ProductPrice
              price={product.price}
              currency={product.currency}
              isPriceVisible={product.isPriceVisible}
              step={product.type === 'package' ? product.step ?? 20 : 1}
              size="lg"
            />
          </div>

          <div className="mt-6 prose prose-sm text-[var(--nw-text-secondary)] max-w-none">
            <p className="whitespace-pre-line">{product.description[language]}</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {product.type !== 'package' && (
              <QuantitySelector value={quantity} onChange={setQuantity} />
            )}
            <AddToCartButton product={product} size="lg" className="sm:flex-1" />
            <a
              href={`https://wa.me/994506368731?text=${encodeURIComponent(product.name[language] + ' haqqında')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-8">
            <ProductSpecsTable rows={specRows} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <RelatedProducts products={allItems} currentId={product.id} max={4} />
      </div>
    </PageContainer>
  );
}
