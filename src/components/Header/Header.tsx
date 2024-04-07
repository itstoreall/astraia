import Logo from '../Logo';
import { useGlobalState } from '@/Global/context/use';
import * as gc from '@/config/global';
import * as config from './config';
import { EBtn } from './types';
import Publisher from '../Publisher/Publisher';
import MDSimulator from '../MDSimulator';
import NewArticleButton from '../NewArticleButton';
import ArticlesButton from '../ArticlesButton';
import s from './Header.module.scss';

const { created, unpublished } = gc.articleStatus;
const { header } = config;

const buttons = [
  { label: EBtn.PUBLISH },
  { label: EBtn.MD },
  { label: EBtn.NEW },
  { label: EBtn.ALL }
];

const ButtonHandler = () => {
  const { app, details } = useGlobalState();

  const isPUBLISH = (label: EBtn) => {
    const status = details.article?.status;
    return (
      label === EBtn.PUBLISH &&
      app.isEdit &&
      (!status || status === created || status === unpublished)
    );
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
