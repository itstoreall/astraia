import Link from 'next/link';
import s from './ArticlesButton.module.scss';

const ArticlesButton = () => {
  return (
    <Link href={'/'} className={s.articlesButtonLink} title={'Все статьи'}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
          // fill={currentColor}
          d='M4 16h4v4H4V16z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='0.3s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M10 16h4v4h-4V16z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='0.6s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M16 16h4v4h-4V16z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='0.9s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M4 10h4v4H4V10z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='1.2s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M10 10h4v4h-4V10z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='1.5s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M16 10h4v4h-4V10z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='1.8s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M4 4h4v4H4V4z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='2.1s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M10 4h4v4h-4V4z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='2.4s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
        <path
          // fill={currentColor}
          d='M16 4h4v4h-4V4z'
          className='st0'
        >
          <animate
            fill='remove'
            accumulate='none'
            additive='replace'
            attributeName='opacity'
            begin='2.7s'
            calcMode='linear'
            dur='4.5s'
            keyTimes='0;0.9;1'
            repeatCount='indefinite'
            restart='always'
            values='1;0;0'
          />
        </path>
      </svg>
    </Link>
  );
};

export default ArticlesButton;
