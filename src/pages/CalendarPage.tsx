export default function CalendarPage() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const today = now.getDate()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const startCol = firstDay === 0 ? 7 : firstDay

  return (
    <div className="max-w-md rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold capitalize">
        {now.toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}
      </h2>

      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
          <div key={d} className="font-medium text-gray-400">
            {d}
          </div>
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1
          return (
            <div
              key={day}
              style={day === 1 ? { gridColumnStart: startCol } : undefined}
              className={`rounded-lg border p-2 ${
                day === today ? 'bg-black font-bold text-white' : ''
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}