export interface Command {
  title: string;
  description: string;
  sections: Section[];
  image?: string;
}

export interface Section {
  title: string;
  value: string;
}

export interface StaffCommandData {
  title: string;
  description: string;
  commands?: Command[];
  sections?: Section[];
  image?: string;
}