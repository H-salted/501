"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function StudyPage() {
  const [studyRecords, setStudyRecords] = useState([
    { id: 1, title: "诗词学习", time: "2025-10-15", duration: "2小时", content: "学习了《静夜思》并完成赏析。", category: "诗词" },
    { id: 2, title: "数学练习", time: "2025-10-16", duration: "1.5小时", content: "完成了代数习题集。", category: "数学" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: "", time: "", duration: "", content: "", category: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(studyRecords.map(record => record.category))];
  const totalDuration = studyRecords.reduce((total, record) => {
    const hours = parseFloat(record.duration.split("小时")[0]);
    return total + hours;
  }, 0);

  const filteredRecords = studyRecords.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? record.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (record) => {
    setEditingId(record.id);
    setEditData({
      title: record.title,
      time: record.time,
      duration: record.duration,
      content: record.content,
      category: record.category
    });
  };

  const handleSave = (id) => {
    setStudyRecords(studyRecords.map(record => 
      record.id === id ? { ...record, ...editData } : record
    ));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setStudyRecords(studyRecords.filter(record => record.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>学习记录</h1>
      <div className={styles.stats}>
        <p>总学习记录：{studyRecords.length} 条</p>
        <p>总学习时长：{totalDuration} 小时</p>
      </div>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="搜索学习记录"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="">所有分类</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className={styles.records}>
        {filteredRecords.map(record => (
          <div key={record.id} className={styles.record}>
            <h2 className={styles.recordTitle}>{record.title}</h2>
            <p className={styles.recordMeta}>
              <span>{record.time}</span>
              <span>{record.duration}</span>
              <span className={styles.recordCategory}>{record.category}</span>
            </p>
            {editingId === record.id ? (
              <div className={styles.editForm}>
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  placeholder="标题"
                  className={styles.editInput}
                />
                <input
                  type="text"
                  value={editData.time}
                  onChange={(e) => setEditData({ ...editData, time: e.target.value })}
                  placeholder="时间"
                  className={styles.editInput}
                />
                <input
                  type="text"
                  value={editData.duration}
                  onChange={(e) => setEditData({ ...editData, duration: e.target.value })}
                  placeholder="时长"
                  className={styles.editInput}
                />
                <select
                  value={editData.category}
                  onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                  className={styles.editInput}
                >
                  <option value="">选择分类</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <textarea
                  value={editData.content}
                  onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                  placeholder="内容"
                  className={styles.editTextarea}
                />
                <button
                  className={styles.saveButton}
                  onClick={() => handleSave(record.id)}
                >
                  保存
                </button>
              </div>
            ) : (
              <p className={styles.recordContent}>{record.content}</p>
            )}
            <div className={styles.actions}>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(record)}
              >
                编辑
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(record.id)}
              >
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
