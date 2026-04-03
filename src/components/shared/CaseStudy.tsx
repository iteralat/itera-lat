interface CaseStudyProps {
  challenge: string;
  solution: string;
  result: string;
}

export function CaseStudy({ challenge, solution, result }: CaseStudyProps) {
  const blocks = [
    { label: "Desafío", text: challenge },
    { label: "Solución", text: solution },
    { label: "Resultado", text: result },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="p-5 bg-muted border border-border rounded-lg"
        >
          <div className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">
            {block.label}
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{block.text}</p>
        </div>
      ))}
    </div>
  );
}
