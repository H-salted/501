"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const LearningRecordsPage = () => {
  const [records, setRecords] = useState([
    { id: 1, title: "静夜思", progress: 80 },
    { id: 2, title: "春晓", progress: 60 },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>学习记录</h1>
      <ul className={styles.recordList}>
        {records.map((record) => (
          <li key={record.id} className={styles.recordItem}>
            <span>{record.title}</span>
            <span>进度: {record.progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningRecordsPage;
