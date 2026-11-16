export default function BentoPage() {
  return (
    <div className="grid auto-rows-[120px] grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded-2xl bg-white p-6 font-bold shadow-sm md:col-span-2 md:row-span-2">
        Блок 1 (2×2)
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">Блок 2</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">Блок 3</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">Блок 4</div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">Блок 5</div>
      <div className="rounded-2xl bg-white p-6 font-bold shadow-sm md:col-span-3">
        Блок 6 (3 колонки)
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">Блок 7</div>
    </div>
  )
}