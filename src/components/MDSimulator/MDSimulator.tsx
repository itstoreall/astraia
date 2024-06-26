import useModal from '@/components/Modal/use';
import * as config from './config';
import MDSimulatorIcon from '@/assets/icons/MDSimulatorIcon';
import s from './MDSimulator.module.scss';

const { label: MDSLabel } = config.MDSimulator;

const MDSimulator = () => {
  const modal = useModal();

  const handleMDModal = () => {
    modal.set(true);
    modal.setContent(MDSLabel);
  };

  return (
    <>
      {modal.is && (
        <modal.Modal>
          {modal.content === MDSLabel && <modal.MDSimulator />}
        </modal.Modal>
      )}

      <button
        className={s.mdSimulatorButton}
        onClick={handleMDModal}
        title={'Симулятор'}
      >
        <MDSimulatorIcon />
      </button>
    </>
  );
};

export default MDSimulator;
