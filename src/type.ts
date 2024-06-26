export type Question = ShortQuestion | LongQuestion | MultipleQuestion | DropdownQuestion | CheckboxQuestion;

export type BaseQuestion = {
  questionTitle: string;
  type: QUESTION_TYPE;
  required: boolean;
};

export type ShortQuestion = BaseQuestion & {
  text: string;
  textAnswer: string;
};

export type LongQuestion = BaseQuestion & {
  text: string;
  textAnswer: string;
};

export type MultipleQuestion = BaseQuestion & {
  options: string[];
  optionAnswer: string;
};

export type DropdownQuestion = BaseQuestion & {
  options: string[];
  optionAnswer: string;
};

export type CheckboxQuestion = BaseQuestion & {
  options: string[];
  checkboxAnswer: boolean[];
};

export const QUESTION_TYPE_MAP = {
  SHORT: "단답형",
  LONG: "장문형",
  MULTIPLECHOICE: "객관식",
  CHECKBOX: "체크박스",
  DROPDOWN: "드롭다운",
} as const;

export type QUESTION_TYPE = "단답형" | "장문형" | "객관식" | "체크박스" | "드롭다운";

export const QUESTION_TYPE_ARRAY: QUESTION_TYPE[] = ["단답형", "장문형", "객관식", "체크박스", "드롭다운"];

export const isShortQuestion = (question: Question): question is ShortQuestion => {
  return question.type === QUESTION_TYPE_MAP.SHORT;
};

export const isLongQuestion = (question: Question): question is LongQuestion => {
  return question.type === QUESTION_TYPE_MAP.LONG;
};

export const isMultipleQuestion = (question: Question): question is MultipleQuestion => {
  return question.type === QUESTION_TYPE_MAP.MULTIPLECHOICE;
};

export const isCheckboxQuestion = (question: Question): question is CheckboxQuestion => {
  return question.type === QUESTION_TYPE_MAP.CHECKBOX;
};

export const isDropdownQuestion = (question: Question): question is DropdownQuestion => {
  return question.type === QUESTION_TYPE_MAP.DROPDOWN;
};
