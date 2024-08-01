import { AppButton } from '@/component/buttons/AppButton';
import { useDispatch } from 'react-redux';
import { openModal } from "@/redux/slice/modalSlice";
import { ModalInvite } from '../modal/ModalInvite';
export const CardReferral = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='h-auto max-w-[1110px] w-full mx-auto'>
                <h2 className="text-[40px] mt-14 font-bold text-center">Referral Campaign</h2>
                <p className="text-center text-[14px] leading-[22px] text-gray-light font-medium my-[16px]">Share your referral link to earn extra points</p>

                <div className="border-2 font-[Roboto]  border-secondary bg-white rounded-lg p-6 w-full max-w-[1100px] h-auto ">
                    <p className="font-semibold text-[24px]  ">Enter Referral Code</p>
                    <p className="mt-[16px] text-accent-textGray font-[14px] ">Please enter referral code to earn extra points</p>
                    <a href="#" className="text-accent-linkLearMore text-[14px]">
                        Learn more &gt;
                    </a>
                    <br />
                    <div className='flex justify-between  '>
                        <div className="flex items-center border rounded-full  w-full max-w-[400px] !h-[45px] mt-4">
                            <input type="text" placeholder="Enter referral code"
                                className="flex-grow px-4 py-2 focus:outline-none focus:border-transparent"
                            />
                            <AppButton className="!bg-accent-bg-green-500 !px-10 !py-[6px] !rounded-full !m-2  text-white"> Go</AppButton>
                        </div>

                        <AppButton className="text-white w-[250px]   mt-[16px] py-[8px] px-[32px] h-[45px] !rounded-[100px]"
                            onClick={() => dispatch(openModal())}                        >
                            Invite Your Friends
                        </AppButton>
                        <ModalInvite />
                    </div>
                </div>
            </div>







        </>
    )



}