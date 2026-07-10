import type { WorkoutWeek } from "../types/workout";

export const workoutWeeks = [
    {
        name: "Phase 1: The Anterior Awakening",
        days: [
            {
                day: "Monday",
                morning: [
                    { name: "Hamstring Un-f*cker", description: "Push your hips to the ceiling.", metric: "60 Sec", alternative: "Standing Toe Touches" },
                    { name: "Glute Wake-up Call", description: "Squeeze the cheeks.", metric: "2 × 15", alternative: "Bodyweight Squats" },
                    { name: "Thoracic Spine Liberator", description: "Arch and flex the upper back.", metric: "10 Reps", alternative: "Seated Chair Twists" },
                ],
                afternoon: [
                    { name: "Flat Barbell Bench Press", description: "Plant your feet, retract the scapula.", metric: "4 × 8–10", alternative: "Heavy DB Press or weighted Pushups" },
                    { name: "Incline Dumbbell Flyes", description: "Hug an invisible barrel.", metric: "3 × 12", alternative: "Resistance Band Flyes" },
                    { name: "Posture Reinforcements", description: "Pull the rope to your eyeballs.", metric: "3 × 15", alternative: "Band Pull-Aparts" },
                    { name: "Tricep Rope Pushdowns", description: "Lock the elbows to your ribs.", metric: "3 × 12–15", alternative: "Overhead Dumbbell Extensions" },
                ],
            },
            {
                day: "Tuesday",
                morning: [
                    { name: "Hip Flexor Savior", description: "Sink deep into the lunge.", metric: "45 Sec/Leg", alternative: "Lying Knee-to-Chest Stretches" },
                    { name: "Lower Back Decompressor", description: "Reach forward and breathe.", metric: "60 Sec", alternative: "Dead Hangs from a bar" },
                    { name: "Ankle Mobility Rotations", description: "Draw the alphabet with your toe.", metric: "1 Set/Leg", alternative: "Calf Raises on a stair edge" },
                ],
                afternoon: [
                    { name: "Seated Dumbbell Shoulder Press", description: "Keep the chest up.", metric: "4 × 8–10", alternative: "Pike Pushups" },
                    { name: "Lateral Raises (Spam these)", description: "Pour the water out of the pitcher.", metric: "4 × 15", alternative: "Water Jug Raises" },
                    { name: "Chest Poppers: Wide Lat Pulldowns", description: "Pull to your upper chest.", metric: "4 × 10", alternative: "Pull-ups or Heavy DB Rows" },
                    { name: "Barbell Bicep Curls", description: "No swinging.", metric: "3 × 10", alternative: "Resistance Band Curls" },
                ],
            },
            {
                day: "Wednesday",
                morning: [
                    { name: "Full Body Tension Release", description: "Lie on the floor and breathe.", metric: "2 Mins", alternative: "Just nap, bro" },
                    { name: "Pec Minor Stretch", description: "Lean forward in a doorway.", metric: "45 Sec/Side", alternative: "Wall Pec Stretch" },
                    { name: "Glute Activator (Clamshells)", description: "Protects the knees.", metric: "2 × 15/Side", alternative: "Side Leg Raises" },
                ],
                afternoon: [
                    { name: "Decline Bench Press", description: "Target the lower chest.", metric: "4 × 8–10", alternative: "Dips or Decline Pushups" },
                    { name: "Cable Crossovers", description: "Cross hands at bottom.", metric: "3 × 15", alternative: "Dumbbell Floor Flyes" },
                    { name: "Seated Cable Rows", description: "Pinch shoulder blades together.", metric: "4 × 10–12", alternative: "Bent-Over DB Rows" },
                    { name: "Overhead Tricep Extensions", description: "Target the long head.", metric: "3 × 12", alternative: "Close-Grip Pushups" },
                ],
            },
            {
                day: "Thursday",
                morning: [
                    { name: "Dynamic Spine Twists", description: "Rotate the torso slowly.", metric: "15 Reps", alternative: "Lying Windshield Wipers" },
                    { name: "Hamstring Un-f*cker 2.0", description: "Hips high.", metric: "60 Sec", alternative: "Seated Toe Touches" },
                    { name: "Shoulder Dislocates", description: "Pass a stick over your head.", metric: "15 Reps", alternative: "Arm Circles" },
                ],
                afternoon: [
                    { name: "Arnold Presses", description: "Palms facing you, rotate up.", metric: "4 × 10", alternative: "Standard DB Press" },
                    { name: "Front Plate Raises", description: "Grab a 45 lb plate like a wheel.", metric: "3 × 12", alternative: "DB Front Raises" },
                    { name: "Straight Arm Pulldowns", description: "Keep arms straight. Lats only.", metric: "3 × 15", alternative: "Dumbbell Pullovers on bench or floor" },
                    { name: "Hammer Curls", description: "Thumbs up.", metric: "3 × 12", alternative: "Towel Curls with a resistance band" },
                ],
            },
            {
                day: "Friday",
                morning: [
                    { name: "Pre-Club Pump Preparations", description: "Small circles forward.", metric: "2 Mins", alternative: "Jumping Jacks" },
                    { name: "Hip Opener (Pigeon Pose)", description: "Cross one leg under you.", metric: "60 Sec/Side", alternative: "Figure-4 Lying Stretch" },
                    { name: "Core Activation (Planks)", description: "Squeeze the glutes.", metric: "3 × 60 Sec", alternative: "Hollow Body Holds" },
                ],
                afternoon: [
                    { name: "Incline Barbell Press", description: "Lower to the clavicle.", metric: "4 × 8–10", alternative: "Incline Pushups with feet elevated" },
                    { name: "Pec Deck Machine", description: "Don't use your arms; use your chest.", metric: "3 × 12–15", alternative: "Flat DB Flyes" },
                    { name: "Lateral Raise Burnout", description: "Drop weight until failure.", metric: "1 × 50", alternative: "Band Lateral Raises" },
                    { name: "Bicep & Tricep Super-set", description: "Gorge the arms with blood.", metric: "3 × 15", alternative: "DB Curls & Chair Dips" },
                ],
            },
        ],
    },
] satisfies WorkoutWeek[];
