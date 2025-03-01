import {articles} from "../../data.ts";
import ArticleLink from "../../components/article/ArticleLink.tsx";
import styles from './ArticlesPage.module.css'
import {useSearchParams} from "react-router";

const ArticlesPage = () => {
    const [searchParams,] = useSearchParams();
    const cat = searchParams.get("cat");
    return (
        <div className={styles.articlesList}>
            <h2>{cat}</h2>
            {articles.map((article) => (
                <ArticleLink key={article.id} article={article} view="horizontal"/>
            ))}
        </div>
    );
};

export default ArticlesPage;