import { Modal, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppButton } from '@/component/buttons/AppButton';
import { closeModal } from "@/redux/slice/modalSlice";
import copy from "@/assets/copy.svg"
export const ModalInvite = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);

    const handleCancel = () => {
        dispatch(closeModal());
    };
    return (
        <Modal
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
        >
            <div>
                <div className='mb-6'>
                    <h2 className='text-center text-[20px] font-bold'>Invite Your Friends</h2>
                    <p className='text-center text-[14px] text-gray-600'>Let's share the code with your friend and both of you will earn extra points and have fun together.</p>
                </div>
                <hr />
                <div className='mt-6'>
                    <h2 className='text-[14px] text-gray-700 font-semibold'>Your code</h2>
                    <div className="flex items-center bg-light">
                        <input
                            type="text"
                            value="ABC567"
                            readOnly
                            className="border font-semibold border-neutral-gray-200 text-neutral-gray-500-base text-[14px] rounded-lg p-2 w-full" />

                        <Tooltip title="Copy">
                            <button
                                className="ml-2 text-primary hover:text-primary-foreground">
                                <img src={copy} className="h-5 w-5" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className='flex justify-between mt-6'>
                    <AppButton
                        className='!rounded-full px-[30px] py-[5px] w-full bg-white border border-primary text-primary text-[16px]'
                        onClick={handleCancel}
                    >Cancel</AppButton>

                    <AppButton
                        className='!rounded-full px-[30px] py-[5px] w-full text-white bg-primary text-[16px] ml-2'
                        onClick={handleCancel}
                    > Done</AppButton>

                </div>
            </div>
        </Modal>
    );
};
