import { Slide, QuizQuestion } from '../types';

export const day1Slides: Slide[] = [
  { id: '1-1', title: 'Welcome to Maryland Driver Ed', content: ['Course expectations and schedule', 'Virtual classroom etiquette', 'Introduction to MVA safety goals', 'Why driver education matters'], instructorNotes: 'Welcome students, ensure microphones work, and begin recording if applicable.' },
  { id: '1-2', title: 'The Graduated Driver Licensing (GDL)', content: ['Phase 1: Learner\'s Permit', 'Phase 2: Provisional License', 'Phase 3: Full Driver\'s License', 'Purpose: Gradual skill building under lower risk conditions'], instructorNotes: 'Explain the purpose of the GDL system is to gradually introduce driving privileges.' },
  { id: '1-3', title: 'Learner\'s Permit Details', content: ['Must be at least 15 years and 9 months', 'Must pass a vision and knowledge test', 'Valid for up to 2 years'], instructorNotes: 'Highlight the timeline; encourage them not to wait until the last minute.' },
  { id: '1-4', title: 'Practice Log Requirements', content: ['Requires a supervising driver (21+ with 3+ years experience)', 'Log 60 hours of practice', 'At least 10 hours must be at night'], instructorNotes: 'Emphasize the importance of accurate logging and the role of the mentor/parent.' },
  { id: '1-5', title: 'Provisional License Rules', content: ['Minimum age: 16 years and 6 months', 'Pass the behind-the-wheel skills test', 'No driving between 12 AM and 5 AM', 'Cannot carry passengers under 18 (with exceptions)'], instructorNotes: 'Clarify the passenger exceptions (e.g., immediate family members).' },
  { id: '1-6', title: 'Zero Tolerance and Wireless Bans', content: ['Zero tolerance for alcohol', 'Strict wireless device ban for all provisional drivers', 'Hands-free devices are also illegal for provisional drivers'], instructorNotes: 'Explain that the ban includes checking GPS or looking at messages at stop lights.' },
  { id: '1-7', title: 'Full License Qualifications', content: ['Hold Provisional for 18 consecutive months without violations', 'Minimum age: 18 (if started at earliest age)', 'Unrestricted driving, but safety remains paramount'], instructorNotes: 'Explain what happens if a violation occurs (clock restarts).' },
  { id: '1-8', title: 'Driver Fitness: Physical', content: ['Vision requirements: 20/40 minimum', 'Hearing tests and restrictions (e.g., must have outside mirrors)', 'Physical impairments and adaptive equipment'], instructorNotes: 'Discuss how physical well-being directly links to reaction time.' },
  { id: '1-9', title: 'Driver Fitness: Mental & Emotional', content: ['Drowsy driving and fatigue', 'Physical and emotional conditions', 'The defensive driving mindset', 'Stress and illness'], instructorNotes: 'Discuss how illness and fatigue can be as dangerous as impaired driving.' },
  { id: '1-10', title: 'Summary and Transition', content: ['GDL limits risk for new drivers', 'Take practice seriously', 'Fitness matters', 'Get ready for Day 2: Signs and Signals'], instructorNotes: 'Ask for final questions. Recap the 10-hour night requirement.' }
];

export const day1Questions: QuizQuestion[] = [
  { id: 1, question: 'What is the minimum age to obtain a Learner\'s Permit in Maryland?', options: ['15 years', '15 years and 9 months', '16 years', '16 years and 6 months'], correctIndex: 1 },
  { id: 2, question: 'How many practice hours must be logged under a Learner\'s Permit if you are under 18?', options: ['40 hours total', '50 hours (10 night)', '60 hours (10 night)', '70 hours (15 night)'], correctIndex: 2 },
  { id: 3, question: 'Who qualifies as a supervising driver in Maryland?', options: ['Anyone over 18 with a license', 'A person at least 21 who has held a license for 3 years', 'Any licensed driver with 1 year experience', 'A parent or guardian only'], correctIndex: 1 },
  { id: 4, question: 'What is the nighttime driving restriction for a Provisional License holder?', options: ['10 PM to 6 AM', '11 PM to 5 AM', '12 AM to 5 AM', '1 AM to 4 AM'], correctIndex: 2 },
  { id: 5, question: 'Are Provisional License holders allowed to use a hands-free cell phone system?', options: ['Yes, if they are making an emergency call', 'Yes, for GPS only', 'No, they are subject to a total wireless device ban', 'Yes, if their vehicle has Bluetooth'], correctIndex: 2 },
  { id: 6, question: 'What happens if a Learner\'s Permit holder commits a moving violation?', options: ['They pay a fine and continue', 'Wait additional 9 months from violation to take skills test', 'Permit revoked permanently', 'Retake written test'], correctIndex: 1 },
  { id: 7, question: 'Which of the following passengers is a Provisional driver under 18 allowed to have during their first 5 months?', options: ['Their 16-year-old friend', 'Their 17-year-old sibling', 'No passengers are allowed ever', 'Up to three non-family members under 18'], correctIndex: 1 },
  { id: 8, question: 'What is the BAC limit for a driver under 21?', options: ['0.02%', '0.04%', '0.08%', '0.00% (Zero Tolerance)'], correctIndex: 3 },
  { id: 9, question: 'Why is drowsy driving considered extremely dangerous?', options: ['Slows reaction times similarly to alcohol', 'Causes driver to speed', 'Uses more fuel', 'Prevents mirror use'], correctIndex: 0 },
  { id: 10, question: 'For how long is a Maryland Learner\'s Permit valid?', options: ['6 months', '1 year', '2 years', '3 years'], correctIndex: 2 }
];

export const day2Slides: Slide[] = [
  { id: '2-1', title: 'Traffic Signs Overview', content: ['Regulatory Signs (Red/White/Black)', 'Warning Signs (Yellow/Fluorescent)', 'Guide Signs (Green/Blue/Brown)', 'Construction/Work Zone Signs (Orange)'], instructorNotes: 'Show physical or high-res images of each group. Ask students to drop examples in chat.' },
  { id: '2-2', title: 'Regulatory Signs Explained', content: ['Tell you what you MUST or MUST NOT do', 'Stop signs, Yield signs, Speed limits', 'Do Not Enter, One Way', 'Ignoring these is a traffic violation'], instructorNotes: 'Emphasize that Stop is 8-sided. Yield is a triangle.' },
  { id: '2-3', title: 'Warning Signs Explained', content: ['Alert you to upcoming hazards', 'Sharp curves, school zones, animal crossings', 'Usually diamond-shaped and yellow', 'Suggests reducing speed'], instructorNotes: 'Point out fluorescent green is used for school/pedestrian zones specifically.' },
  { id: '2-4', title: 'Guide and Construction Signs', content: ['Guide signs: Interstate routes, hospitals, destinations', 'Construction signs: Orange, warn of roadwork', 'Fines double in active work zones'], instructorNotes: 'Discuss keeping workers safe.' },
  { id: '2-5', title: 'Pavement Markings', content: ['Yellow lines: Separate traffic flowing in opposite directions', 'White lines: Separate traffic flowing in the same direction'], instructorNotes: 'Use the whiteboard tool to draw lanes and ask students to identify them.' },
  { id: '2-6', title: 'Solid vs. Broken Lines', content: ['Solid lines: Do not cross or pass', 'Broken lines: May cross if safe', 'Double solid lines: Strictly no passing'], instructorNotes: 'Explain what a solid line on one side and a broken line on the other means.' },
  { id: '2-7', title: 'Traffic Signals', content: ['Solid Red: Stop completely before the line', 'Solid Yellow: Prepare to stop, light is turning red', 'Solid Green: Proceed if the intersection is clear'], instructorNotes: 'Discuss right-turn-on-red rules and yielding to pedestrians.' },
  { id: '2-8', title: 'Special Traffic Signals', content: ['Flashing Red: Treat as a stop sign', 'Flashing Yellow: Proceed with caution', 'Red Arrow: No turning in that direction'], instructorNotes: 'Give scenarios where flashing red might happen (power outage, late night).' },
  { id: '2-9', title: 'Right of Way: Principles', content: ['First to arrive, first to proceed', 'If arriving at the same time, yield to the vehicle on the right', 'Turning vehicles yield to straight-traveling vehicles'], instructorNotes: 'Set up scenarios in breakout rooms where students vote on who goes first.' },
  { id: '2-10', title: 'Special Intersections', content: ['T-Intersections: Vehicles on the terminating road must yield', 'Traffic Circles/Roundabouts: Yield to vehicles already in the circle', 'Always yield to pedestrians'], instructorNotes: 'Show a short video of navigating a multi-lane roundabout.' }
];

export const day2Questions: QuizQuestion[] = [
  { id: 1, question: 'What color and shape is a general warning sign?', options: ['Red octagon', 'Yellow diamond', 'Green rectangle', 'White square'], correctIndex: 1 },
  { id: 2, question: 'What does a solid double yellow line indicate?', options: ['Passing permitted both ways if safe', 'Passing prohibited in both directions', 'Traffic moving same direction', 'Reversible lane'], correctIndex: 1 },
  { id: 3, question: 'At a steady red traffic light, you may turn right if:', options: ['No sign prohibiting it, and complete stop made', 'Slow down to 5 mph', 'Cross traffic has green light', 'Honk to warn others'], correctIndex: 0 },
  { id: 4, question: 'When approaching a flashing red light, you must:', options: ['Slow down and proceed with caution', 'Stop completely, yield, proceed when safe', 'Speed up to clear quickly', 'Wait for green'], correctIndex: 1 },
  { id: 5, question: 'Who has right-of-way at 4-way stop if two vehicles arrive at the exact same time?', options: ['Vehicle on the left', 'Larger vehicle', 'Turning vehicle', 'Vehicle on the right'], correctIndex: 3 },
  { id: 6, question: 'What do dashed white pavement lines separate?', options: ['Lanes of traffic in same direction', 'Lanes of traffic in opposite directions', 'Bicycle lanes', 'Parking spaces'], correctIndex: 0 },
  { id: 7, question: 'What action should you take approaching a yield sign?', options: ['Always stop', 'Maintain speed', 'Slow down and prepare to stop if necessary', 'Accelerate'], correctIndex: 2 },
  { id: 8, question: 'Orange colored signs are generally used for:', options: ['Hospital', 'School', 'Construction and maintenance', 'Speed limit'], correctIndex: 2 },
  { id: 9, question: 'At a T-intersection, who has right of way?', options: ['Vehicle on terminating road', 'Vehicle on through road', 'Vehicle traveling fastest', 'Shared equally'], correctIndex: 1 },
  { id: 10, question: 'What shape is a school zone warning sign?', options: ['Diamond', 'Pentagon', 'Circle', 'Triangle'], correctIndex: 1 }
];

export const day3Slides: Slide[] = [
  { id: '3-1', title: 'Pre-Drive Inspection', content: ['Exterior checks: Tires, leaks, visible damage', 'Check behind and under vehicle', 'Clear snow or ice off all windows and roof'], instructorNotes: 'Explain why walking around the car before getting in is critical.' },
  { id: '3-2', title: 'Interior Checks', content: ['Interior checks: Loose objects, secure pets/passengers', 'Window/Mirror cleanliness', 'Lock doors immediately'], instructorNotes: 'Discuss how loose objects become projectiles in a sudden stop.' },
  { id: '3-3', title: 'Proper Seating & Steering', content: ['Chest at least 10 inches from the steering wheel', 'Slight bend in elbows and knees', 'Hand position: 9 and 3 or 8 and 4 o\'clock', 'Use push-pull steering for most turns'], instructorNotes: 'Demonstrate hand positions visually. Explain why 10 and 2 is no longer recommended due to airbags.' },
  { id: '3-4', title: 'Mirror Adjustment (BGE)', content: ['BGE: Blindzone Glare Elimination', 'Adjust rearview mirror to frame the rear window entirely', 'Adjust side mirrors so you cannot see the side of your own car', 'Reduces blind spots and nighttime glare'], instructorNotes: 'Use a diagram showing field of view with traditional vs. BGE mirror settings.' },
  { id: '3-5', title: 'Head Restraints and Seatbelts', content: ['Head restraint center should be slightly above ears', 'Seatbelt flat across the chest and low on the hips', 'Never put shoulder strap behind your back'], instructorNotes: 'Explain that the head restraint prevents whiplash.' },
  { id: '3-6', title: 'Instrument Panel Options', content: ['Speedometer, Tachometer, Fuel Gauge, Temperature', 'Warning lights (Red = Stop/Urgent, Yellow = Caution/Check)', 'Turn signals, headlights, and wipers controls'], instructorNotes: 'Have students match common dashboard symbols to their meanings.' },
  { id: '3-7', title: 'Vehicle Control and Pedals', content: ['Brake pedal vs Accelerator', 'Pivot foot on heel between the pedals; do not use left foot for braking', 'Parking brake application'], instructorNotes: 'Discuss proper foot placement to prevent pedal misapplication.' },
  { id: '3-8', title: 'Basic Maneuvers: Backing Up', content: ['Checking blind spots before moving', 'Backing up: Look over your right shoulder, do not rely only on cameras', 'Steer in the direction you want the rear to go'], instructorNotes: 'Show a short top-down animation of a vehicle backing up correctly.' },
  { id: '3-9', title: 'Turning Around', content: ['Two-point turns (using a driveway)', 'Three-point turns', 'U-turns (where legal)'], instructorNotes: 'Explain the safety priority: drive around block is safest, 3-point turn is riskiest.' },
  { id: '3-10', title: 'Parking Basics', content: ['Angle parking', 'Perpendicular parking', 'Parallel parking basics', 'Always use parking brake'], instructorNotes: 'Remind them to turn wheels when parking on a hill.' }
];

export const day3Questions: QuizQuestion[] = [
  { id: 1, question: 'How close should your chest be to the steering wheel?', options: ['As close as possible', 'At least 10 inches away', 'At least 24 inches away', 'Touching the wheel'], correctIndex: 1 },
  { id: 2, question: 'Recommended hand position on steering wheel today?', options: ['10 and 2', '12 o\'clock', '9 and 3 or 8 and 4', 'Resting on bottom'], correctIndex: 2 },
  { id: 3, question: 'The BGE mirror setting is used to minimize:', options: ['Fuel', 'Dashboard glare', 'Blind spots and headlight glare', 'Fogginess'], correctIndex: 2 },
  { id: 4, question: 'Proper head restraint adjustment:', options: ['Base of neck', 'Slightly above ears / behind center of head', 'Top of head', 'Removed completely'], correctIndex: 1 },
  { id: 5, question: 'If a red warning light appears, what should you do?', options: ['Ignore it', 'Pull over safely and stop engine', 'Drive fast to mechanic', 'Turn on heater'], correctIndex: 1 },
  { id: 6, question: 'When backing up, primarily:', options: ['Look over right shoulder', 'Rely on camera', 'Look at driver mirror', 'Stick head out window'], correctIndex: 0 },
  { id: 7, question: 'Recommended steering technique for most turns?', options: ['Hand-over-hand', 'Push-pull (hand-to-hand)', 'Palming', 'One-handed'], correctIndex: 1 },
  { id: 8, question: 'Check before entering parked vehicle:', options: ['Tires', 'Fluid leaks', 'Obstacles and children', 'All of the above'], correctIndex: 3 },
  { id: 9, question: 'Yellow or amber dashboard lights indicate:', options: ['Immediate hazard', 'System engaged', 'Non-emergency issue needing checking soon', 'Out of gas'], correctIndex: 2 },
  { id: 10, question: 'To signal a right turn, push signal lever:', options: ['Up', 'Down', 'Toward you', 'Away from you'], correctIndex: 0 }
];

export const day4Slides: Slide[] = [
  { id: '4-1', title: 'Space Management: Intro to SEE', content: ['S.E.E. = Search, Evaluate, Execute', 'A systematic routine for risk management', 'Keep a cushion of space around the vehicle'], instructorNotes: 'Emphasize that driving is more mental processing than physical steering.' },
  { id: '4-2', title: 'SEE: Search', content: ['Search: Scan 20-30 seconds ahead', 'Check mirrors every 5-8 seconds', 'Scan intersections before entering'], instructorNotes: 'Have students analyze a dashboard view photo and list what they "Search".' },
  { id: '4-3', title: 'SEE: Evaluate', content: ['Evaluate: Identify potential risks early', 'Alternative paths of travel', 'Predict actions of other roadway users'], instructorNotes: 'Help them "Evaluate" the photo from the previous slide.' },
  { id: '4-4', title: 'SEE: Execute', content: ['Execute: Final decision to avoid conflict', 'Adjust speed (brake or accelerate)', 'Adjust lane position', 'Communicate (horn, lights, signals)'], instructorNotes: 'Give them scenarios and ask them what they would "Execute".' },
  { id: '4-5', title: 'Following Distance', content: ['3 to 4 seconds under ideal conditions', 'Increase distance in bad weather, at night, or at high speeds'], instructorNotes: 'Demonstrate how to count seconds using "one-thousand-one..."' },
  { id: '4-6', title: 'Measuring Following Distance', content: ['Pick a fixed object ahead (sign/tree)', 'When vehicle ahead passes it, count seconds', 'If you pass before reaching 3, you are too close'], instructorNotes: 'Show a visual counting animation.' },
  { id: '4-7', title: 'Speed and Stopping Distance', content: ['Perception Distance + Reaction Distance + Braking Distance = Total Stopping Distance', 'Speed drastically increases braking distance'], instructorNotes: 'Show a chart of stopping distance at 30 vs 60 mph. It\'s not linear.' },
  { id: '4-8', title: 'City Driving Environments', content: ['High density of pedestrians/bicycles', 'Parked cars (doors opening)', 'Search 1-2 blocks ahead', 'Cover the brake when needed'], instructorNotes: 'Discuss covering the brake vs riding the brake.' },
  { id: '4-9', title: 'Rural Driving Environments', content: ['Higher speeds on narrow roads', 'Lack of lighting at night', 'Sharp curves and blind hills', 'Wildlife crossing risks'], instructorNotes: 'Highlight that many fatal accidents occur on rural roads due to speed.' },
  { id: '4-10', title: 'Adapting to Environments', content: ['Always drive at a safe and reasonable speed for conditions', 'Adjust your SEE strategy based on environment'], instructorNotes: 'Summarize today\'s lesson.' }
];

export const day4Questions: QuizQuestion[] = [
  { id: 1, question: 'The S.E.E. system stands for:', options: ['Speed, Efficiency, Energy', 'Search, Evaluate, Execute', 'See, Expect, Evade', 'Stop, Examine, Escape'], correctIndex: 1 },
  { id: 2, question: 'Under ideal conditions, minimum following distance should be:', options: ['1 second', '2 seconds', '3 to 4 seconds', '6 seconds'], correctIndex: 2 },
  { id: 3, question: 'If driving at 60 mph instead of 30 mph, braking distance:', options: ['Doubles', 'Triples', 'Quadruples', 'Remains same'], correctIndex: 2 },
  { id: 4, question: 'Total stopping distance consists of:', options: ['Braking only', 'Reaction + Braking', 'Perception + Reaction + Braking', 'Visual + Manual'], correctIndex: 2 },
  { id: 5, question: 'In city traffic, visually scan how far ahead?', options: ['Bumper of car ahead', '1 to 2 blocks ahead', '1 mile ahead', 'Only crosswalks'], correctIndex: 1 },
  { id: 6, question: 'Unique primary hazard of rural driving?', options: ['Pedestrians', 'Opening car doors', 'Slow-moving farm vehicles and wildlife', 'Traffic lights'], correctIndex: 2 },
  { id: 7, question: 'How measure following distance?', options: ['Guessing', 'Radar', 'Watch vehicle ahead pass fixed object and count seconds', 'Pavement lines'], correctIndex: 2 },
  { id: 8, question: 'What does covering the brake mean?', options: ['Resting foot firmly', 'Pumping rapidly', 'Hovering foot over brake pedal without pressing', 'Parking brake'], correctIndex: 2 },
  { id: 9, question: 'When increase following distance beyond 4 seconds?', options: ['Tailgated', 'Heavy rain/snow', 'Following motorcycle', 'All of the above'], correctIndex: 3 },
  { id: 10, question: 'If tailgated, safest response is to:', options: ['Brake check', 'Speed up', 'Change lanes / gradually slow down to encourage pass', 'Flash headlights'], correctIndex: 2 }
];

export const day5Slides: Slide[] = [
  { id: '5-1', title: 'Sharing the Road with Trucks', content: ['Large blind spots known as "No-Zones"', 'Takes them longer to stop', 'Need wide turning radius'], instructorNotes: 'Show the graphic of a semi-truck with the red blind spot areas highlighted.' },
  { id: '5-2', title: 'Truck "No-Zones"', content: ['Directly in front (up to 20 feet)', 'Directly behind (up to 200 feet)', 'The sides (especially the right side)'], instructorNotes: 'Rule of thumb: If you can\'t see their mirrors, they can\'t see you.' },
  { id: '5-3', title: 'Bicycles on the Road', content: ['Bicycles are considered vehicles', 'They have the same rights and responsibilities', 'Yield to bikes in bike lanes'], instructorNotes: 'We must respect their space.' },
  { id: '5-4', title: 'Passing Bicycles Safely', content: ['Must give at least 3 feet of clearance when passing', 'Expect sudden swerves due to hazards', 'Wait for a safe gap if you can\'t give 3 feet'], instructorNotes: 'Discuss the "Dutch Reach" method for opening car doors safely.' },
  { id: '5-5', title: 'Motorcycles', content: ['Harder to judge distance and speed', 'Do not share a lane side-by-side', 'They can stop much faster than cars'], instructorNotes: 'Watch a short clip of a motorcycle hidden in a blind spot.' },
  { id: '5-6', title: 'Interacting with Motorcycles', content: ['Always check blind spots twice', 'Increase following distance behind them', 'Be aware of slippery road conditions affecting them more'], instructorNotes: 'Talk about wind blast from large vehicles affecting bikes.' },
  { id: '5-7', title: 'Pedestrians', content: ['Pedestrians have right of way in crosswalks', 'Stop well back from the crosswalk line', 'Do not pass a vehicle stopped for a pedestrian'], instructorNotes: 'Review Maryland laws on unmarked crosswalks.' },
  { id: '5-8', title: 'Pedestrians with Disabilities', content: ['Always yield right-of-way to blind or hearing impaired pedestrians', 'Look for white canes or guide dogs', 'Never honk at a blind pedestrian'], instructorNotes: 'Remind drivers to be patient.' },
  { id: '5-9', title: 'School Buses', content: ['You must stop if lights are flashing red', 'Stop in BOTH directions unless separated by a physical median', 'Do not proceed until lights stop flashing'], instructorNotes: 'Clarify the difference between a paved turn lane and a physical concrete median.' },
  { id: '5-10', title: 'Emergency Vehicles & Move Over Law', content: ['Move Over Law: Move to adjacent lane or slow significantly', 'Applies to emergency, tow, and service vehicles on the shoulder', 'Pull over to the right edge and stop for approaching sirens'], instructorNotes: 'Discuss the fines associated with not moving over.' }
];

export const day5Questions: QuizQuestion[] = [
  { id: 1, question: 'Where are biggest blind spots ("No-Zones") on large truck?', options: ['Directly in front, behind, along sides', 'Only behind', 'Only passenger side', 'Only front'], correctIndex: 0 },
  { id: 2, question: 'Minimum passing distance when overtaking bicyclist in MD?', options: ['1 foot', '2 feet', '3 feet', '4 feet'], correctIndex: 2 },
  { id: 3, question: 'School bus stops with flashing red light on two-lane road, who stops?', options: ['Only behind', 'Vehicles in both directions', 'Only front', 'No one'], correctIndex: 1 },
  { id: 4, question: 'MD Move Over Law requires drivers to:', options: ['Change lanes when emergency vehicle stopped on shoulder, or slow down', 'Stop immediately in lane', 'Speed up to pass', 'Maintain speed'], correctIndex: 0 },
  { id: 5, question: 'Following a motorcycle, you should:', options: ['Tailgate', 'Increase following distance', 'Pass in same lane', 'Honk frequently'], correctIndex: 1 },
  { id: 6, question: 'Pedestrian crossing in marked crosswalk:', options: ['You must yield and stop', 'Proceed around them', 'Honk', 'They must yield'], correctIndex: 0 },
  { id: 7, question: 'Why do trucks need extra space on right turn?', options: ['Brakes less effective', 'Cannot see mirrors', 'Swing wide left before turning right to clear curb', 'Build speed'], correctIndex: 2 },
  { id: 8, question: 'Waiting to turn left, motorcycle approaching opposite direction:', options: ['Turn quickly', 'Assume they will turn', 'Wait until they pass or certainty', 'Look at turn signal'], correctIndex: 2 },
  { id: 9, question: 'Cannot see side mirrors of truck ahead:', options: ['Respecting space', 'Truck driver cannot see you', 'Safe distance', 'Safe to pass'], correctIndex: 1 },
  { id: 10, question: 'Legal to drive in bicycle lane?', options: ['Yes if heavy traffic', 'Yes to pass', 'No, unless preparing for turn/parking', 'Always'], correctIndex: 2 }
];
