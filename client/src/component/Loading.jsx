

const Loading = () => {
    return (
      <div
        className=" fixed  w-full h-full flex bg-gray-400"
        style={{
          alignItems: "center",
          justifyContent: "center",
          zIndex: "100",
        }}
      >
        <div className="loading loading-bars   bg-secondary  w-16"></div>
      </div>
    );
};

export default Loading;