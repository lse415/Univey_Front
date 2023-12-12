const ParticipateCard = ({ question, question_num, question_type, answers, onCardSubmit }) => {

    const renderAnswer = () => {
        if (!answers) {
            return <p>답변이 없습니다</p>;
        }
        return (
            <div>
                {question_type === 'multipleChoice' ? (
                    answers.map((answer, index) => (
                        <label key={index} className="flex items-center">
                            <input
                                type="radio"
                                name={`question_${question_num}`}
                                value={answer}
                                onChange={(e) => onCardSubmit(question_num, e.target.value)}
                            />
                            <span className="ml-2">{answer}</span>
                        </label>
                    ))
                ) : (
                    <div className="mt-2">
                        <input
                            type="text"
                            className="w-full p-1 border rounded border-question_card_grey bg-white text-text_color mr-2"
                            placeholder={'주관식 서술 문항입니다. 자유롭게 작성해주세요.'}
                            onChange={(e) => onCardSubmit(question_num, e.target.value)}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-question_card_bg p-4 mb-4 rounded cursor-pointer">
            <p className="text-left text-l font-semibold mb-2">{question_num}.{question}</p>
            {question_type === 'multipleChoice' && (
                <div className="text-l pl-2 font-normal">{renderAnswer()}</div>
            )}
            {question_type === 'shortAnswer' && (
                <div>{renderAnswer()}</div>
            )}
        </div>
    );
};

export default ParticipateCard;
