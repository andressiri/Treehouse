export {};

declare global {
  type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}

export type Gender =
  | "female"
  | "male"
  | "intersex"
  | "trans"
  | "non-conforming"
  | "personal"
  | "eunuch";
