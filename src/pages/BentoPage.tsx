export default function BentoPage() {
  return (
    <div className="grid auto-rows-[120px] grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2 md:row-span-2"> 1 (2x2)
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm"> 2</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm"> 3</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm"> 4</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm"> 5</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm md:col-span-3"> 6 (3x1)
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm"> 7</div>
    </div>
  )
}