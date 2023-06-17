import { CSSProperties, MouseEventHandler } from 'react';
import { Button } from '@/types';
import s from './Button.module.scss';
import useHover from '@/hooks/useHover';

const Button: Button = ({ type, fn, style, hover, disabled, children }) => {
  const { mouseEnter, mouseLeave, styles } = useHover(style, hover);

  return (
    <>
      {style && hover ? (
        <button
          className={s.button}
          type={type ? type : 'button'}
          onClick={fn}
          style={{ ...styles }}
          onMouseEnter={mouseEnter as MouseEventHandler<HTMLButtonElement>}
          onMouseLeave={mouseLeave as MouseEventHandler<HTMLButtonElement>}
          disabled={disabled}
        >
          {children}
        </button>
      ) : style && !hover ? (
        <button
          className={s.button}
          type={type ? type : 'button'}
          onClick={fn}
          style={styles as CSSProperties}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <button
          className={s.button}
          type={type ? type : 'button'}
          onClick={fn}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
