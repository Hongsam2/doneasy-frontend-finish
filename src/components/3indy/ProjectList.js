import { useEffect, useState } from 'react';

function ProjectList({ projectList }) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    useEffect(() => {
        setTitle(projectList.title);
        setStatus(projectList.status);
        console.log(projectList);
    }, []);

    function onClickReview() {
        return status === 'DONE'
            ? (window.location.href = '/')
            : alert('프로젝트가 진행 중입니다.');
    }

    return (
        <>
            <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    프로젝트 명 : {title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    진행 상태 : {status}
                </td>
                <td>
                    <button
                        type="button"
                        onClick={onClickReview}
                        className="rounded-2xl bg-gray-50 px-2 py-2  mx-2 my-2 whitespace-nowrap text-sm font-medium text-gray-900 border"
                    >
                        후기작성
                    </button>
                </td>
            </tr>
        </>
    );
}
export default ProjectList;
