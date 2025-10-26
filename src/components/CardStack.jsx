export default function CardStack({ name, icon, level }) {
  return (
    <div className="
      bg-white/30 backdrop-blur-md border border-white/20
      shadow-md rounded-2xl p-4
      flex flex-col items-center justify-center
      text-white text-center
    ">
      <i className={`${icon} text-4xl mb-2`}></i>
      <p className="font-semibold">{name}</p>
      <p className="text-sm opacity-80">{level}</p>
    </div>
  );
}
