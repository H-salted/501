"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./home.module.css";

export default function HomePage() {
  // 临时占位：后续接 Supabase 数据
  const poems = null;

  // 诗词挑战交互状态与逻辑
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
      options: ["疑是地上霜", "低头思故乡", "举头望明月", "床前明月光"],
      answer: "疑是地上霜"
    },
    {
      id: 2,
      question: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
      options: ["处处闻啼鸟", "夜来风雨声", "花落知多少", "春眠不觉晓"],
      answer: "处处闻啼鸟"
    }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      const correctAnswer = questions[currentQuestion].answer;
      setIsCorrect(selectedOption === correctAnswer);
      setIsSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsSubmitted(false);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>诗光词影</h1>
        <p className={styles.subtitle}>AI赋能诗词鉴赏平台</p>
        <p className={styles.description}>
          通过人工智能技术，为您提供深度的诗词解读、个性化学习路径和创作辅助，
          让古典诗词在现代科技中焕发新生。
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🎭 智能鉴赏</h3>
            <p>多维度解读诗词背景、意象、手法和情感</p>
          </div>
          <div className={styles.feature}>
            <h3>📚 个性化学习</h3>
            <p>AI根据您的水平制定专属学习计划</p>
          </div>
          <div className={styles.feature}>
            <h3>✍️ 创作工坊</h3>
            <p>辅助诗词创作，检查格律和押韵</p>
          </div>
        </div>

        <div className={styles.popularPoems}>
          <h3 className={styles.sectionTitle}>热门诗词</h3>
          <div className={styles.poemList}>
            {poems ? (
              poems.map((poem) => (
                <div key={poem.id} className={styles.poemCard}>
                  <h4>{poem.title}</h4>
                  <p>{poem.content}</p>
                </div>
              ))
            ) : (
              <div className={styles.skeletonPoemCard}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonContent}></div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.updates}>
          <h3 className={styles.sectionTitle}>平台动态</h3>
          <div className={styles.updateList}>
            <div className={styles.updateCard}>
              <h4>新功能上线</h4>
              <p>诗词创作工坊现已支持格律自动检查！</p>
            </div>
            <div className={styles.updateCard}>
              <h4>活动预告</h4>
              <p>下周将举办“中秋诗词大会”，欢迎参与！</p>
            </div>
          </div>
        </div>

        <div className={styles.challenge}>
          <h3 className={styles.challengeTitle}>诗词挑战</h3>
          <div className={styles.challengeCard}>
            <p className={styles.challengeQuestion}>
              “床前明月光”的下一句是什么？
            </p>
            <div className={styles.challengeOptions}>
              <button
                className={`${styles.optionButton} ${
                  selectedOption === "疑是地上霜" ? styles.selected : ""
                }`}
                onClick={() => handleOptionClick("疑是地上霜")}
              >
                疑是地上霜
              </button>
              <button
                className={`${styles.optionButton} ${
                  selectedOption === "举头望明月" ? styles.selected : ""
                }`}
                onClick={() => handleOptionClick("举头望明月")}
              >
                举头望明月
              </button>
              <button
                className={`${styles.optionButton} ${
                  selectedOption === "低头思故乡" ? styles.selected : ""
                }`}
                onClick={() => handleOptionClick("低头思故乡")}
              >
                低头思故乡
              </button>
            </div>
            <button className={styles.submitButton} onClick={handleSubmit}>
              提交答案
            </button>
            {isCorrect !== null && (
              <p
                className={
                  isCorrect ? styles.correctFeedback : styles.incorrectFeedback
                }
              >
                {isCorrect ? "回答正确！" : "回答错误，请再试一次！"}
              </p>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            开始鉴赏
          </Link>
          <Link href="/learning-records" className={styles.secondaryButton}>
            查看学习记录
          </Link>
        </div>

        <div className={styles.testimonials}>
          <h3 className={styles.testimonialsTitle}>用户评价</h3>
          <div className={styles.testimonialCard}>
            <div className={styles.userInfo}>
              <img
                src="/user-avatar.svg"
                alt="用户头像"
                className={styles.userAvatar}
              />
              <span className={styles.userName}>张三</span>
            </div>
            <p className={styles.testimonialText}>
              这个平台让我对诗词有了全新的理解，非常棒！
            </p>
            <div className={styles.rating}>★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
}
