import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import robot from '../assets/robot.svg';
import CloseSurveyModal from './CloseSurveyModal';

export default function MySurveyBoard({ surveys, selectedType }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedSurveyId, setSelectedSurveyId] = useState(null);
    const [showWarning, setShowWarning] = useState(false);

    const openModal = (surveyId) => {
        setSelectedSurveyId(surveyId);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedSurveyId(null);
        setShowModal(false);
        setShowWarning(false); // 모달이 닫힐 때 경고 메시지도 초기화
    };

    const handleSurveyClose = () => {
        axios
            .get(`/mypage/surveys/${selectedSurveyId}/close`)
            .then((response) => {
                closeModal();
            })
            .catch((error) => {
                console.error('Error closing survey:', error);
            });
    };

    return (
        <div>
            {surveys.map((data) => (
                <div key={data.surveyId} className="overflow-hidden border-t-2 border-main_color w-full">
                    <Link
                        to={data.status === 'uncomplete' ? null : `/main/result/${data.surveyId}`}
                        onClick={() => {
                            if (data.status === 'uncomplete') {
                                setShowWarning(true);
                            }
                        }}
                    >
                        <div className={`flex justify-between ${data.status === 'uncomplete' ? 'cursor-default' : 'cursor-pointer'}`}>
                            <div className="flex items-center">
                                <div className='pr-6'>
                                    <img src={robot} className="object-scale-down h-36 " alt="Robot Icon" />
                                </div>
                                <div className="flex flex-col justify-center h-full my-5">
                                    <div className='flex items-center'>
                                        <div className="text-2xl font-bold mb-2">{data.topic}</div>
                                        <div className={`status ${data.status === 'uncomplete' 
                                                                                    ? 'bg-highligth' 
                                                                                    : 'bg-text_color'} mb-3`}>
                                            {data.status === 'uncomplete' ? '진행중' : '완료'}
                                        </div>
                                        {showWarning && data.status === 'uncomplete' && (
                                            <div className="text-red-500 ml-2 mb-1">
                                                설문이 아직 완료되지 않았습니다. 마감된 이후에 결과를 확인해주세요.
                                            </div>
                                        )}
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className="font-semibold mb-2">{data.description}</div>
                                        <p>대상: {data.age[0] === 'all' ? '전연령' : `${data.age[0]}대`}</p>
                                        <p>
                                            실제 응답자 수 / 목표 응답자 수: {data.currentRespondents}명 /
                                            {data.targetRespondents}명
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {selectedType === 'created' && (
                            <div className="mt-auto mb-5">
                                {data.status === 'uncomplete' && (
                                    <div className="mt-auto mb-5">
                                        <button
                                            className={`h-full py-1 px-4 rounded-2xl bg-sub_3 `}
                                            onClick={() => openModal(data.surveyId)}
                                        >
                                            설문 마감
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                        </div>
                    </Link>
                </div>
            ))}
            {showModal && (
                <CloseSurveyModal
                    onClose={handleSurveyClose}
                    onConfirm={closeModal}
                />
            )}
        </div>
    );
}
