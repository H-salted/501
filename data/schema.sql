-- 诗词基本信息表
CREATE TABLE poems (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INTEGER REFERENCES poets(id),
    dynasty VARCHAR(100),
    content TEXT NOT NULL
);

-- 诗人信息表
CREATE TABLE poets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    biography TEXT,
    style TEXT
);

-- 诗词解读表
CREATE TABLE interpretations (
    id SERIAL PRIMARY KEY,
    poem_id INTEGER REFERENCES poems(id),
    source VARCHAR(100),
    content TEXT NOT NULL
);

-- 诗词知识库切片表
CREATE TABLE knowledge_chunks (
    id SERIAL PRIMARY KEY,
    poem_id INTEGER REFERENCES poems(id),
    topic VARCHAR(255),
    content TEXT NOT NULL,
    vector_data VECTOR(1536) -- 假设使用 pgvector 存储向量数据
);

-- 用户学习计划表
CREATE TABLE user_learning_paths (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    goal TEXT,
    plan JSONB
);

-- 用户创作作品表
CREATE TABLE user_creations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 社区活动信息表
CREATE TABLE community_activities (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_time TIMESTAMP,
    end_time TIMESTAMP
);