import axios from 'axios';
import moment from 'moment';

export const getData =
  ({ time, number }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'AWAITING_AAPL',
      });
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/historical-chart/${time}/AAPL?apikey=d2bf286d44febade448fb6e021fc8629`
      );
      // console.log('response', response.data);

      const labels = [];
      const data = [];
      for (let i = 0; i < response.data.length; i++) {
        data.unshift(response.data[i].close);
        labels.unshift(moment(response.data[i].date).format('LT'));

        if (i === number - 1) {
          break;
        }
      }

      // console.log('data', data);
      // console.log('labels', labels);

      dispatch({
        type: 'SUCCESS_AAPL',
        data,
        labels,
      });
    } catch (err) {
      dispatch({
        type: 'REJECTED_AAPL',
      });
    }
  };
