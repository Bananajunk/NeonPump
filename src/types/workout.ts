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

export type SupplementPhase = "am" | "pm";

export interface Supplement {
    /** Short label shown in the quick-look status grid, e.g. "Whey". */
    name: string;
    /** Core operational timing paired with the name in the status pill. */
    timing: string;
    /** Brand-agnostic product name used in the deployment protocol, e.g. "Whey Protein Isolate". */
    protocolName: string;
    /** When the supplement is deployed in the daily routine. */
    phase: SupplementPhase;
    /** Dose descriptor shown in the protocol, e.g. "20–30g dose". */
    dose: string;
    /** Optional extra timing note, e.g. "taken 30–60 mins before bed". */
    note?: string;
    /** Optional affiliate link; when present the status pill becomes a sponsored link. */
    url?: string;
}
