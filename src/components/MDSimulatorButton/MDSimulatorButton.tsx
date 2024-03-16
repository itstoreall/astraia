// 'use client';
// import { useGlobalState } from '@/Global/context/use';
import useModal from '@/components/Modal/use';
import MDSimulatorIcon from '@/assets/icons/MDSimulatorIcon';
import s from './MDSimulatorButton.module.scss';

const MDSimulatorButton = () => {
  // const { app } = useGlobalState();
  const modal = useModal();

  const handleMDModal = () => {
    modal.set(true);
    modal.setContent('mdsimulator');
    // console.log('click handleMDModal');
  };

  // console.log('modal.content --->', modal.content);

  return (
    <>
      {modal.content === 'mdsimulator' && (
        <modal.Modal>
          <modal.MDSimulator
            action={() => console.log('modal MDSimulator click!!!!')}
          />
        </modal.Modal>
      )}

      <button className={s.mdSimulatorButton} onClick={handleMDModal}>
        <MDSimulatorIcon />
      </button>
    </>
  );
};

export default MDSimulatorButton;
