 export type PostDetails = {
    id: string;
    title: string;
    description: React.ReactNode;
    hoursCount?: number;
    lecturerName?: string;
    tags: string[];
  };