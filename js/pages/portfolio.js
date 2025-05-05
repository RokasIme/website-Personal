import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { featuredProjectsSection } from "../components/featured-projects-section.js";
import { footer } from "../components/footer.js";

header();
blueTitleColumn('Portfolio', 'Portfolio', './portfolio/index.html');
featuredProjectsSection();
footer();

