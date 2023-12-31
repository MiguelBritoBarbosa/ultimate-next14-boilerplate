import '@/styles/globals.css'
import StyledComponentsRegistry from './registry'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Bootstrap from '@/config/bootstrap';
import NprogressComponent from '@/config/nprogress';
import '@/styles/nprogress.css';

import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Next14 App Example',
    description: 'Generated by create next app',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang='pt-br'>
            <body>
                <Bootstrap />
                <NprogressComponent />
                <Header />
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                <Footer />
            </body>
        </html>
    )
}
