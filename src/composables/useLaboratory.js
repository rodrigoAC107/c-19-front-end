import moment from 'moment';
import { getLaboratories } from "../services/LaboratoriesServices";

const useLaboratories = () => {
  const getLaboratoriesAll = async ({show, search, page}) => {
    const resp = await getLaboratories(show, search, page);
    return resp;
  };

  const laboratoryFormatTime = (laboratory) => {
    laboratory.taken = moment(laboratory.taken).format('YYYY-MM-DD HH:mm:ss');
    laboratory.received = moment(laboratory.received).format('YYYY-MM-DD HH:mm:ss');
    laboratory.processed = moment(laboratory.processed).format('YYYY-MM-DD HH:mm:ss');
    laboratory.validated = moment(laboratory.validated).format('YYYY-MM-DD HH:mm:ss');
    return laboratory;
  }

  return {
    getLaboratoriesAll,
    laboratoryFormatTime
  };
};

export default useLaboratories;
