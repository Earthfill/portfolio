import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallTriangle
        visible={true}
        height="100"
        width="100"
        radius={5}
        color="#2563EB"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
