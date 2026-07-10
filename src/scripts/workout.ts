const MILLISECONDS_PER_DAY = 86_400_000;

function getWeekOfYear(date: Date): number {
    const yearStart = Date.UTC(date.getFullYear(), 0, 1);
    const currentDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const elapsedDays = Math.floor((currentDate - yearStart) / MILLISECONDS_PER_DAY);
    const firstWeekOffset = new Date(yearStart).getUTCDay();

    return Math.ceil((elapsedDays + firstWeekOffset + 1) / 7);
}

function selectCurrentWeek(): HTMLElement | undefined {
    const weeks = Array.from(document.querySelectorAll<HTMLElement>("[data-workout-week]"));

    if (weeks.length === 0) {
        return undefined;
    }

    const selectedIndex = (getWeekOfYear(new Date()) - 1) % weeks.length;

    weeks.forEach((week, index) => {
        week.hidden = index !== selectedIndex;
    });

    return weeks[selectedIndex];
}

function scrollToCurrentDay(currentWeek: HTMLElement): void {
    const dayNumber = new Date().getDay();

    if (dayNumber < 1 || dayNumber > 5 || window.location.hash) {
        return;
    }

    const currentDay = currentWeek.querySelector<HTMLElement>(`[data-weekday="${dayNumber}"]`);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.setTimeout(() => {
        currentDay?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
        });
    }, 400);
}

export function initializeWorkout(): void {
    const currentWeek = selectCurrentWeek();

    if (currentWeek) {
        scrollToCurrentDay(currentWeek);
    }
}
