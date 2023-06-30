import { Dna } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <div className="mx-auto w-6/12 flex items-center justify-center">
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Spinner;
