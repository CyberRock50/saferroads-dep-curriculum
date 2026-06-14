import { DrivingModule } from '../types';
import { day1Slides, day1Questions, day2Slides, day2Questions, day3Slides, day3Questions, day4Slides, day4Questions, day5Slides, day5Questions } from './contentDay1To5';
import { day6Slides, day6Questions, day7Slides, day7Questions, day8Slides, day8Questions, day9Slides, day9Questions, day10Slides, day10Questions } from './contentDay6To10';

export const mvaCurriculum: DrivingModule[] = [
  {
    day: 1,
    title: "Introduction to Driving & Maryland GDL",
    objective: "Understand the Maryland Graduated Driver Licensing system, Novice Driver responsibilities, and the basic physical, mental, and emotional characteristics of a safe driver.",
    activities: [
      {
        id: "d1-1",
        timeAllocation: "35 mins",
        title: "Welcome & Course Overview",
        description: "Introduction to the virtual classroom, expectations, and how to use Zoom/Teams features (chat, raise hand). Introduce the MVA curriculum goals.",
        viltStrategy: "Icebreaker activity using virtual whiteboard/polls. Have students introduce themselves and their primary motivation for driving."
      },
      {
        id: "d1-2",
        timeAllocation: "60 mins",
        title: "Maryland Graduated Driver Licensing (GDL)",
        description: "Detailed breakdown of the Learner's Permit, Provisional License, and Full License stages, including age requirements, practice hours, and restrictions.",
        viltStrategy: "Screen share presentation. Use 'Check for Understanding' zoom polls after each GDL stage to ensure retention."
      },
      {
        id: "d1-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d1-4",
        timeAllocation: "50 mins",
        title: "Driver Fitness & Characteristics",
        description: "Discussion on vision, hearing, fatigue, illness, and how they affect driving. Introduction to defensive driving mindsets.",
        viltStrategy: "Breakout rooms: Assign small groups a specific 'driver impairment' (e.g., fatigue) and have them present mitigation strategies."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 1 Comprehensive Quiz on the GDL Process and Driver Fitness.",
      passingScore: 80,
      sampleQuestions: [
        "How many practice hours are required for a Learner's Permit holder under 18?",
        "What are the nighttime driving restrictions for a Provisional License holder?"
      ]
    },
    resources: ["Maryland Driver's Manual: Sections 1 & 2", "GDL Tracking Log PDF"]
  },
  {
    day: 2,
    title: "Traffic Control Devices & Signs",
    objective: "Identify and interpret traffic control devices, signs, signals, and road markings according to the MVA standards.",
    activities: [
      {
        id: "d2-1",
        timeAllocation: "50 mins",
        title: "Traffic Signs: Shapes and Colors",
        description: "Regulatory, Warning, and Guide signs. Standard colors and shapes and their meanings.",
        viltStrategy: "Interactive flashcard activity using screen share. Students type answers in the chat."
      },
      {
        id: "d2-2",
        timeAllocation: "45 mins",
        title: "Traffic Signals & Pavement Markings",
        description: "Understanding standard traffic lights, pedestrian signals, solid vs. broken lines, yellow vs. white lines, and shared turn lanes.",
        viltStrategy: "Use a collaborative whiteboard tool for students to draw and connect different pavement markings to their meanings."
      },
       {
        id: "d2-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d2-4",
        timeAllocation: "50 mins",
        title: "Right of Way Rules & Intersections",
        description: "Four-way stops, uncontrolled intersections, T-intersections, and yielding to emergency vehicles and pedestrians.",
        viltStrategy: "Show dashcam video clips of intersection scenarios. Pause the video and ask students who has the right of way via polls."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 2 Quiz covering Traffic Signs, Signals, and Right of Way.",
      passingScore: 80,
      sampleQuestions: [
        "What does a solid double yellow line mean?",
        "Who has the right of way at a four-way stop if two cars arrive simultaneously?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 4", "Traffic Signs PDF Guide"]
  },
  {
    day: 3,
    title: "Basic Vehicle Control & Pre-Drive",
    objective: "Understand the functions of vehicle control systems, instrument panel, and pre-drive safety protocols.",
    activities: [
      {
        id: "d3-1",
        timeAllocation: "50 mins",
        title: "Pre-Drive Checks & Adjustments",
        description: "Checking around the vehicle, adjusting seat, mirrors (BGE method), steering wheel, and head restraints. Securing passengers.",
        viltStrategy: "Instructor live-streams from a parked vehicle (if possible) or uses high-quality 360-degree interior photos."
      },
      {
        id: "d3-2",
        timeAllocation: "45 mins",
        title: "Instrument Panel & Vehicle Systems",
        description: "Understanding warning lights, gauges, starting the engine, steering techniques (hand-to-hand/push-pull), braking, and accelerating.",
        viltStrategy: "Send a blank dashboard diagram to students; they must label the warning lights using annotation tools."
      },
      {
        id: "d3-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d3-4",
        timeAllocation: "50 mins",
        title: "Basic Maneuvers",
        description: "Backing up, turning around (two-point, three-point turns), and parking basics.",
        viltStrategy: "Use top-down animation software/videos to demonstrate the physics and path of the vehicle during maneuvers."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 3 Quiz on Vehicle Controls and Procedures.",
      passingScore: 80,
      sampleQuestions: [
        "What is the proper hand position on the steering wheel according to current safety standards?",
        "What does the BGE mirror setting help eliminate?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 3", "Interactive Dashboard Applet"]
  },
  {
    day: 4,
    title: "Space Management & Driving Environments",
    objective: "Apply space management systems (SEE - Search, Evaluate, Execute) to various driving environments.",
    activities: [
      {
        id: "d4-1",
        timeAllocation: "60 mins",
        title: "Space Management Systems (SEE)",
        description: "Introduction to the SEE system. Searching 20-30 seconds ahead, evaluating risks, and executing decisions (speed and lane position).",
        viltStrategy: "Present still photos of traffic scenarios. Have students use annotation tools to circle hazards and identify their SEE strategy."
      },
      {
        id: "d4-2",
        timeAllocation: "40 mins",
        title: "Following Distance",
        description: "The 3-to-4 second rule, stopping distance components (perception, reaction, braking), and adjusting for weather.",
        viltStrategy: "Interactive calculator activity. Have students calculate stopping distances at various speeds in the chat."
      },
      {
        id: "d4-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d4-4",
        timeAllocation: "50 mins",
        title: "City vs. Rural Driving",
        description: "Identifying unique risks: pedestrians, intersections, parked cars in cities; wildlife, dirt roads, blind curves in rural areas.",
        viltStrategy: "Breakout rooms: Compare and contrast risks. Group 1 does City, Group 2 does Rural. Present findings."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 4 Quiz on Space Management and Environment Risks.",
      passingScore: 80,
      sampleQuestions: [
        "What does SEE stand for?",
        "Under ideal conditions, what is the recommended minimum following distance?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 5", "SEE Strategy Worksheet"]
  },
  {
    day: 5,
    title: "Interacting with Other Road Users",
    objective: "Understand how to safely share the road with pedestrians, bicycles, motorcycles, and large commercial vehicles.",
    activities: [
      {
        id: "d5-1",
        timeAllocation: "50 mins",
        title: "Sharing the Road: Large Vehicles",
        description: "Understanding the 'No-Zones' (blind spots) of trucks and buses. Safe following, passing, and yielding.",
        viltStrategy: "Screen share a graphic of a truck's 'No-Zones'. Use video examples of unsafe interactions."
      },
      {
        id: "d5-2",
        timeAllocation: "45 mins",
        title: "Vulnerable Road Users",
        description: "Maryland laws regarding pedestrians (crosswalks), bicyclists (3-foot rule), and motorcycles. Handling school buses and crossing guards.",
        viltStrategy: "Analyze case studies/news articles about pedestrian incidents. Group discussion on how they could be prevented."
      },
      {
        id: "d5-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d5-4",
        timeAllocation: "50 mins",
        title: "Emergency Vehicles & Move Over Law",
        description: "Maryland's Move Over law requirements. How to react safely to sirens and flashing lights.",
        viltStrategy: "Audio simulation: Play different siren sounds and show mirror views; ask students what action they take."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 5 Quiz on Sharing the Road.",
      passingScore: 80,
      sampleQuestions: [
        "What is the required minimum passing distance for a bicyclist in Maryland?",
        "Describe a commercial vehicle's 'No-Zone'."
      ]
    },
    resources: ["Maryland Driver's Manual: Section 6", "Share the Road Videos"]
  },
  {
    day: 6,
    title: "Expressway & Highway Driving",
    objective: "Master the skills needed for safe entering, driving on, and exiting high-speed expressways and highways.",
    activities: [
      {
        id: "d6-1",
        timeAllocation: "50 mins",
        title: "Entering the Expressway",
        description: "Anatomy of an interchange. Using the entrance ramp, acceleration lane, and merging area safely.",
        viltStrategy: "Step-by-step diagram build on whiteboard. Students guide the instructor on what the car should do at each step."
      },
      {
        id: "d6-2",
        timeAllocation: "45 mins",
        title: "Driving on the Expressway",
        description: "Lane selection, speed management, managing 'wolf packs' (vehicle clusters), and reading overhead guide signs.",
        viltStrategy: "Virtual drive-along video on a Maryland highway (e.g., I-495, I-95). Pause to discuss lane choices."
      },
      {
        id: "d6-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d6-4",
        timeAllocation: "50 mins",
        title: "Exiting & Highway Hypnosis",
        description: "Proper use of deceleration lanes, anticipating exits, and avoiding highway hypnosis/velocitation.",
        viltStrategy: "Polls on recognizing symptoms of highway hypnosis and student-generated lists of preventative measures."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 6 Quiz on High-Speed Environments.",
      passingScore: 80,
      sampleQuestions: [
        "What is the purpose of the acceleration lane?",
        "What is velocitation?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 7", "Highway Merge Simulator Link"]
  },
  {
    day: 7,
    title: "Impaired Driving: Alcohol & Drugs",
    objective: "Understand the physiological effects, legal consequences, and severe risks associated with Driving Under the Influence (DUI/DWI) in Maryland.",
    activities: [
      {
        id: "d7-1",
        timeAllocation: "55 mins",
        title: "Alcohol and the Body",
        description: "Blood Alcohol Concentration (BAC), how the body metabolizes alcohol, and effects on vision, reaction time, and judgment.",
        viltStrategy: "Interactive presentations showing BAC escalation and simulated vision distortion. Group chat Q&A on myths vs. facts."
      },
      {
        id: "d7-2",
        timeAllocation: "40 mins",
        title: "Maryland DUI/DWI Laws",
        description: "Zero Tolerance for under 21. Open Container laws. Penalties, ignition interlock programs, and implied consent.",
        viltStrategy: "Guest speaker via video (e.g., law enforcement officer or MADD representative) or video testimonial."
      },
      {
        id: "d7-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d7-4",
        timeAllocation: "50 mins",
        title: "Drugs (Prescription & Illegal)",
        description: "The impact of cannabis, prescription medications, and synergistic effects when combined with alcohol.",
        viltStrategy: "Case study review in breakout rooms. Identify the signs of impairment described in accident reports."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 7 Quiz on Impaired Driving Laws and Effects.",
      passingScore: 80,
      sampleQuestions: [
        "What is the BAC limit for drivers under 21 in Maryland?",
        "What does the implied consent law mean?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 9", "MADD Virtual Resource Guide"]
  },
  {
    day: 8,
    title: "Distracted Driving & Driver State of Mind",
    objective: "Identify the types of distractions and understand how emotions and aggressive driving impact safety.",
    activities: [
      {
        id: "d8-1",
        timeAllocation: "50 mins",
        title: "Types of Distractions",
        description: "Visual, Manual, and Cognitive distractions. Focus on cell phones, texting, and the Maryland 'hands-free' law.",
        viltStrategy: "Show an interactive 'attention mapping' video demonstrating how much is missed when texting for 3 seconds at 55 mph."
      },
      {
        id: "d8-2",
        timeAllocation: "45 mins",
        title: "Aggressive Driving & Road Rage",
        description: "Defining aggressive driving vs. road rage. Triggers, how to avoid becoming a victim, and how to de-escalate.",
        viltStrategy: "Role-playing using chat or audio. Scenarios of being cut off, tailgated, etc. What is the safest response?"
      },
      {
        id: "d8-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d8-4",
        timeAllocation: "50 mins",
        title: "Emotions and Driving",
        description: "How stress, anger, and sadness increase risk. Strategies for separating emotions from the task of driving.",
        viltStrategy: "Self-assessment poll: 'How do you handle stress?' followed by a discussion on pre-drive cooling off techniques."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 8 Quiz on Distractions and Emotion Management.",
      passingScore: 80,
      sampleQuestions: [
        "What are the three categories of distracted driving?",
        "What is the penalty for texting while driving in Maryland?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 8", "Safe Driving Contract Template"]
  },
  {
    day: 9,
    title: "Emergency Situations & Vehicle Malfunctions",
    objective: "Learn appropriate responses to adverse weather conditions, vehicle failures, and collision procedures.",
    activities: [
      {
        id: "d9-1",
        timeAllocation: "50 mins",
        title: "Adverse Weather",
        description: "Driving in rain (hydroplaning), fog, snow, and ice. Using headlights, adjusting speed, and recovering from skids.",
        viltStrategy: "Video demonstrations of hydroplaning and recovery. Interactive quiz on when to use high vs. low beams."
      },
      {
        id: "d9-2",
        timeAllocation: "45 mins",
        title: "Vehicle Emergencies",
        description: "Handling tire blowouts, brake failures, stuck accelerators, and engine fires. Basic roadside safety.",
        viltStrategy: "Scenario-based breakout rooms. Provide an emergency situation; groups must outline the step-by-step response."
      },
      {
        id: "d9-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Stretch and screen-rest break.",
        viltStrategy: "Display a countdown timer on screen."
      },
      {
        id: "d9-4",
        timeAllocation: "50 mins",
        title: "Collision Procedures",
        description: "What to do at the scene of a crash. Securing the scene, calling 911, exchanging information, and Maryland reporting laws.",
        viltStrategy: "Walkthrough of a mock accident report form. Students practice filling it out based on a narrated scenario."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Day 9 Quiz on Handling Emergencies and Collisions.",
      passingScore: 80,
      sampleQuestions: [
        "If your vehicle hydroplanes, what is the first thing you should do?",
        "What information MUST you exchange in a collision involving property damage?"
      ]
    },
    resources: ["Maryland Driver's Manual: Section 10", "Accident Reporting Form"]
  },
  {
    day: 10,
    title: "Review, Final Exam & Next Steps",
    objective: "Review key course concepts, pass the final MVA required exam, and prepare for Behind-The-Wheel instruction.",
    activities: [
      {
        id: "d10-1",
        timeAllocation: "55 mins",
        title: "Comprehensive Curriculum Review",
        description: "A fast-paced review of the most highly-tested concepts from days 1-9. Signs, right-of-way, laws, and safety.",
        viltStrategy: "Instructor-led jeopardy or trivia game using screen share. High engagement and competitive review."
      },
      {
        id: "d10-2",
        timeAllocation: "40 mins",
        title: "Preparing for Behind-The-Wheel",
        description: "What to expect in the car. Required hours, scheduling, parent/coach involvement, and the final MVA skills test.",
        viltStrategy: "Open Q&A session. Address anxieties and clarify driving school specific policies for in-car lessons."
      },
      {
        id: "d10-3",
        timeAllocation: "15 mins",
        title: "Break",
        description: "Prepare testing environment.",
        viltStrategy: "Display a countdown timer. Ensure webcams are on (if proctoring required)."
      },
      {
        id: "d10-4",
        timeAllocation: "50 mins",
        title: "MVA Final Knowledge Exam",
        description: "The required formal 30-question final exam covering the 30-hour curriculum.",
        viltStrategy: "Students transition to the school's secure online testing portal. Instructor remains available for technical help."
      }
    ],
    quiz: {
      durationMinutes: 20,
      description: "Final Buffer/Admin Time",
      passingScore: 80,
      sampleQuestions: [
        "This period is for finalizing exams, grading, and issuing completion certificates."
      ]
    },
    resources: ["Maryland Driver's Manual: Complete", "Next Steps Guide PDF"]
  }
];

const slideCollections = [day1Slides, day2Slides, day3Slides, day4Slides, day5Slides, day6Slides, day7Slides, day8Slides, day9Slides, day10Slides];
const questionCollections = [day1Questions, day2Questions, day3Questions, day4Questions, day5Questions, day6Questions, day7Questions, day8Questions, day9Questions, day10Questions];

mvaCurriculum.forEach((module, index) => {
  module.slides = slideCollections[index];
  if (module.quiz) {
    module.quiz.questions = questionCollections[index];
  }
});

