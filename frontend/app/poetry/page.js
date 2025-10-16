"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function PoetryPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const poem = {
    title: "静夜思",
    author: "李白",
    dynasty: "唐",
    content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
    annotation: "注释：这首诗描写了诗人在寂静的月夜思念家乡的感受。",
    appreciation: "赏析：诗人通过描绘月光和霜的对比，表达了对故乡的深切思念。"
  };

  const handleQuestionSubmit = async () => {
    if (!question.trim()) {
      alert("请输入问题");
      return;
    }
    // 模拟 RAG 问答
    setAnswer(
      `关于《${poem.title}》的问题：${question} 的回答是：这是一首描写思乡之情的诗。`
    );
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const sharePoem = () => {
    alert(`分享《${poem.title}》成功！`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>诗词鉴赏</h1>
      <div className={styles.poem}>
        <h2 className={styles.poemTitle}>{poem.title}</h2>
        <p className={styles.author}>
          作者：{poem.author}（{poem.dynasty}）
        </p>
        <pre className={styles.content}>{poem.content}</pre>
        <div className={styles.annotation}>
          <h3>注释</h3>
          <p>{poem.annotation}</p>
        </div>
        <div className={styles.appreciation}>
          <h3>赏析</h3>
          <p>{poem.appreciation}</p>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.favoriteButton}
            onClick={toggleFavorite}
          >
            {isFavorite ? "已收藏" : "收藏"}
          </button>
          <button
            className={styles.shareButton}
            onClick={sharePoem}
          >
            分享
          </button>
        </div>
        <div className={styles.questionForm}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="输入你的问题"
            className={styles.questionInput}
          />
          <button
            className={styles.submitButton}
            onClick={handleQuestionSubmit}
          >
            提问
          </button>
        </div>
        {answer && <p className={styles.answer}>{answer}</p>}
      </div>
    </div>
  );
}
