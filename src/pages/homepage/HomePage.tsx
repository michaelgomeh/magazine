import {Link} from 'react-router';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './HomePage.module.css';
import {featuredArticles, articles} from '../../data';
import ArticleLink from '../../components/article/ArticleLink';
import VideoPlayer from "../../components/VideoPlayer.tsx";

const HomePage = () => {
    const mainArticle = featuredArticles[0];
    const secondaryArticles = featuredArticles;
    return (
        <div className={styles.homepage}>
            <div className={styles.homeLayout}>
                <div className={styles.secondaryArticles}>
                    {articles
                        .slice(0, 3)
                        .reverse()
                        .map((article) => (
                            <Link to={`/article/${article.id}`} key={article.id}>
                                <ArticleCard
                                    key={article.id}
                                    article={{...article}}
                                    view="text"
                                />
                            </Link>
                        ))}
                </div>
                <ArticleLink
                    key={mainArticle.id}
                    article={mainArticle}
                    view="compact"
                />
                <div className={styles.secondaryArticles}>
                    {secondaryArticles.map((article) => (
                        <ArticleLink key={article.id} article={article} view="text"/>
                    ))}
                </div>
            </div>
            <div className={styles.video}>
                <VideoPlayer videoId="/naturewalk.mp4"/>
                <div className={styles.videoDescription}>
                    <h1>The Power of a 15-Minute Nature Walk: Refresh Your Mind and Body</h1>
                    <p>Walking in nature for just 15 minutes a day can have a profound impact on your mental and
                        physical wellbeing. Studies show that spending time outdoors reduces stress, anxiety, and
                        fatigue, while boosting mood, creativity, and focus. The fresh air, natural light, and greenery
                        help lower cortisol levels, improve heart health, and enhance overall relaxation. Whether it’s a
                        stroll in the park or a short walk through a tree-lined path, this simple habit reconnects you
                        with nature, refreshes your mind, and leaves you feeling calmer, happier, and more energized.
                        🌿🚶‍♂️</p>
                </div>
            </div>

            <div className={styles.articles}>
                {articles.map((article) => (
                    <ArticleLink key={article.id} article={article} view="compact"/>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
