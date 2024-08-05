import { AppButton } from '@/component/buttons/AppButton';
import { useEffect, useState } from 'react';
import { HomeAPI } from "@/services/ex";

export const TableFriends = () => {
    const [data, setData] = useState([]);
    const getAllData = async () => {
        try {
            const rq = await HomeAPI.getUsers();
            // Đảm bảo rq là một mảng trước khi set state
            setData(Array.isArray(rq) ? rq : []);
        } catch (error) {
            console.log(error);
            setData([]); // Set một mảng rỗng nếu có lỗi
        }
    };
    useEffect(() => {
        getAllData();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data?.slice(startIndex, endIndex) ?? [];

    return (
        <div className="mt-[60px] max-w-[1110px] w-full mx-auto">
            <h2 className="font-bold text-[24px]">Invited friend</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-secondary">
                <table className="w-full font-medium bg-white divide-y divide-secondary">
                    <thead className='divide-y divide-secondary text-gray-600'>
                        <tr>
                            <th className="w-[10%] py-3 px-6 border-secondary "></th>
                            <th className="w-[70%] py-3 px-6 border-secondary">Wallet Address</th>
                            <th className="w-[20%] py-3 px-6 border-secondary ">HEART</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-secondary'>
                        {currentItems.map((f, index) => (
                            <tr key={index}>
                                <td className="text-center py-4 px-6 border-secondary">{f.id}</td>
                                <td className="text-center py-4 px-6 border-secondary">{f.address.city}</td>
                                <td className="text-center py-4 px-6 border-secondary text-gray-600">9,153,233</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className='divide-y divide-secondary'>
                        <tr>
                            <td colSpan="3" className="py-3 px-6 ">
                                <div className="flex justify-between items-center">
                                    <p>Page {currentPage} of {totalPages}</p>
                                    <div className="flex gap-2">
                                        <AppButton
                                            className="bg-white border-secondary border-2 rounded-lg
                                            disabled:cursor-not-allowed disabled:opacity-50"
                                            onClick={handlePrevious}
                                            disabled={currentPage === 1}
                                        > Previous</AppButton>

                                        <AppButton
                                            className="bg-white border-secondary border-2 rounded-lg
                                            disabled:cursor-not-allowed disabled:opacity-50"
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}
                                        > Next</AppButton>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};