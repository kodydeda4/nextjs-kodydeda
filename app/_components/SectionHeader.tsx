export default function SectionHeader(props: { caption: string, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-1 pb-4">
      {/* <p className="text-xs text-muted-foreground">{props.caption}</p> */}
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p className="text-muted-foreground font-medium">{props.description}</p>
    </div>
  );
};

