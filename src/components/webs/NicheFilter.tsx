"use client";

interface NicheFilterProps {
  niches: string[];
  active: string | null;
  onSelect: (niche: string | null) => void;
}

export function NicheFilter({ niches, active, onSelect }: NicheFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
          active === null
            ? "bg-primary/10 border-primary/30 text-primary"
            : "bg-muted border-border text-white/50 hover:text-white hover:border-white/20"
        }`}
      >
        Todos
      </button>
      {niches.map((niche) => (
        <button
          key={niche}
          onClick={() => onSelect(niche)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
            active === niche
              ? "bg-primary/10 border-primary/30 text-primary"
              : "bg-muted border-border text-white/50 hover:text-white hover:border-white/20"
          }`}
        >
          {niche}
        </button>
      ))}
    </div>
  );
}
