import twitter from "@/assets/twitter.svg";
export const Footer = () => {
    return (
        <>
            <footer className="h-28 text-center pt-14 flex justify-between mx-[40px] font-roboto">
                <div>
                    <img
                        src={twitter}
                        className={'bg-black rounded-full p-1 invert'}
                    />
                </div>
                <div className="text-base">
                    &copy; 2024 Tapos
                </div>
                <div className="flex gap-4">
                    <div className="text-base">Terms of Service</div>
                    <div className="text-sm">Privacy Policy</div>
                </div>
            </footer>
        </>
    )
}