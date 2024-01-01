import Footer from '../components/Footer'
import Navbar from '../components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Sthep Peves · Portfolio Dev',
  description: 'Hi I&apos;m Sthepany Peves. Tech person who builds web products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='grainy'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
