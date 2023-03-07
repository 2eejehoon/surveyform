import { useCallback, useState, memo } from "react";
import Button from "../../common/Button/Button";
import SubmitDataModal from "../SubmitDataModal/SubmitDataModal";

function SubmitButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitClick = useCallback(() => setIsModalOpen(true), []);

  return (
    <>
      <Button
        type="submit"
        onClick={handleSubmitClick}
        width={60}
        height={40}
        fontSize={16}
        color="white"
        bgColor="purple"
      >
        제출
      </Button>
      {isModalOpen && <SubmitDataModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default memo(SubmitButton);
