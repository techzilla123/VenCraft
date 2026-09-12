import imgCover from "./4624a3602af286d2cf3217b7eb3ffb6d317e6e03.png";

export default function Cover() {
  return (
    <div className="relative size-full" data-name="Cover">
      <div className="absolute h-[913px] left-0 top-0 w-[1370px]" data-name="cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
      </div>
    </div>
  );
}