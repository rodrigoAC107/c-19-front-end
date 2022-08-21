import { getCases } from "../services/CasesServices";

const useCases = () => {
  const getCasesAll = async ({show, search, page}) => {
    const resp = await getCases(show, search, page);
    return resp;
  };
  return {
    getCasesAll,
  };
};

export default useCases;
