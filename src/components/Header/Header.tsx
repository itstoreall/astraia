import Logo from '../Logo';
import { useGlobalState } from '@/Global/context/use';
import * as config from './config';
import { EBtn } from './types';
import MDSimulatorButton from '../MDSimulatorButton';
import NewArticleButton from '../NewArticleButton';
import ArticlesButton from '../ArticlesButton';
import s from './Header.module.scss';

const { header } = config;

const buttons = [{ label: EBtn.MD }, { label: EBtn.NEW }, { label: EBtn.ALL }];

const ButtonHandler = () => {
  const { app } = useGlobalState();

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
              {isMD(btn.label) && (
                <li key={btn.label} className={s.buttonItem}>
                  <MDSimulatorButton />
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
