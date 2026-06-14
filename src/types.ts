export interface ModuleActivity {
  id: string;
  timeAllocation: string;
  title: string;
  description: string;
  viltStrategy: string; // Virtual Instructor-Led Training strategy
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  durationMinutes: number;
  description: string;
  passingScore: number;
  sampleQuestions: string[];
  questions?: QuizQuestion[];
}

export interface Slide {
  id: string;
  title: string;
  content: string[];
  instructorNotes: string;
}

export interface DrivingModule {
  day: number;
  title: string;
  objective: string;
  activities: ModuleActivity[];
  quiz: Quiz;
  resources: string[]; // e.g. "Maryland Driver's Manual Page 10-15"
  slides?: Slide[];
}
