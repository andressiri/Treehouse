export interface CardsDisplayTeacher {
  name: string;
  picture?: string;
}

export interface CardsDisplayArrayObject {
  name: string;
  id: number;
  picture?: string;
  description?: string;
  Teacher?: Teacher;
}
