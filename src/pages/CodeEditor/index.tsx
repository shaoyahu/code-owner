
export default function CodeEditor() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="bg-emerald-300 h-[64px]">header</div>
      <div className="flex flex-1 justify-around gap-4">
        <div className="bg-pink-200 w-[200px]">左</div>
        <div className="flex-1 bg-blue-400">中</div>
        <div className="bg-green-400 w-[200px]">右</div>
      </div>
    </div>
  );
}
