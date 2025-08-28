import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 48 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main display="flex" style={{ justifyContent: 'center' }}>
        {children}
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
