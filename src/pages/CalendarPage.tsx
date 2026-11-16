import { useCalendarData } from '../entities/useCalendarStore'
import { cn } from '../shared/cn'

export default function CalendarPage() {
  const { formattedTitle, startOffset, days, weekDays } = useCalendarData()

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">{formattedTitle}</h1>

        {/* Заголовки дней недели */}
        <div className="mb-2 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase text-gray-400">
          {weekDays.map((dayName) => (
            <div key={dayName} className="py-2">
              {dayName}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: startOffset }).map((_, idx) => (
            <div key={`empty-${idx}`} className="aspect-square" />
          ))}

          {days.map(({ day, isToday }) => (
            <div
              key={day}
              className={cn(
                'flex aspect-square items-center justify-center rounded-xl border text-sm font-medium transition',
                isToday
                  ? 'border-indigo-600 bg-indigo-600 font-bold text-white shadow-sm'
                  : 'border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-100'
              )}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
