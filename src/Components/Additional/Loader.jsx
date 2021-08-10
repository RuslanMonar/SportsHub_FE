import ScaleLoader from "react-spinners/ScaleLoader";

export const Loader = ({...settings}) => {
  var loading = settings.loading ? settings.loading : true;
  var height = settings.height ? settings.height : 75;
  var width = settings.width ? settings.width : 13;
  var margin = settings.margin ? settings.margin : 8;
  return (
    <div className="">
      <ScaleLoader color={"#f2003c"} loading={loading} height={height} width={width}  margin={margin} />
    </div>
  );
};
