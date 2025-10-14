"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function PoetryPage() {
  const [poem, setPoem] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPoem = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // 模拟从后端获取诗词数据
      const mockPoem = {
        title: "静夜思",
        author: "李白",
        dynasty: "唐",
        content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
      };
      setPoem(mockPoem);
    } catch (err) {
      setError("加载诗词失败，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionSubmit = async () => {
    if (!question.trim()) {
      setError("请输入问题");
      return;
    }
    // 模拟 RAG 问答
    setAnswer(
      `关于《${poem.title}》的问题：${question} 的回答是：这是一首描写思乡之情的诗。`
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>诗词鉴赏</h1>
      <button
        className={styles.submitButton}
        onClick={fetchPoem}
        disabled={isLoading}
      >
        {isLoading ? "加载中..." : "加载诗词"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {poem && (
        <div className={styles.poem}>
          <h2 className={styles.poemTitle}>{poem.title}</h2>
          <p className={styles.author}>
            作者：{poem.author}（{poem.dynasty}）
          </p>
          <pre className={styles.content}>{poem.content}</pre>
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
      )}
    </div>
  );
}
