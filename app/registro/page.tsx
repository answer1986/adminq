import RegistrationForm from '@/components/RegistrationForm';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RegistroPage() {
  return (
    <div style={{ padding: '20px 0' }}>
      <RegistrationForm />
    </div>
  );
}