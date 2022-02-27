const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: 'AAPL',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 0.5)',
        pointBorderColor: 'rgba(54, 162, 235, 0.7)',
      },
    ],
  },
};

const appleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AWAITING_AAPL':
      return { ...state, loading: true };
    case 'REJECTED_AAPL':
      return { ...state, loading: false };
    case 'SUCCESS_AAPL':
      return {
        ...state,
        loading: false,
        data: {
          labels: action.labels,
          datasets: [
            {
              label: 'AAPL',
              data: action.data,
              backgroundColor: 'rgba(54, 162, 235, 0.4)',
              borderColor: 'rgba(54, 162, 235, 0.5)',
              pointBorderColor: 'rgba(54, 162, 235, 0.7)',
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default appleReducer;
