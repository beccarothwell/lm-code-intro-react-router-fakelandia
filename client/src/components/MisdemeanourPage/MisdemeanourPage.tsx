import { useContext } from "react";
import { MisdemeanoursContext } from "../../App";

const MisdemeanourPage: React.FC = () => {
  const { data, isFetching, errorMessage } = useContext(MisdemeanoursContext);

  const misdemeanours = data ? data.misdemeanours : [];

  return (
    <>
      {isFetching && "...Loading"}
      {misdemeanours && misdemeanours[0]?.citizenId}
      {errorMessage && errorMessage}
    </>
  );
};

export default MisdemeanourPage;
