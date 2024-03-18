import { useGlobalState } from '@/Global/context/use';
import s from '../Modal.module.scss';
import MDSContent from '@/components/MDSimulator/content';

export type MDSimulatorProps = {
  action: () => void;
};

const MDSimulator = () => {
  const { modal } = useGlobalState();

  const closeModal = () => {
    modal.setContent('');
    modal.set(false);
  };

  return (
    <div className={`${s.contentBlock} ${s.mdSimulator}`}>
      <MDSContent fn={closeModal} />
    </div>
  );
};

export default MDSimulator;
