import { StrictMode } from 'react';
import './index.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/providers/theme-provider';
import { useAuth } from './hooks/use-auth';
import { AuthProvider } from './providers/auth-provider';
import { routeTree } from './routeTree.gen';
import {QueryClientProvider } from '@tanstack/react-query'
import {queryClient } from '@/lib/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const router = createRouter({
  routeTree,
  context: {
    // auth will initially be undefined
    // We'll be passing down the auth state from within a React component
    auth: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}


if (import.meta.env.DEV) {
  const { worker } = await import('@/lib/mock-service-worker');
  worker.start();
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <InnerApp />
        </ThemeProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
