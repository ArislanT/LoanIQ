// Law/policy data structure
export interface LawData {
  name: string;
  description: string;
  affects: string[];
  status: 'active' | 'upcoming' | 'changed';
}

