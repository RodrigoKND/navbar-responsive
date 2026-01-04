import AdaptiveNavbar from '@/components/AdaptiveNavbar';
import '@/App.css';

export default function App() {
  return (
      <AdaptiveNavbar mobileMode="top" links={[
        { label: 'Home', href: '/home' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]} />
  )
}
