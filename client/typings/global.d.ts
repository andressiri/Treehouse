import {
  ROOM_ENTITY,
  STUDENT_ENTITY,
  TEACHER_ENTITY,
  FEMALE_GENDER,
  MALE_GENDER,
  INTERSEX_GENDER,
  TRANS_GENDER,
  NON_CONFORMING_GENDER,
  PERSONAL_GENDER,
  EUNUCH_GENDER,
} from "../config/constants";

declare global {
  type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}

export type Gender =
  | typeof FEMALE_GENDER
  | typeof MALE_GENDER
  | typeof INTERSEX_GENDER
  | typeof TRANS_GENDER
  | typeof NON_CONFORMING_GENDER
  | typeof PERSONAL_GENDER
  | typeof EUNUCH_GENDER;

export type Entities =
  | typeof ROOM_ENTITY
  | typeof STUDENT_ENTITY
  | typeof TEACHER_ENTITY;

export type PersonEntities = typeof STUDENT_ENTITY | typeof TEACHER_ENTITY;

export interface SelectOption {
  value: string;
  name: string;
}
