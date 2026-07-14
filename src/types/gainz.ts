export interface ActivityLevel {
    id: string;
    label: string;
    multiplier: number;
}

export interface CalorieGoal {
    id: string;
    label: string;
    adjustment: number;
}

export interface GainzStats {
    weightLbs: number;
    feet: number;
    inches: number;
    age: number;
    activityId: string;
    goalId: string;
}

export interface GainzResult {
    calorieCeiling: number;
    proteinGrams: number;
    carbGrams: number;
    fatGrams: number;
}
