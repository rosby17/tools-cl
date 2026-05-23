export default function BackgroundOrbs() {
  return (
    <div className="bg-orbs fixed inset-0 pointer-events-none -z-10">
      <div className="orb orb-1 absolute w-[600px] h-[600px] bg-[radial-gradient(circle,#6e00ff,transparent_70%] top-[-200px] left-[-100px] animate-[drift1_18s_ease-in-out_infinite] opacity-35" />
      <div className="orb orb-2 absolute w-[500px] h-[500px] bg-[radial-gradient(circle,#ff003c,transparent_70%] top-[200px] right-[-150px] animate-[drift2_22s_ease-in-out_infinite] opacity-25" />
      <div className="orb orb-3 absolute w-[700px] h-[700px] bg-[radial-gradient(circle,#003cff,transparent_70%] bottom-[-200px] left-[30%] animate-[drift3_26s_ease-in-out_infinite] opacity-20" />
    </div>
  );
}
