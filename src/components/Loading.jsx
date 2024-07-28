import { Circles } from "react-loader-spinner";
import { ThemeContext } from "../contexts/ToggleMode";
import { useContext } from "react";

const Loading = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? '' : 'bg-blue-50'} flex justify-center items-center h-screen`}>
      <Circles
        visible={true}
        height="100"
        width="100"
        color="#2563EB"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
