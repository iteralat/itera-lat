"use client";

import { useState, useMemo } from "react";
import { websites } from "@/data/portfolio";
import type { WebItem } from "@/data/portfolio";
import { WebCard } from "./WebCard";
import { ScreenshotViewer } from "./ScreenshotViewer";
import { NicheFilter } from "./NicheFilter";

export function WebCatalog() {
  const [activeNiche, setActiveNiche] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<WebItem | null>(null);

  const niches = useMemo(
    () => Array.from(new Set(websites.map((w) => w.niche))),
    []
  );

  const filtered = activeNiche
    ? websites.filter((w) => w.niche === activeNiche)
    : websites;

  return (
    <>
      <NicheFilter niches={niches} active={activeNiche} onSelect={setActiveNiche} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((item, index) => (
          <WebCard
            key={item.id}
            item={item}
            index={index}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <ScreenshotViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
