import Image from 'next/image';
import spinner from '@/assets/animated/spinner-three-dots.svg';
import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s.spinnerWrap}>
      <Image src={spinner} alt='spinner' />
    </div>
  );
};

export default Spinner;
