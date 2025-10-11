type EmptyBlockProps = {
  text: string;
};
export default function EmptyBlock(props: EmptyBlockProps) {
  const { text } = props;
  return (
    <div className="h-full w-full flex items-center justify-center">
      <span className="text-[#008cff6d]">{text}</span>
    </div>
  );
}
