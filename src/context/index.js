import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
// import { ReactQueryDevtools }  from 'react-query/devtools';
import { ThemeProvider } from '../theme';
import { LocaleProvider } from '../localization';
import { AuthProvider } from '../context/auth-context';
import { FirebaseProvider } from '../context/firebase-context';
import { SnackbarProvider } from '../context/snackbar-context';
import { DialogProvider } from '../context/dialog-context';
import { UserProvider } from '../context/user-context';

const queryClient = new QueryClient();

/**
 * Shared context across all app
 */
function AppProviders({ children }) {
  return (
    <LocaleProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ThemeProvider>
            <FirebaseProvider>
              <DialogProvider>
                <SnackbarProvider>
                  <AuthProvider>{children}</AuthProvider>
                </SnackbarProvider>
              </DialogProvider>
            </FirebaseProvider>
          </ThemeProvider>
        </Router>
        {/* <ReactQueryDevtools position="bottom-left" /> */}
      </QueryClientProvider>
    </LocaleProvider>
  );
}

/**
 * Context used only when the user is authenticated
 */
function AuthenticatedAppProviders({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export { AppProviders, AuthenticatedAppProviders };
