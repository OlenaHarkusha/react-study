import { Couner } from './Counter';
import { SignupForm } from './SignUpForm';

const colorPickerOptions = [
  { label: 'red', color: '#fc0303' },
  { label: 'white', color: '#FFFFFF' },
  { label: 'green', color: '#00ff11' },
  { label: 'blue', color: '#5cabff' },
  { label: 'orange', color: '#ff9736' },
  { label: 'violet', color: '#bf36ff' },
];

export const App = () => {
  return (
    <div>
      <SignupForm />
      <Couner />
    </div>
  );
};
