export interface CalendarDay {
  day: number
  isToday: boolean
}

export function useCalendarData() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const todayDate = now.getDate()

  const monthName = now.toLocaleString('ru-RU', { month: 'long' })
  const formattedTitle = `${monthName[0].toUpperCase()}${monthName.slice(1)} ${year}`

  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const firstDayRaw = new Date(year, month, 1).getDay()
  const startOffset = firstDayRaw === 0 ? 6 : firstDayRaw - 1

  const days: CalendarDay[] = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1
    return {
      day,
      isToday: day === todayDate,
    }
  })

  return {
    formattedTitle,
    startOffset,
    days,
    weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  }
}
