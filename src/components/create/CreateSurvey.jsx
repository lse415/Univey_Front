import React, { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";

const CreateSurvey = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [targetRespondents, setTargetRespondents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form behavior

    if (!topic || !description || !category || !age || !gender || !deadline) {
      alert("모든 필수 입력 항목을 작성해주세요.");
      return;
    }

    // JSON data creation
    const surveyData = {
      topic,
      description,
      category,
      age,
      gender,
      deadline,
      targetRespondents,
    };
    console.log(surveyData);
  };

  return (
    <div className="flex flex-col mx-60 mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label className="flex flex-col space-y-2 font-semibold text-main_color mb-5">
          주제 입력 *
        </label>
        <input
          className="border-b border-gray-300 focus:outline-none mb-3"
          type="text"
          placeholder="설문 조사의 주제를 입력해주세요."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label className="flex flex-col space-y-2 font-semibold text-main_color mt-5 mb-5">
          상세설명 *
        </label>
        <input
          className="border-b border-gray-300 focus:outline-none mb-3"
          type="text"
          placeholder="설문 조사에 관한 상세 설명을 작성해주세요. (50자 내)"
          maxLength={50}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="flex flex-col space-y-2 font-semibold text-main_color mt-5 mb-5">
          카테고리 *
        </label>
        <div className="flex space-x-2 mb-5">
          <button
            type="button"
            className={`p-2 w-20 h-10 border ${
              category === "education"
                ? "bg-text_color text-white"
                : "bg-white text-text_color"
            } rounded-full hover:bg-text_color hover:text-white`}
            onClick={() => setCategory("education")}
          >
            교육
          </button>
          <button
            type="button"
            className={`p-2 w-20 h-10 border ${
              category === "IT"
                ? "bg-text_color text-white"
                : "bg-white text-text_color"
            } rounded-full hover:bg-text_color hover:text-white`}
            onClick={() => setCategory("IT")}
          >
            IT
          </button>
          <button
            type="button"
            className={`p-2 w-20 h-10 border ${
              category === "economy"
                ? "bg-text_color text-white"
                : "bg-white text-text_color"
            } rounded-full hover:bg-text_color hover:text-white`}
            onClick={() => setCategory("economy")}
          >
            경제
          </button>
          <button
            type="button"
            className={`p-2 w-20 h-10 border ${
              category === "society"
                ? "bg-text_color text-white"
                : "bg-white text-text_color"
            } rounded-full hover:bg-text_color hover:text-white`}
            onClick={() => setCategory("society")}
          >
            사회
          </button>
          <button
            type="button"
            className={`p-2 w-20 h-10 border ${
              category === "culture"
                ? "bg-text_color text-white"
                : "bg-white text-text_color"
            } rounded-full hover:bg-text_color hover:text-white`}
            onClick={() => setCategory("culture")}
          >
            문화
          </button>
        </div>

        <div className="flex flex-row space-x-4 mb-3">
          <div className="flex-1">
            <label className="flex flex-col space-y-2 mt-3 mb-5 font-semibold text-main_color">
              연령대 *
            </label>
            <select
              className="w-full border-b border-gray-300 focus:outline-none mb-3 text-sub_text_color"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <option value="" disabled>
                연령대 선택
              </option>
              <option value={"all"}>전체</option>
              <option value={"10s"}>10-19</option>
              <option value={"20s"}>20-29</option>
              <option value={"30s"}>30-39</option>
            </select>
          </div>

          <div className="flex-1" style={{ marginLeft: "50px" }}>
            <label className="flex flex-col space-y-2 mt-3 mb-5 font-semibold text-main_color">
                성별 *
            </label>
            <select
              className="w-full mb-3 border-b border-gray-300 focus:outline-none text-sub_text_color"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                성별 선택
              </option>
              <option value="male">남자</option>
              <option value="female">여자</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row space-x-4 mb-5">
          <div className="flex-1">
            <label className="flex flex-col space-y-2 mt-3 mb-5 font-semibold text-main_color">
              마감 기한 *
            </label>
            {/* <input
              className="w-full border-b border-gray-300 focus:outline-none mb-3"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            /> */}
            <CustomDatePicker
      selectedDate={deadline}
      handleChange={(date) => setDeadline(date)}
    />
          </div>

          <div className="flex-1" style={{ marginLeft: "50px" }}>
            <label className="flex flex-col space-y-2 mt-3 mb-5 font-semibold text-main_color">
              목표 응답자 수
            </label>
            <input
              className="w-full border-b border-gray-300 focus:outline-none mb-3"
              type="number"
              value={targetRespondents}
              onChange={(e) => setTargetRespondents(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="self-end px-7 py-2 mt-12 bg-sub_text_color_4 text-white rounded-2xl"
        >
          설문 작성
        </button>
      </form>
    </div>
  );
};

export default CreateSurvey;