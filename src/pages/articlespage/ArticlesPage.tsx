import {articles} from "../../data.ts";
import ArticleLink from "../../components/article/ArticleLink.tsx";
import styles from './ArticlesPage.module.css'

const ArticlesPage = () => {
    return (
        <div>
            <div className={styles.articlesList}>
                <h2>Articles</h2>
                {articles.map((article) => (
                    <ArticleLink key={article.id} article={article} view="horizontal"/>
                ))}
            </div>
        </div>
    );
};

export default ArticlesPage;