import {Link} from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import FeaturedCard from './FeaturedCard';
import {featuredProjects} from '../../data/featured-projects';
import styles from './HighlightsSection.module.css';

function HighlightsSection() {
    return (
        <section id="featured-projects" className={styles.highlightsSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Featured Projects</h2>
            </div>

            <div className={styles.highlights}>
                {featuredProjects.map((project) => (
                    <FeaturedCard key={project.title} {...project} />
                ))}
            </div>

            <Link to="/projects" className="button outlined">
                See All Projects <HiArrowRight />
            </Link>
        </section>
    );
}

export default HighlightsSection;
