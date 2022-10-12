import { ContextWrapper } from 'contexts/AppContext';
import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/globals.scss';
import TYPES from 'types';

process.env.NEXT_PUBLIC_USE_PROXY_MIDDLEWARE = '';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Wrapper = ({ children }) => {
  return (
    <ContextWrapper>
      <IconContext.Provider
        value={{
          color: TYPES.COLORS.NEXUS_BLUE,
          size: '1.5rem',
          style: { verticalAlign: 'middle' },
        }}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </IconContext.Provider>
    </ContextWrapper>
  );
};
