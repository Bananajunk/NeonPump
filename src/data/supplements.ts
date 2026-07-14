import type { Supplement } from "../types/workout";

export const supplements: Supplement[] = [
    {
        name: "Whey",
        timing: "Pre- or Post-Workout",
        protocolName: "Whey Protein Isolate",
        phase: "am",
        dose: "20–30g dose",
    },
    {
        name: "Creatine",
        timing: "Daily Consistency",
        protocolName: "Creatine Monohydrate",
        phase: "am",
        dose: "5g dose",
    },
    {
        name: "Vitamin D",
        timing: "The Morning Stack",
        protocolName: "Vitamin D3 + K2",
        phase: "am",
        dose: "1 dose",
    },
    {
        name: "Magnesium",
        timing: "PM Recovery",
        protocolName: "Magnesium Bisglycinate",
        phase: "pm",
        dose: "200mg dose",
        note: "taken 30–60 mins before bed",
    },
    {
        name: "Omega-3",
        timing: "The Morning Stack",
        protocolName: "Omega-3 Fatty Acids",
        phase: "am",
        dose: "1 dose",
    },
];
