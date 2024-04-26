export default function SectionHeader(props: { caption: string, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <p className="text-sm text-accent-foreground font-bold">{props.caption}</p>
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-lg text-muted-foreground font-medium">{props.description}</p>
    </div>
  );
};

