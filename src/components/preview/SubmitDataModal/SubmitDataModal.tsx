import { memo, useCallback } from "react";
import { QUESTION_TYPE } from "../../../constant";
import { useAppSelector } from "../../../store/index";
import { ModalWrapper, StyledList } from "./SubmitDataModalStyle";
import Button from "../../common/Button/Button";

interface SubmitDataModalProps {
  setIsModalOpen: (state: boolean) => void;
}

function SubmitDataModal({ setIsModalOpen }: SubmitDataModalProps) {
  const data = useAppSelector((state) => state.survey.questions);

  const handleCloseClick = useCallback(() => setIsModalOpen(false), []);
  return (
    <ModalWrapper>
      <StyledList>
        {data.map((answer) => {
          const { title, type, textAnswer, optionAnswer, checkboxAnswer } =
            answer;
          return (
            <li>
              <h4>{title}</h4>
              {type === QUESTION_TYPE.SHORT && <p>{textAnswer}</p>}
              {type === QUESTION_TYPE.LONG && <p>{textAnswer}</p>}
              {type === QUESTION_TYPE.MULTIPLECHOICE && <p>{optionAnswer}</p>}
              {type === QUESTION_TYPE.CHECKBOX && <p>{checkboxAnswer}</p>}
              {type === QUESTION_TYPE.DROPDOWN && <p>{optionAnswer}</p>}
            </li>
          );
        })}
      </StyledList>
      <Button
        type="button"
        onClick={handleCloseClick}
        width={60}
        height={40}
        fontSize={16}
        color="white"
        bgColor="purple"
      >
        닫기
      </Button>
    </ModalWrapper>
  );
}

export default memo(SubmitDataModal);
