export default function BentoPage() {
  return (
    <div className="grid auto-rows-[120px] grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded-lg border bg-gray-100 p-4 font-bold md:col-span-2 md:row-span-2">
        1 (2x2)
      </div>
      <div className="rounded-lg border p-4"> 2</div>
      <div className="rounded-lg border p-4"> 3</div>
      <div className="rounded-lg border p-4"> 4</div>
      <div className="rounded-lg border p-4"> 5</div>
      <div className="rounded-lg border bg-gray-100 p-4 font-bold md:col-span-3">
       6
      </div>
      <div className="rounded-lg border p-4">Блок 7</div>
    </div>
  )
}
