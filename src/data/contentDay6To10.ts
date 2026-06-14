import { Slide, QuizQuestion } from '../types';

export const day6Slides: Slide[] = [
  { id: '6-1', title: 'Expressway Features', content: ['High speeds, controlled access', 'Divided by barriers/medians', 'No sharp curves, no pedestrians', 'Interchanges instead of intersections'], instructorNotes: 'Explain the benefits of expressways for safety.' },
  { id: '6-2', title: 'Expressway Entrances', content: ['Entrance Ramp: Allows time to evaluate traffic conditions', 'Acceleration Lane: Match speed of expressway traffic', 'Merging Area: Blend into traffic'], instructorNotes: 'Emphasize that stopping at the end of an acceleration lane is extremely dangerous.' },
  { id: '6-3', title: 'Merging Safely', content: ['Use turn signal immediately', 'Look over shoulder for gap', 'Yield to traffic already on expressway', 'Adjust speed cleanly'], instructorNotes: 'Show an overhead diagram of a zipper merge.' },
  { id: '6-4', title: 'Driving on High-Speed Roads', content: ['Higher speeds mean less reaction time', 'Search further ahead (at least 20-30 seconds)', 'Keep an out/escape route open'], instructorNotes: 'Discuss how stopping distance grows rapidly.' },
  { id: '6-5', title: 'Lane Selection', content: ['Left lane is for passing', 'Right lane is for entering/exiting/slower traffic', 'Center lanes for cruising', 'Avoid driving in blind spots of others'], instructorNotes: 'Explain why camping in the left lane is illegal and dangerous.' },
  { id: '6-6', title: 'Wolf Packs', content: ['"Wolf packs": Clusters of driving vehicles', 'Dangerous because it limits escape routes', 'Break out of them safely by adjusting speed'], instructorNotes: 'Advise them to find their own open space.' },
  { id: '6-7', title: 'Expressway Exits', content: ['Deceleration Lane: Slow down without impeding traffic', 'Do not brake on the main highway', 'Never back up on an exit ramp or highway if missed'], instructorNotes: 'Show the symbol for an exit sequence sign.' },
  { id: '6-8', title: 'Highway Hypnosis', content: ['A trance-like state from driving long distances on straight highways', 'Prevention: Keep eyes moving, take breaks every 2 hours', 'Open window, engage with passengers'], instructorNotes: 'Describe the symptoms: blurry vision, missing exits.' },
  { id: '6-9', title: 'Velocitation', content: ['Unconsciously driving faster than intended after leaving a highway', 'Result of habituation to high speed', 'Prevention: Check speedometer constantly after exiting'], instructorNotes: 'Poll students on who has experienced velocitation while running or biking.' },
  { id: '6-10', title: 'Toll Plazas and EZ Pass', content: ['Slow down on approach to toll plazas', 'Follow signs for EZ pass vs. Cash lanes', 'Be prepared for sudden lane changes from other drivers'], instructorNotes: 'Mention the Maryland transition to cashless tolling.' }
];

export const day6Questions: QuizQuestion[] = [
  { id: 1, question: 'Purpose of acceleration lane?', options: ['Pass slower vehicles', 'Park', 'Speed up to match traffic flow before merging', 'Slow down'], correctIndex: 2 },
  { id: 2, question: 'Miss your exit on expressway, you should:', options: ['Stop and reverse', 'U-turn', 'Wait for gap', 'Continue to next exit'], correctIndex: 3 },
  { id: 3, question: 'Entering expressway, who has right of way?', options: ['Entering vehicle', 'Vehicles already on expressway', 'Larger vehicle', 'Fastest vehicle'], correctIndex: 1 },
  { id: 4, question: 'Highway Hypnosis?', options: ['Hypnotized by radio', 'Trance-like state caused by long distance driving', 'Blinding effect', 'Tailgating effect'], correctIndex: 1 },
  { id: 5, question: 'Lane generally intended for passing?', options: ['Far right', 'Center', 'Far left', 'Breakdown'], correctIndex: 2 },
  { id: 6, question: 'Velocitation?', options: ['Driving too slow', 'Unconsciously speeding on local roads after leaving highway', 'Hydroplaning', 'Motion sickness'], correctIndex: 1 },
  { id: 7, question: 'Begin slowing down when exiting?', options: ['Main expressway', 'Deceleration lane', 'Ramp curve', 'Seeing sign'], correctIndex: 1 },
  { id: 8, question: 'Prevent highway hypnosis?', options: ['Stare straight', 'Un-caffeinated', 'Eyes moving and take frequent breaks', 'Cruise control'], correctIndex: 2 },
  { id: 9, question: 'Stop on expressway due to emergency?', options: ['Far right lane', 'Center median', 'Well off pavement on right shoulder', 'Deceleration lane'], correctIndex: 2 },
  { id: 10, question: '"Wolf pack" on highway?', options: ['Wild animals', 'Cluster of vehicles driving close together', 'Police cars', 'Construction zone'], correctIndex: 1 }
];

export const day7Slides: Slide[] = [
  { id: '7-1', title: 'Alcohol and the Body', content: ['Alcohol is a depressant, not a stimulant', 'Affects brain functions rapidly', 'Blood Alcohol Concentration (BAC) measures alcohol by volume in blood'], instructorNotes: 'Clarify physiological effects.' },
  { id: '7-2', title: 'Impairment Sequence', content: ['Affects judgment and vision first', 'Reduces physical coordination and reaction time next', 'Impacts involuntary functions (breathing) at high levels'], instructorNotes: 'Clarify that judgment is the absolute first thing to go.' },
  { id: '7-3', title: 'BAC Factors', content: ['Amount consumed over time', 'Body weight and gender', 'Amount of food in the stomach only slows absorption'], instructorNotes: 'Stress that food doesn\'t stop intoxication.' },
  { id: '7-4', title: 'Standard Drink Rates', content: ['A "drink" is 12 oz beer = 5 oz wine = 1.5 oz liquor', 'The body processes about 1 drink per hour', 'Only time can sober you up (not coffee or showers)'], instructorNotes: 'Show visual of standard drink equivalents.' },
  { id: '7-5', title: 'Maryland DUI/DWI Laws', content: ['0.08% is DUI (Driving Under the Influence)', '0.07% can be charged as DWI', 'Severe fines, jail time, and license revocation'], instructorNotes: 'Explain the difference between DUI and DWI.' },
  { id: '7-6', title: 'Under 21: Zero Tolerance', content: ['Strictly zero tolerance for under 21', '0.02% or higher results in immediate suspension', 'Significant delays to licensure'], instructorNotes: 'Discuss the zero tolerance policy intensely.' },
  { id: '7-7', title: 'Open Container & Interlocks', content: ['Illegal to have unsealed alcohol in the passenger area', 'Ignition Interlock Program for offenders', 'Requires breath test to start the car'], instructorNotes: 'Discuss the financial costs of interlock systems.' },
  { id: '7-8', title: 'Implied Consent Law', content: ['By driving in MD, you agree to a chemical test if stopped for suspected DUI', 'Refusing results in immediate license suspension', 'Suspension for refusal is longer than for failing the test'], instructorNotes: 'Ensure students understand they have already "consented".' },
  { id: '7-9', title: 'Drugs and Driving', content: ['Illegal drugs severely impact reaction and perception', 'Prescription/OTC drugs (like allergy meds) can cause heavy drowsiness', 'Always read labels for warnings'], instructorNotes: 'Remind them to check warnings on cold medicine.' },
  { id: '7-10', title: 'The Synergistic Effect', content: ['Combining drugs and alcohol multiplies the impairment', 'Not additive (1+1=2), but multiplicative (1+1=4)', 'Extremely dangerous and unpredictable'], instructorNotes: 'Provide examples of bad combinations.' }
];

export const day7Questions: QuizQuestion[] = [
  { id: 1, question: 'Only effective way to sober up?', options: ['Coffee', 'Cold shower', 'Food', 'Time'], correctIndex: 3 },
  { id: 2, question: 'BAC limit for driver UNDER 21 in MD?', options: ['0.00% (Zero Tolerance)', '0.04%', '0.08%', '1.0%'], correctIndex: 0 },
  { id: 3, question: 'Implied Consent law?', options: ['Search', 'Agree to chemical test if requested by police', 'Organ donor', 'Parents consent'], correctIndex: 1 },
  { id: 4, question: 'BAC threshold for DUI for driver 21 or older?', options: ['0.05%', '0.07%', '0.08%', '0.10%'], correctIndex: 2 },
  { id: 5, question: 'Synergistic Effect?', options: ['Energy drinks', 'Combined effect of alcohol and drugs multiplying impairment', 'Drafting cars', 'Headlights'], correctIndex: 1 },
  { id: 6, question: 'Driving ability affected first by alcohol?', options: ['Coordination', 'Vision', 'Judgment', 'Hearing'], correctIndex: 2 },
  { id: 7, question: 'Refusal to submit to chemical test results in:', options: ['Warning', 'Forced draw', 'Immediate suspension of driver license', 'Course'], correctIndex: 2 },
  { id: 8, question: 'Standard drink defined as:', options: ['Any glass', '12 oz beer, 5 oz wine, or 1.5 oz liquor', 'Two shots', '16 oz beer'], correctIndex: 1 },
  { id: 9, question: 'Prescription drugs safe to drive?', options: ['Yes doctor', 'Always legal', 'Not always; warnings against drowsiness', 'With food'], correctIndex: 2 },
  { id: 10, question: 'Maryland open container law:', options: ['Trunk', 'Passengers can drink', 'Illegal to have open beverage in passenger area', 'Must be empty'], correctIndex: 2 }
];

export const day8Slides: Slide[] = [
  { id: '8-1', title: 'Categories of Distraction', content: ['Visual: Taking eyes off the road', 'Manual: Taking hands off the wheel', 'Cognitive: Taking your mind off driving'], instructorNotes: 'Ask students what typical activities fall under cognitive distraction.' },
  { id: '8-2', title: 'The Danger of Texting', content: ['Texting involves ALL THREE forms of distraction simultaneously', 'Most dangerous distraction', 'At 55mph, 5 seconds looking away is the length of a football field'], instructorNotes: 'Discuss the 3-second rule at 55mph = the length of a football field.' },
  { id: '8-3', title: 'Cell Phones and Maryland Law', content: ['Total ban on handheld cell phone use while driving', 'Texting while driving is illegal for all drivers', 'Pull over to a safe area to make calls'], instructorNotes: 'Discuss safe zones for pulling over.' },
  { id: '8-4', title: 'Provisional Cell Phone Ban', content: ['Provisional drivers under 18 may not use cell phones AT ALL', 'Even hands-free / Bluetooth systems are illegal', 'GPS must be set prior, no touching during drive'], instructorNotes: 'Clarify that checking maps at stop lights is a violation.' },
  { id: '8-5', title: 'Other Distractions', content: ['Eating, drinking, smoking', 'Adjusting radio, climate controls, or GPS', 'Interacting with passengers or pets'], instructorNotes: 'Share strategies for pre-setting environments.' },
  { id: '8-6', title: 'Rubbernecking', content: ['Gawking at accidents or roadside activity', 'Causes major traffic backups', 'Leads to severe rear-end collisions'], instructorNotes: 'Tell them to keep eyes forward past accidents.' },
  { id: '8-7', title: 'Emotions and Driving', content: ['Strong emotions (anger, sadness, joy) alter decision-making', 'Can lead to risk-taking and ignoring traffic laws', 'Reduces focus on task of driving'], instructorNotes: 'Explain how stress limits peripheral vision.' },
  { id: '8-8', title: 'Handling Stress', content: ['Take time to cool down before driving', 'Don\'t treat driving as a competition', 'Leave early to reduce time pressure'], instructorNotes: 'Poll students on standard cooling-down techniques.' },
  { id: '8-9', title: 'Aggressive Driving', content: ['Aggressive Driving: Traffic offenses to gain advantage', 'Speeding, tailgating, weaving', 'Often triggered by time pressure'], instructorNotes: 'Discuss common aggressive driving traits.' },
  { id: '8-10', title: 'Road Rage', content: ['Road Rage: Vehicle used as weapon, physical assault', 'Do not engage, avoid eye contact', 'Create space, call 911 if followed'], instructorNotes: 'Review de-escalation.' }
];

export const day8Questions: QuizQuestion[] = [
  { id: 1, question: 'Texting involves which distractions?', options: ['Visual', 'Manual', 'Cognitive/visual', 'Visual, manual, and cognitive'], correctIndex: 3 },
  { id: 2, question: 'Provisional under 18 may use hands-free phone:', options: ['With adult', 'Reporting emergency (911)', 'Music', 'GPS only'], correctIndex: 1 },
  { id: 3, question: 'Rubbernecking?', options: ['Mirror check', 'Slowing to look at accident', 'Tailgating', 'Posture'], correctIndex: 1 },
  { id: 4, question: 'Safest deal with aggressive driver?', options: ['Speed up', 'Eye contact', 'Avoid eye contact, ignore, yield', 'Honk'], correctIndex: 2 },
  { id: 5, question: 'Cognitive distraction example?', options: ['Changing radio', 'Eating', 'Thinking intensely about exam', 'Looking at billboard'], correctIndex: 2 },
  { id: 6, question: 'Very angry/emotional, you should:', options: ['Drive fast', 'Loud music', 'Calm down before driving', 'Familiar roads'], correctIndex: 2 },
  { id: 7, question: 'Legal to use handheld cell phone at red light?', options: ['Yes stopped', 'No, banned anytime vehicle in operation', 'Only calls', 'Over 18'], correctIndex: 1 },
  { id: 8, question: 'Road Rage specifically refers to:', options: ['Speeding', 'Weaving', 'Using vehicle as weapon or physical harm', 'Honking'], correctIndex: 2 },
  { id: 9, question: 'Minimize distractions before driving:', options: ['Pre-set radio', 'Input GPS', 'Secure items', 'All of the above'], correctIndex: 3 },
  { id: 10, question: '55 mph, look away 5 seconds is length of:', options: ['Parking space', 'Basketball court', 'Football field', 'Marathon'], correctIndex: 2 }
];

export const day9Slides: Slide[] = [
  { id: '9-1', title: 'Adverse Weather: Rain', content: ['Roads slickest first 10-15 minutes of rain (oil rises)', 'Reduce speed immediately', 'Use low beam headlights so others can see you'], instructorNotes: 'Show an infographic explaining oil mixing with rain.' },
  { id: '9-2', title: 'Hydroplaning', content: ['Tires ride on a wedge of water, losing contact with road', 'Caused by high speed, worn tires, deep water', 'If you hydroplane: Ease off accelerator, DO NOT BRAKE HARD'], instructorNotes: 'Explain why braking makes it worse.' },
  { id: '9-3', title: 'Fog and Snow', content: ['Fog: ALWAYS use low beams. High beams blind you.', 'Snow/Ice: Increase following distance to 8-10 seconds', 'Accelerate and stop very gradually'], instructorNotes: 'Explain the physics of ice reflection.' },
  { id: '9-4', title: 'Bridges and Overpasses', content: ['Bridges and overpasses freeze first', 'Air circulates above and below', 'Black ice is completely clear and very slippery'], instructorNotes: 'Explain why bridge decks drop below freezing faster.' },
  { id: '9-5', title: 'Vehicle Failures: Blowouts', content: ['Tire Blowout: Sudden explosion of a tire', 'Do NOT slam on the brakes', 'Grip steering firmly, ease off gas, pull over safely'], instructorNotes: 'Walk through the physics of a tire blowout.' },
  { id: '9-6', title: 'Vehicle Failures: Brakes', content: ['Brake Failure: Pump brakes rapidly (if no ABS)', 'Shift to lower gear to engine brake', 'Use parking brake gently as last resort'], instructorNotes: 'Explain engine braking briefly.' },
  { id: '9-7', title: 'Vehicle Failures: Accelerator', content: ['Stuck Accelerator: Shift to Neutral immediately', 'Apply brakes to slow down', 'Pull over safely, then turn off engine'], instructorNotes: 'Clarify that shifting to neutral disengages engine power without locking steering.' },
  { id: '9-8', title: 'Emergency Roadside Stops', content: ['Pull as far off the road as possible', 'Turn on hazard flashers', 'Raise hood to signal need for help', 'Stay in the vehicle if near heavy traffic'], instructorNotes: 'Discuss safety on the side of a highway.' },
  { id: '9-9', title: 'Collision Procedures: First Steps', content: ['Stop immediately; leaving is a hit-and-run', 'Turn on hazard lights', 'Move cars out of travel lanes if possible and no injuries'], instructorNotes: 'Move vehicle from travel lanes if it is safe and operational.' },
  { id: '9-10', title: 'Collision Procedures: Reporting', content: ['Call 911 if injuries, death, or severe damage', 'Exchange info: Name, address, license, insurance, plate', 'Take photos of damage and document the scene'], instructorNotes: 'Outline the Maryland accident report criteria.' }
];

export const day9Questions: QuizQuestion[] = [
  { id: 1, question: 'Heavy fog, use:', options: ['High-beams', 'Low-beams', 'Parking lights', 'Hazards'], correctIndex: 1 },
  { id: 2, question: 'Hydroplaning occurs when:', options: ['Brakes fail', 'Tires ride on layer of water', 'Fall off bridge', 'Overheats'], correctIndex: 1 },
  { id: 3, question: 'If hydroplaning, you should:', options: ['Slam brakes', 'Steer sharply opposite', 'Ease foot off gas, no hard braking', 'Accelerate'], correctIndex: 2 },
  { id: 4, question: 'Stuck accelerator, first thing:', options: ['Turn off ignition', 'Shift Neutral', 'Slam parking brake', 'Reach pedal'], correctIndex: 1 },
  { id: 5, question: 'Tire blowout, NOT do:', options: ['Grip steering firmly', 'Slam on brakes', 'Ease off gas', 'Look for place to pull off'], correctIndex: 1 },
  { id: 6, question: 'Why bridges dangerous in freezing weather?', options: ['Trap heat', 'Snow', 'Freeze before rest of roadway', 'Curved'], correctIndex: 2 },
  { id: 7, question: 'Collision no injuries, vehicles:', options: ['Leave them exactly', 'Move them out of travel lanes if safely operable', 'Abandon', 'Center line'], correctIndex: 1 },
  { id: 8, question: 'Information exchanged after collision?', options: ['License, registration, insurance', 'Credit card', 'Medical', 'SSN'], correctIndex: 0 },
  { id: 9, question: 'Roadways most slippery in rain?', options: ['Hours heavy rain', 'First 10-15 minutes (oil mix)', 'Stops', 'Misting'], correctIndex: 1 },
  { id: 10, question: 'Brakes fail abruptly, first try to:', options: ['Shift park', 'Turn off engine', 'Pump brake pedal rapidly to build pressure', 'Tree'], correctIndex: 2 }
];

export const day10Slides: Slide[] = [
  { id: '10-1', title: 'Review: Core Safety Rules', content: ['Always wear a seatbelt (every passenger, every time)', 'Never drive impaired or distracted', 'Adhere to all GDL restrictions'], instructorNotes: 'Reiterate these non-negotiable points.' },
  { id: '10-2', title: 'Review: Signs and Signals', content: ['Solid vs Broken lines', 'Warning vs Regulatory signs', 'Traffic light meanings'], instructorNotes: 'Run a lightning-round Q&A.' },
  { id: '10-3', title: 'Review: Right-of-Way', content: ['4-way stops and T-intersections', 'Yielding to emergency vehicles', 'Pedestrian right of way'], instructorNotes: 'Use the whiteboard for scenarios.' },
  { id: '10-4', title: 'Review: Environments', content: ['City vs Rural hazards', 'Expressway entering and exiting', 'Managing following distance'], instructorNotes: 'Discuss adjusting speeds.' },
  { id: '10-5', title: 'The Driving Exam', content: ['Knowledge Test: Need to score 88%', 'Behind the Wheel Test: Vehicle inspection', 'Closed course maneuvers (parking)', 'Public road route'], instructorNotes: 'Help alleviate anxiety about the physical test.' },
  { id: '10-6', title: 'Behind the Wheel Training', content: ['6 hours mandated with certified instructor', 'Practice what you learned here', 'Focus on visual scanning and smooth inputs'], instructorNotes: 'Explain the scheduling process.' },
  { id: '10-7', title: 'Role of the Parent/Coach', content: ['They are your mentor', 'Log all 60 hours accurately', 'Keep emotions calm in the car'], instructorNotes: 'Direct advice for the 60 hours practice.' },
  { id: '10-8', title: 'Vehicle Ownership Basics', content: ['Insurance requirements in Maryland', 'Vehicle registration and plates', 'Emissions testing'], instructorNotes: 'Brief overview of responsibilities off the road.' },
  { id: '10-9', title: 'Final Test Instructions', content: ['Ensure reliable internet connection', 'No outside resources or phones', 'Read every option carefully'], instructorNotes: 'Provide the link and finalize attendance.' },
  { id: '10-10', title: 'Congratulations!', content: ['You are ready to proceed', 'Safe driving is a lifelong learning process', 'Good luck on the MVA test!'], instructorNotes: 'Final send-off for the students.' }
];

export const day10Questions: QuizQuestion[] = [
  { id: 1, question: 'Who must wear seat belt?', options: ['Driver only', 'Front seat', 'Under 16', 'All passengers/driver regardless'], correctIndex: 3 },
  { id: 2, question: 'Line allows passing?', options: ['Solid double', 'Solid white', 'Broken yellow', 'Solid yellow'], correctIndex: 2 },
  { id: 3, question: '4-way stop, two cars arrive at the same time, who yields?', options: ['The car on the left yields to the car on the right', 'The car on the right yields', 'Whoever is turning yields', 'The larger vehicle goes first'], correctIndex: 0 },
  { id: 4, question: 'Implied consent law?', options: ['Organ', 'Consent to chemical test if stopped', 'Searches', 'Parents'], correctIndex: 1 },
  { id: 5, question: 'Curve physical forces pull:', options: ['Inside', 'Straight ahead, outward from curve', 'Opposing lane', 'Forward'], correctIndex: 1 },
  { id: 6, question: 'Ideal following distance?', options: ['1-2s', '3-4s', '5-6s', '10s'], correctIndex: 1 },
  { id: 7, question: 'Emergency vehicle sirens?', options: ['Speed up', 'Stop middle', 'Pull right edge and stop', 'Hazards keep driving'], correctIndex: 2 },
  { id: 8, question: 'Flashing red light?', options: ['Yield', 'Treat like stop sign', 'Turning green', 'Caution'], correctIndex: 1 },
  { id: 9, question: 'If hydroplane?', options: ['Slam brakes', 'Ease off accelerator, steer where to go', 'Accelerate', 'Yank'], correctIndex: 1 },
  { id: 10, question: 'Zero tolerance under 21:', options: ['Speeding', 'Cell phone', 'Any detectable alcohol is illegal', 'Moving violations'], correctIndex: 2 }
];
