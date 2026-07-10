import type { WorkoutWeek } from "../types/workout";

export const workoutWeeks = [
    {
        name: "Phase 1: The Aesthetic Ascension",
        days: [
            {
                day: "Monday",
                morning: [
                    { name: "Pec Doorway Pre-Stretch", description: "Plant a forearm in the doorframe and lean through it like you're about to fight the door. Wakes the chest up so it actually fires later instead of leaving your front delts to do all the heroics.", metric: "45 Sec/Side", alternative: "Wall Pec Stretch" },
                    { name: "Bicep Tendon Wake-up", description: "Arm straight, palm up, gently pull the fingers back toward the floor. We are NOT snapping a cold bicep tendon on rep one and spending curl season in a sling, chief.", metric: "30 Sec/Arm", alternative: "Light Band Curls" },
                    { name: "Scapular Push-ups", description: "Top of a push-up, arms locked, just pinch and spread the shoulder blades. Tiny movement, massive smugness. Primes the bench so the bar path is buttery.", metric: "2 × 12", alternative: "Wall Scapular Slides" },
                ],
                afternoon: [
                    { name: "Flat DB Bench Press", description: "Plant the feet, arch like you owe the bench money, and drive the dumbbells up like you're pushing the ceiling away from your gains. Lower slow, explode up. This is the bread, the butter, and the entire bakery of chest day. If you're not slightly scared racking them, go heavier.", metric: "4 × 8–10", alternative: "Barbell Bench Press" },
                    { name: "Incline DB Press", description: "Bench to ~30°, not 90° — you're building an upper shelf, not shoulder-pressing by accident. Squeeze at the top like you're trying to touch the dumbbells together without actually clanking them (clanking is for amateurs and people who skip this app).", metric: "4 × 8–10", alternative: "Barbell Incline Press" },
                    { name: "DB Flyes", description: "Soft elbows, hug the world's biggest invisible barrel, and feel the stretch at the bottom like your pecs are about to file a complaint. This is a stretch movement, bro, not a second press — leave the ego weight in the rack where it belongs.", metric: "3 × 12", alternative: "Cable Crossovers" },
                    { name: "Alternating DB Curls", description: "Pin the elbows to your ribs and curl one arm at a time so you can stare lovingly at each rep. No swinging, no hip thrust, no summoning momentum from the ancestors. Just you, the dumbbell, and the pump you were born to have.", metric: "3 × 10/Arm", alternative: "EZ-Bar Curls" },
                    { name: "Incline Bench DB Curls", description: "Lie back on the incline, let the arms hang straight down, and curl from that dead stretch. This is where the bicep peak is legally required to grow. It'll feel humbling — that's the long head finally being asked to work for once.", metric: "3 × 12", alternative: "Cable Curls" },
                    { name: "Hammer Curls", description: "Thumbs to the ceiling the whole way, curl like you're hammering nails for a very swole carpenter. Builds the brachialis so your arms look thick from the side, which is the only angle the group chat cares about.", metric: "3 × 12", alternative: "Cable Rope Hammer Curls" },
                ],
            },
            {
                day: "Tuesday",
                morning: [
                    { name: "Dead Hang", description: "Grab a bar and just hang there like a majestic, decompressing bat. Lengthens the lats and un-crunches your spine after Monday's bench arch. Bonus: builds grip so your rows don't die before your back does.", metric: "2 × 30 Sec", alternative: "Lat Foam-Roll Reach" },
                    { name: "Band Pull-Aparts", description: "Arms out, pull the band apart, squeeze the shoulder blades like you're cracking a walnut between them. Wakes up the mid-back so you actually ROW today instead of just yanking with your biceps like a rookie.", metric: "2 × 20", alternative: "Reverse DB Flyes (light)" },
                    { name: "Tricep Cuff Circles", description: "Small elbow-bending arm circles to flood the tricep with blood before we set them on fire. Cold triceps skullcrush like glass — warm ones grow horseshoes.", metric: "1 Min", alternative: "Arm Swings" },
                ],
                afternoon: [
                    { name: "Single-Arm DB Rows", description: "Knee and hand on the bench, hoist the dumbbell off the floor and row it to your hip like you're starting a very heavy lawnmower. Full stretch at the bottom, full squeeze at the top. One arm at a time means zero excuses and zero cheating, cowboy.", metric: "4 × 10/Arm", alternative: "Pull-ups" },
                    { name: "Chest-Supported Incline DB Rows", description: "Lie face-down on the incline bench so it holds your torso still — now your lats can't hide behind lower-back swinging. Row the dumbbells to your hips and squeeze. This is the drill for a back so wide people apologize when they walk past you.", metric: "3 × 12", alternative: "Lat Pulldowns" },
                    { name: "DB Pullovers", description: "Lie across the bench, hold one dumbbell over your chest, and lower it behind your head into a giant stretch. Half chest, half lat, all glory. Ribcage expander of legend — the old-school bodybuilders swore by it and they were shredded before pre-workout even existed.", metric: "3 × 12", alternative: "Cable Straight-Arm Pulldowns" },
                    { name: "Flat Bench DB Skullcrushers", description: "Flat on your back, dumbbells above your face, hinge ONLY at the elbows and lower toward your ears (not your skull — we're being metaphorical about the crushing). Long head of the tricep gets obliterated. This is 60% of the arm, so respect it.", metric: "3 × 10", alternative: "Cable Rope Pushdowns" },
                    { name: "Seated Overhead DB Extension", description: "Sit up tall, one dumbbell held overhead with both hands, lower it behind your head and press back up. That deep stretch overhead is what carves the long head into a horseshoe. Keep the elbows pointed forward, not flaring out like you're doing the chicken dance.", metric: "3 × 12", alternative: "Cable Overhead Extension" },
                    { name: "DB Kickbacks", description: "Hinge over, upper arm pinned parallel to the floor, and kick the dumbbell straight back until the arm locks out. Squeeze like your life depends on it. Light weight, high reps, and the pump will make your tricep look like it's smuggling a small ham.", metric: "3 × 15", alternative: "Cable Kickbacks" },
                ],
            },
            {
                day: "Wednesday",
                morning: [
                    { name: "Reluctant Hip Flexor Stretch", description: "Deep lunge, sink the hips forward, and reflect on the life choices that led you to voluntarily train legs. Loosens the hips so the squats don't feel like a betrayal.", metric: "45 Sec/Leg", alternative: "Couch Stretch" },
                    { name: "Ankle Mobility Rock", description: "Kneel, drive one knee forward over the toes to free up the ankles. Stiff ankles = ugly squats = the quad gains slip right through your fingers. Do it. Yes, even you.", metric: "10/Leg", alternative: "Calf Wall Stretch" },
                    { name: "Bodyweight Squat to Stand", description: "Grab your toes, straighten the legs for a hamstring stretch, then drop into a deep squat and lift the chest. Greases the whole hinge. Consider it your final warning before the goblet squats find you.", metric: "2 × 10", alternative: "Cossack Squats" },
                ],
                afternoon: [
                    { name: "DB Goblet Squats", description: "Ah, leg day. The mythical event more skipped than jury duty. Cradle one dumbbell against your chest like it's the last protein shake on earth, sit STRAIGHT down between your heels until your hamstrings kiss your calves, and stand up with pride. Yes, your legs hold up the rest of your physique. No, you can't cheat this one with a good t-shirt. Go deep or go home in a wheelchair of shame.", metric: "4 × 12", alternative: "Barbell Back Squat" },
                    { name: "DB Romanian Deadlifts (RDLs)", description: "Dumbbells in front of the thighs, soft knees, and push your butt back toward the wall behind you like you're closing a car door with it. Feel the hamstrings stretch like a rubber band about to launch a spitball. Stand up by squeezing the glutes, not by yanking with your lower back. This is the move that stops you being an upper-body-only meme.", metric: "4 × 10", alternative: "Barbell RDL" },
                    { name: "Bulgarian Split Squats", description: "The exercise Satan designed personally. Back foot on the bench, dumbbell in each hand, and lunge straight down on the front leg until your soul briefly leaves your body. Do one leg fully, question everything, then do the other. Nobody has ever done these with a smile. Legend says the burn is just weakness applying for a transfer.", metric: "3 × 10/Leg", alternative: "Leg Press" },
                    { name: "DB Walking Lunges", description: "Grab the dumbbells and stride across the gym like a swole predator, dropping the back knee to a whisper above the floor each step. Your quads will beg. Ignore them. This is where 'do you even lift' becomes 'do you even walk,' and the answer, tomorrow, will be no.", metric: "3 × 20 Steps", alternative: "Barbell Walking Lunges" },
                    { name: "Standing DB Calf Raises", description: "Hold a dumbbell, rise onto the balls of your feet, and pause at the top like you're peeking over a fence at someone with bigger calves. Full stretch at the bottom. Calves are stubborn little gremlins, so slow reps and full range or don't bother — nobody respects a bodybuilder standing on toothpicks.", metric: "4 × 20", alternative: "Leg Press Calf Raises" },
                ],
            },
            {
                day: "Thursday",
                morning: [
                    { name: "Thoracic Extension Opener", description: "Lie back over the bench and reach the arms overhead to arch the upper spine. Opens the chest AND the lats at once — perfect prep for a day where you're pumping both ends of the torso.", metric: "60 Sec", alternative: "Foam Roller T-Spine Extensions" },
                    { name: "Shoulder Dislocates", description: "Grip a broomstick wide and pass it from front to back over your head with straight arms. Bulletproofs the shoulders so pressing and rowing back-to-back doesn't leave them cranky.", metric: "15 Reps", alternative: "Band Overhead Pass-Throughs" },
                    { name: "Cat-Cow Flow", description: "On all fours, arch and round the spine like a cat that just discovered creatine. Wakes up the whole trunk so it braces properly under the big pump lifts.", metric: "10 Reps", alternative: "Standing Spinal Waves" },
                ],
                afternoon: [
                    { name: "DB Floor Press", description: "The ultimate upper-body pump starts here. Lie on the FLOOR (yes, the floor, embrace it) with the dumbbells and press. The floor stops your elbows early, saving the shoulders while blasting the chest and triceps. It's bench press with a built-in safety net and zero excuses.", metric: "4 × 8–10", alternative: "Flat DB Bench Press" },
                    { name: "Single-Arm DB Rows", description: "Alternate this with the presses to superset your whole torso into oblivion. One knee on the bench, row the dumbbell to the hip, squeeze the lat like it insulted your mother. Push then pull, push then pull — this is how you leave the gym looking like you inflated.", metric: "4 × 10/Arm", alternative: "Pull-ups" },
                    { name: "Incline DB Press", description: "Bench to 30°, press for that upper-chest shelf that fills out a shirt from across the room. Control the negative — the stretch at the bottom is where the magic and the mass live.", metric: "3 × 10", alternative: "Cable Incline Press" },
                    { name: "Chest-Supported Incline DB Rows", description: "Chest on the incline pad, row the dumbbells up and squeeze the mid-back. Balancing all this pressing with equal pulling is the difference between a mighty physique and a hunched-over gargoyle. Posture is a flex, bro.", metric: "3 × 12", alternative: "Lat Pulldowns" },
                    { name: "DB Flyes", description: "Finish the chest with a deep stretch fly. Soft elbows, hug the barrel, feel the pecs scream. By now the chest should be so pumped you can barely scratch your own back — which is fine, because we trained back too.", metric: "3 × 12", alternative: "Cable Crossovers" },
                    { name: "DB Pullovers", description: "The perfect closer for a chest-and-back day because it hits BOTH in one glorious stretch. Lower the dumbbell behind your head, feel the ribcage expand, pull it back over. End the session looking like you swallowed a life vest.", metric: "3 × 12", alternative: "Cable Straight-Arm Pulldowns" },
                ],
            },
            {
                day: "Friday",
                morning: [
                    { name: "Arm Circles of Ascension", description: "Big forward then backward circles to flood the delts with blood before the weekend war. It's Friday — the arms need to be primed and pretty for whatever the night holds.", metric: "1 Min", alternative: "Jumping Jacks" },
                    { name: "Rotator Cuff Band Rotations", description: "Elbow pinned to your side, rotate a light band out and in. Tiny muscle, enormous insurance policy. Healthy shoulders are what let you spam lateral raises for the next 40 years.", metric: "2 × 15/Arm", alternative: "Light DB External Rotations" },
                    { name: "Wrist & Forearm Rolls", description: "Circle the wrists and gently stretch the forearms. Curl day plus press day means the wrists earn a proper warm-up. Happy wrists, heavy curls.", metric: "45 Sec", alternative: "Prayer Stretch" },
                ],
                afternoon: [
                    { name: "Seated DB Shoulder Press", description: "Sit tall, back supported, and press the dumbbells overhead until they nearly clink at the top. This builds the round, capped boulder-shoulders that make your waist look tiny and your ego look enormous. Don't arch into a bench press — keep it vertical, keep it honest.", metric: "4 × 8–10", alternative: "Barbell Overhead Press" },
                    { name: "DB Lateral Raises", description: "The crown jewel of the aesthetic delt. Slight bend in the elbows, lead with the pinkies like you're pouring two jugs of gains, and raise to shoulder height. LEAVE THE EGO WEIGHT. If you're swinging 40s and shrugging, you're training traps and disappointment. Light, strict, and endless — this is the move that widens the frame more than anything else. Spam. These. Forever.", metric: "5 × 20", alternative: "Cable Lateral Raises" },
                    { name: "Bent-Over Reverse DB Flyes", description: "Hinge over, light dumbbells, and raise them out to the sides like wings, squeezing the rear delts. Nobody trains these, which is exactly why nobody has the full 3D shoulder. Be the guy with the full 3D shoulder. Feel it in the back of the delt, not the traps.", metric: "3 × 15", alternative: "Reverse Pec-Deck" },
                    { name: "Concentration Curls", description: "Sit, plant the elbow against the inner thigh, and curl one dumbbell with laser focus while you flex in the mirror like a Roman statue. This is peak-contraction paradise — the move that puts the little baseball at the top of your bicep. Squeeze at the top like it owes you rent.", metric: "3 × 12", alternative: "Cable Concentration Curls" },
                    { name: "Close-Grip DB Press", description: "Dumbbells pressed together over the chest, elbows tucked, press and lower keeping them glued side by side. All the tension dumps straight into the triceps. Combined with the curls, this is the pre-weekend arm inflation protocol — the sleeves will suffer.", metric: "3 × 12", alternative: "Cable Rope Pushdowns" },
                    { name: "Lateral Raise Burnout", description: "One final set. Grab the lightest dumbbells that still feel like a dare and raise until the delts fully quit and file for unemployment. There is no rep target — there is only failure, and the glorious cannonball delts on the other side of it. Walk out of the gym at a 45° angle. You've earned the weekend.", metric: "1 × Failure", alternative: "Band Lateral Raises" },
                ],
            },
        ],
    },
] satisfies WorkoutWeek[];
