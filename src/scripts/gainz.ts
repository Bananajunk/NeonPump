import { activityLevels, calorieGoals } from "../data/gainz";
import type { GainzResult, GainzStats } from "../types/gainz";

const POUNDS_TO_KILOGRAMS = 0.453_592_37;
const INCHES_TO_CENTIMETERS = 2.54;
const INCHES_PER_FOOT = 12;

const CALORIES_PER_GRAM_PROTEIN = 4;
const CALORIES_PER_GRAM_CARB = 4;
const CALORIES_PER_GRAM_FAT = 9;

const PROTEIN_RATIO = 0.3;
const CARB_RATIO = 0.4;
const FAT_RATIO = 0.3;

// Mifflin-St Jeor sex constant. Hardcoded to the male value by design — the
// bro persona assumes a male engine, and the results copy discloses it.
const MIFFLIN_SEX_CONSTANT = 5;

function calculateGainz(stats: GainzStats): GainzResult | undefined {
    const activity = activityLevels.find((level) => level.id === stats.activityId);
    const goal = calorieGoals.find((option) => option.id === stats.goalId);

    if (!activity || !goal) {
        return undefined;
    }

    const weightKilograms = stats.weightLbs * POUNDS_TO_KILOGRAMS;
    const heightCentimeters = (stats.feet * INCHES_PER_FOOT + stats.inches) * INCHES_TO_CENTIMETERS;
    const basalRate = 10 * weightKilograms + 6.25 * heightCentimeters - 5 * stats.age + MIFFLIN_SEX_CONSTANT;
    const calorieCeiling = Math.round(basalRate * activity.multiplier + goal.adjustment);

    return {
        calorieCeiling,
        proteinGrams: Math.round((calorieCeiling * PROTEIN_RATIO) / CALORIES_PER_GRAM_PROTEIN),
        carbGrams: Math.round((calorieCeiling * CARB_RATIO) / CALORIES_PER_GRAM_CARB),
        fatGrams: Math.round((calorieCeiling * FAT_RATIO) / CALORIES_PER_GRAM_FAT),
    };
}

function readNumber(form: HTMLFormElement, name: string): number {
    const field = form.elements.namedItem(name);

    return field instanceof HTMLInputElement ? field.valueAsNumber : Number.NaN;
}

function readSelection(form: HTMLFormElement, name: string): string {
    const field = form.elements.namedItem(name);

    return field instanceof HTMLSelectElement ? field.value : "";
}

function readStats(form: HTMLFormElement): GainzStats | undefined {
    const rawInches = readNumber(form, "inches");
    const stats: GainzStats = {
        weightLbs: readNumber(form, "weight"),
        feet: readNumber(form, "feet"),
        inches: Number.isNaN(rawInches) ? 0 : rawInches,
        age: readNumber(form, "age"),
        activityId: readSelection(form, "activity"),
        goalId: readSelection(form, "goal"),
    };

    const totalInches = stats.feet * INCHES_PER_FOOT + stats.inches;
    const isValid =
        stats.weightLbs > 0 &&
        stats.age > 0 &&
        stats.feet >= 0 &&
        stats.inches >= 0 &&
        totalInches > 0 &&
        stats.activityId !== "" &&
        stats.goalId !== "";

    return isValid ? stats : undefined;
}

export function initializeGainzCalculator(): void {
    const form = document.querySelector<HTMLFormElement>("#gainz-form");
    const results = document.querySelector<HTMLElement>("[data-gainz-results]");
    const error = document.querySelector<HTMLElement>("[data-gainz-error]");
    const ceiling = document.querySelector<HTMLElement>("[data-gainz-ceiling]");
    const protein = document.querySelector<HTMLElement>("[data-gainz-protein]");
    const carbs = document.querySelector<HTMLElement>("[data-gainz-carbs]");
    const fats = document.querySelector<HTMLElement>("[data-gainz-fats]");

    if (!form || !results || !error || !ceiling || !protein || !carbs || !fats) {
        return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const stats = readStats(form);
        const result = stats ? calculateGainz(stats) : undefined;

        if (!result) {
            results.hidden = true;
            error.hidden = false;
            return;
        }

        ceiling.textContent = result.calorieCeiling.toLocaleString();
        protein.textContent = result.proteinGrams.toLocaleString();
        carbs.textContent = result.carbGrams.toLocaleString();
        fats.textContent = result.fatGrams.toLocaleString();

        error.hidden = true;
        results.hidden = false;
        results.focus();
        results.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    });
}
