
export type Role = 
  | 'Content Writer' 
  | 'Video Maker' 
  | 'Graphic Designer' 
  | 'Programmer' 
  | 'Knowledge Builder' 
  | 'Customer Support'
  | 'Team Leader'
  | 'HR';

export interface Member {
  id: string;
  name: string;
  role: Role;
  points: number;
  mentorId?: string; // ID of the HR responsible for this member
}

export type TaskStatus = 'running' | 'upcoming' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  category: string;
  ownersIds?: string[]; // تم التغيير لاستخدام الـ IDs لسهولة الربط والتعديل
  assignedHr?: string; // ID of the HR responsible (Optional - can be inferred)
  dueText?: string;
  discordUrl?: string;
}

export interface AppConfig {
  teamName: string;
  lastUpdated: string;
}
