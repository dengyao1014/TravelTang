"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Section as SectionType } from "@/types/blocks/section";
import { useEffect, useState } from "react";

export default function Feature3({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center md:text-left">
            {section.label && (
              <Badge variant="outline" className="mb-4">
                {section.label}
              </Badge>
            )}
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
              {section.title}
            </h2>
            <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              {section.description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center md:text-left">
          {section.label && (
            <Badge variant="outline" className="mb-4">
              {section.label}
            </Badge>
          )}
          <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
            {section.title}
          </h2>
          <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
            {section.description}
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="tab-1">
            <TabsList className="grid gap-4 rounded-3xl border border-input/40 bg-background/80 p-4 shadow-sm md:grid-cols-2 lg:grid-cols-4">
              {section.items?.map((item, index) => {
                return (
                  <TabsTrigger
                    key={index}
                    value={`tab-${index + 1}`}
                    className="group h-full pointer-events-none lg:pointer-events-auto"
                  >
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-transparent bg-muted/20 px-5 py-6 text-left transition hover:bg-muted/40 group-data-[state=active]:border-primary group-data-[state=active]:bg-background group-data-[state=active]:shadow-md lg:flex-col lg:items-start lg:px-6">
                      <div className="flex shrink-0 items-center justify-center">
                        <span className="flex size-9 items-center justify-center rounded-full border bg-background font-mono text-sm font-semibold group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground group-data-[state=active]:ring-2 group-data-[state=active]:ring-primary/40">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 text-left lg:text-left">
                        <h3 className="text-base font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.image && (
                      <div className="mt-6 block border bg-muted/50 px-4 py-6 lg:hidden">
                        <div className="aspect-video">
                          <img
                            src={item.image?.src}
                            alt={item.image?.alt || item.title}
                            className="h-full w-full rounded-md border object-cover shadow-sm"
                          />
                        </div>
                      </div>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="mt-8 hidden lg:block">
              {section.items?.map((item, index) => {
                if (!item.image) return null;

                return (
                  <TabsContent
                    key={index}
                    value={`tab-${index + 1}`}
                    className="aspect-video overflow-hidden rounded-3xl border shadow-md"
                  >
                    {item.image && (
                      <img
                        src={item.image.src}
                        alt={item.image.alt || item.title}
                        className="h-full w-full rounded-xl border object-cover shadow-sm"
                      />
                    )}
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
