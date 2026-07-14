import type { ActivityLevel, CalorieGoal } from "../types/gainz";

export const activityLevels: ActivityLevel[] = [
    { id: "sedentary", label: "Sedentary — cardio is a rumor", multiplier: 1.2 },
    { id: "light", label: "Lightly Active — 1–3 token sessions", multiplier: 1.375 },
    { id: "moderate", label: "Moderately Active — 3–5 honest days", multiplier: 1.55 },
    { id: "very", label: "Very Active — 6–7 days, certified beast", multiplier: 1.725 },
    { id: "squat-rack", label: "I basically live in the squat rack", multiplier: 1.9 },
];

export const calorieGoals: CalorieGoal[] = [
    { id: "bulk", label: "Clean Bulk — +500, seasonal mass", adjustment: 500 },
    { id: "cut", label: "Tactical Cut — −500, shredding for the beach", adjustment: -500 },
    { id: "maintain", label: "Maintenance — 0, holding the line", adjustment: 0 },
];
