import axios from 'axios';
import { useState } from 'react';
import Contents from '../../components/daniel/ContentOfProjectProposal';

function ProjectProposalWrite() {
    const [service_start_date, setService_start_date] = useState('');
    const [service_end_date, setService_end_date] = useState('');
    const [category, setCategory] = useState('');
    const [target_price, setTarget_price] = useState(0);
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [deadline, setDeadLine] = useState('');

    const onCancelClick = () => {
        window.location.href = '/';
    };
    const onStartDate = (e) => {
        setService_start_date(e.target.value);
    };
    const onEndDate = (e) => {
        setService_end_date(e.target.value);
    };
    const onCategory = (e) => {
        setCategory(e.target.value);
    };
    const onPrice = (e) => {
        setTarget_price(e.target.value);
    };
    const onTitle = (e) => {
        setTitle(e.target.value);
    };
    const onDeadLine = (e) => {
        setDeadLine(e.target.value);
    };

    const changeContents = (context, imageList) => {
        setContents(context);
        setImageList(imageList);
    };

    const onSubmitClick = () => {
        const data = new FormData();
        const value = {
            service_start_date: service_start_date,
            service_end_date: service_end_date,
            category: category,
            target_price: target_price,
            title: title,
            contentDtoList: contents,
            deadline: deadline,
        };
        const json = JSON.stringify(value);
        const blob = new Blob([json], { type: 'application/json' });
        data.append('boardSaveDto', blob);

        imageList.forEach((image) => {
            data.append('imageList', image);
        });

        axios
            .post('http://localhost:8090/save', data)
            .then((Response) => {
                console.log(Response);
                window.location.href = '/save';
                // "/";
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="h-screen flex bg-green[#000333] ">
                <div
                    className="hidden lg:flex w-full lg:w-2/5 login_img_section justify-around items-center "
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80")`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundColor: '(0, 0, 0, 0.5)',
                    }}
                >
                    <div className="bg-black opacity-20 inset-0 z-0"></div>
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="ml-28 text-white font-bold text-4xl font-sans">
                            DonEasy
                        </h1>
                        <h1 className="ml-40 text-white font-bold text-4xl font-sans">
                            ???????????? ?????????
                        </h1>
                        <p className="text-white mt-1 ml-56">
                            Money Laundering Company{' '}
                        </p>
                        <div className="flex justify-center lg:justify-start mt-6 ">
                            <button
                                className="ml-60 hover:bg-[#719E71] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                                onClick={onCancelClick}
                            >
                                {' '}
                                ????????????{' '}
                            </button>
                            <button
                                className="ml-4 hover:bg-[#719E71] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                                onClick={onSubmitClick}
                            >
                                {' '}
                                ????????????{' '}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex w-full lg:w-3/5 justify-center items-center bg-gray-50 space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-44">
                        <div
                            align="center"
                            className="mb-5 block   text-[#07074D]"
                        >
                            <label htmlFor="startday">?????? :</label>
                            <input
                                id="startday"
                                value={service_start_date}
                                type="date"
                                className="ml-1  resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={onStartDate}
                            />
                            <label className="ml-8" htmlFor="endday">
                                ?????? :
                            </label>
                            <input
                                id="endday"
                                value={service_end_date}
                                type="date"
                                className="ml-1  resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={onEndDate}
                            />
                            <label className="ml-8" htmlFor="endday2">
                                ?????? :
                            </label>
                            <input
                                id="endday2"
                                value={deadline}
                                type="date"
                                className="ml-1 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={onDeadLine}
                            />
                        </div>

                        <div align="center">
                            <label htmlFor="category">????????????:</label>
                            <select
                                id="category"
                                className="ml-1 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={category}
                                onChange={onCategory}
                            >
                                <option>select category.</option>
                                <option value="seniorcitizen">??????</option>
                                <option value="children">??????</option>
                                <option value="youth">??????</option>
                                <option value="environment">??????</option>
                                <option value="disabled ">?????????</option>
                                <option value="society ">??????</option>
                            </select>
                            <label className="ml-16" htmlFor="target_price">
                                ????????????:
                            </label>
                            <input
                                id="target_price"
                                className="ml-1 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                type="number"
                                value={target_price}
                                placeholder="?????? ????????? ??????????????????."
                                onChange={onPrice}
                            />
                        </div>

                        <div className="mt-8 flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
                            <input
                                id="text"
                                className=" pl-2 w-full outline-none border-none"
                                type="text"
                                value={title}
                                onChange={onTitle}
                                placeholder="????????? ???????????????."
                            />
                        </div>
                        <Contents changeContents={changeContents} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectProposalWrite;
