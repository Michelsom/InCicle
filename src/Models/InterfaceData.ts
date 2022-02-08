export interface DataJson {
  id: number;
  title: string;
  type: string;
  description: string;
  info: {
    date: string;
    place?: string;
  };
  file: {
    url: string;
  };
  invited_people: {
    id: number;
    name: string;
    confirmed_presence: boolean;
    avatar: string;
    username: string;
  }[];
}
