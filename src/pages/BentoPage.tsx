export default function BentoPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bento-дашборд</h1>
      </div>

      <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-4">

        <div className="grid grid-cols-2 grid-rows-2 flex-col justify-between rounded-2xl bg-indigo-600 p-6 text-white shadow-sm md:col-span-2 md:row-span-2">
          
        </div>

        <div className="grid- bg-white p-6 shadow-sm">
          <span className="text-sm text-gray-500">Активные пользователи</span>
          <div className="mt-3 text-3xl font-bold text-gray-900">2 410</div>
        </div>

        {/* Блок 3 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <span className="text-sm text-gray-500">Конверсия</span>
          <div className="mt-3 text-3xl font-bold text-emerald-600">3</div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <span className="text-sm text-gray-500">Новые заказы</span>
          <div className="mt-3 text-3xl font-bold text-gray-900">4</div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <span className="text-sm text-gray-500">Средний чек</span>
          <div className="mt-3 text-3xl font-bold text-gray-900">5</div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl bg-gray-900 p-6 text-white shadow-sm md:col-span-3">
          <span className="text-sm text-gray-400">Широкий блок (3 колонки)</span>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mt-3 text-3xl font-bold text-amber-600">7</div>
        </div>
      </div>
    </section>
  )
}
