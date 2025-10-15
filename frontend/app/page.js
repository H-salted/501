import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
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
            <div className={styles.poemCard}>
              <h4>《静夜思》</h4>
              <p>床前明月光，疑是地上霜。</p>
              <p>举头望明月，低头思故乡。</p>
            </div>
            <div className={styles.poemCard}>
              <h4>《登鹳雀楼》</h4>
              <p>白日依山尽，黄河入海流。</p>
              <p>欲穷千里目，更上一层楼。</p>
            </div>
            <div className={styles.poemCard}>
              <h4>《春晓》</h4>
              <p>春眠不觉晓，处处闻啼鸟。</p>
              <p>夜来风雨声，花落知多少。</p>
            </div>
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
            <p className={styles.challengeQuestion}>“床前明月光”的下一句是什么？</p>
            <div className={styles.challengeOptions}>
              <button className={styles.optionButton}>疑是地上霜</button>
              <button className={styles.optionButton}>举头望明月</button>
              <button className={styles.optionButton}>低头思故乡</button>
            </div>
            <button className={styles.submitButton}>提交答案</button>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/poetry" className={styles.primaryButton}>
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
              <img src="/user-avatar.png" alt="用户头像" className={styles.userAvatar} />
              <span className={styles.userName}>张三</span>
            </div>
            <p className={styles.testimonialText}>这个平台让我对诗词有了全新的理解，非常棒！</p>
            <div className={styles.rating}>★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
}
