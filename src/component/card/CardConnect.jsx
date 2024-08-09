import { AppButton } from '@/component/buttons/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { HomeAPI } from '../../services/ex';
import { enableBtnFollowed, setBtnConnect, setUserName } from '../../redux/slice/modalSlice';

export const CardConnect = () => {
    const dispatch = useDispatch();
    const { userName, btnConnect } = useSelector((state) => state.modal);
    const handleConnect = async () => {
        const address = 'tu'
        const typeSocials = ['twitter', 'discord', 'telegram']
        const loginRequests = typeSocials?.map(typeSocial => HomeAPI.putLogin(address, typeSocial))


        try {
            const loginResponses = await Promise.all(loginRequests)
            const allLoginSuccessful = loginResponses.every(response => response.success);


            if (allLoginSuccessful) {
                const userResponse = await HomeAPI.getUser({ address })
                if (userResponse.success) {
                    dispatch(setUserName(userResponse.msg.twitterUsername))
                    dispatch(setBtnConnect('!bg-neutral-100 !text-neutral-400 !text-[16px] font-medium'))


                }
                dispatch(enableBtnFollowed())
                alert('enable btn-followed')

            } else {
                alert('Failed to connect')
            }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <h1 className="text-[40px] mt-14 font-bold text-center">Social Tasks</h1>
            <p className="text-center text-[14px] leading-[22px] text-gray-light font-medium my-[16px]">Complete the Social Tasks to earn extra $Heart token</p>

            <div className="border-2 font-[Roboto]  border-secondary bg-white rounded-lg p-6 w-full max-w-[1100px] h-auto ">
                <p className="font-semibold text-[24px]  ">Connect Your X account</p>
                <p className="mt-[16px] text-accent-textGray font-[14px] ">You need to connect your X account to join Social Task</p>
                <a href="#" className="text-accent-linkLearMore text-[14px]">
                    Learn more &gt;
                </a>
                <br />
                <AppButton className={`text-white w-[250px] h-[41px] mt-[16px] py-[8px] px-[32px] !rounded-[100px] disabled:cursor-not-allowed ${btnConnect}`}
                    onClick={handleConnect}
                    disabled={userName}
                >
                    {userName ? `@${userName}` : 'Connect your X account'}

                </AppButton>
            </div>
        </>
    )



}
