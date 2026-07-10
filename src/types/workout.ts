export const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

export type Weekday = (typeof weekdays)[number];

export interface Exercise {
    name: string;
    description: string;
    metric: string;
    alternative?: string;
}

export interface WorkoutDay {
    day: Weekday;
    morning: Exercise[];
    afternoon: Exercise[];
}

export interface WorkoutWeek {
    name: string;
    days: WorkoutDay[];
}

export interface Supplement {
    name: string;
    url?: string;
}
