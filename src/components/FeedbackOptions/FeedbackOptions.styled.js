import styled from 'styled-components';

export const FeedbackButton = styled('button')(() => {
  return {
    padding: '4px 8px',
    marginRight: '8px',
    marginBottom: '12px',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'capitalize',
    // '& h1': {
    //   fontSize: '24px',
    //   marginBottom: '12px',
    // },
  };
});
