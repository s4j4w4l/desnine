type AccordionItemProps = {
  index: number;
  openIndex: number | null;
  setOpenIndex: (n: number | null) => void;
  question: string;
  answer: string;
};

export function AccordionItem({
  index,
  openIndex,
  setOpenIndex,
  question,
  answer,
}: AccordionItemProps) {
  const open = openIndex === index;

  return (
    <div className="p-5">
      <button
        type="button"
        onClick={() => setOpenIndex(open ? null : index)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium">{question}</span>
        <span
          className={`ml-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}
