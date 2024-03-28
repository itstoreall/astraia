import Logo from '../Logo';
import { useGlobalState } from '@/Global/context/use';
import useModal from '../Modal/use';
import * as config from './config';
import { EBtn } from './types';
import Publisher from '../Publisher/Publisher';
import MDSimulator from '../MDSimulator';
import NewArticleButton from '../NewArticleButton';
import ArticlesButton from '../ArticlesButton';
import s from './Header.module.scss';

const { header } = config;

const buttons = [
  { label: EBtn.PUBLISH },
  { label: EBtn.MD },
  { label: EBtn.NEW },
  { label: EBtn.ALL }
];

const ButtonHandler = () => {
  const { app } = useGlobalState();

  const isPUBLISH = (label: EBtn) => {
    console.log(111, label === EBtn.PUBLISH && app.isEdit);
    return label === EBtn.PUBLISH && app.isEdit;
  };

  const isMD = (label: EBtn) => {
    return label === EBtn.MD && (app.isInit || app.isCreate || app.isEdit);
  };

  const isNEW = (label: EBtn) => {
    return label === EBtn.NEW && app.isInit;
  };

  const isALL = (label: EBtn) => {
    return label === EBtn.ALL && app.isArticle;
  };

  return (
    <ul className={s.buttonList}>
      <>
        {buttons.reduce((acc, btn) => {
          acc = (
            <>
              {acc}
              {isPUBLISH(btn.label) && (
                <li key={btn.label} className={s.buttonItem}>
                  <Publisher />
                </li>
              )}
              {isMD(btn.label) && (
                <li key={btn.label} className={s.buttonItem}>
                  <MDSimulator />
                </li>
              )}
              {isNEW(btn.label) && (
                <li key={btn.label} className={s.buttonItem}>
                  <NewArticleButton />
                </li>
              )}
              {isALL(btn.label) && (
                <li key={btn.label} className={s.buttonItem}>
                  <ArticlesButton />
                </li>
              )}
            </>
          );
          return acc;
        }, <li />)}
      </>
    </ul>
  );
};

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <Logo label={header.label} />

        {ButtonHandler()}
      </div>
    </header>
  );
};

export default Header;
