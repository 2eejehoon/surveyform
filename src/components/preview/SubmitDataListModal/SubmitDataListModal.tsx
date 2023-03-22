import { useCallback } from "react";
import { useAppSelector } from "../../../store/index";
import { ButtonContainer, ModalWrapper, StyledList } from "./SubmitDataListModalStyle";
import Button from "../../common/Button/Button";
import SubmitData from "../SubmitData/SubmitData";

interface SubmitDataModalProps {
  setIsModalOpen: (state: boolean) => void;
}

function SubmitDataModal({ setIsModalOpen }: SubmitDataModalProps) {
  const questions = useAppSelector((state) => state.survey.questions);

  const handleCloseClick = useCallback(() => setIsModalOpen(false), []);

  return (
    <ModalWrapper>
      <StyledList>
        {questions.map((_, questionIndex) => {
          return <SubmitData questionIndex={questionIndex} />;
        })}
      </StyledList>
      <ButtonContainer>
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
      </ButtonContainer>
    </ModalWrapper>
  );
}

export default SubmitDataModal;
