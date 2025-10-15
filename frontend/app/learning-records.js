"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function LearningRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const { data, error } = await supabase
        .from("learning_records")
        .select("*");
      if (error) console.error("Error fetching records:", error);
      else setRecords(data);
    };
    fetchRecords();
  }, []);

  return (
    <div className="records-container">
      <h1>学习记录</h1>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <p>诗词: {record.poem_title}</p>
            <p>答题时间: {new Date(record.created_at).toLocaleString()}</p>
            <p>结果: {record.is_correct ? "正确" : "错误"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}