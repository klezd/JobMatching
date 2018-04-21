import { User } from './user.model';

export interface Activity {
  activity_info: {
    title: string;
    location: string;
    img?: string;
    details: string;
    requirement?: string;
  },
  worker_info: {
    number_of_workers: number;
    number_of_applies?: number;
  },
  belong_to?: User;
  period?: { 
    from? : any,
    end? : any
  },
  tags?: Array<string>
}
