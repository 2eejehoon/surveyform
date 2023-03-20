export type Question = {
  questionTitle: string;
  type: string;
  required: boolean;
  text?: string;
  options?: string[];
  textAnswer?: string;
  optionAnswer?: string;
  checkboxAnswer?: boolean[];
};
