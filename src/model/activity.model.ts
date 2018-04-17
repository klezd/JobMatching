import { User } from './user.model';
export interface Activity {
  title: string;
  location: string;
  time: string;
  img: string;
  details: string;
  number_of_workers: number;
  number_of_applies: number;
  requirement: string;
  belong_to: User;
}
