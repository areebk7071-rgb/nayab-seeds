import { Link } from 'react-router-dom';
import Seo from '../components/shared/Seo';
import { pageSeo } from '../config/seo';
import CommunitySection from '../components/community/CommunitySection';

export default function CommunityPage() {
  return (
    <>
      <Seo
        title={pageSeo.community.title}
        description={pageSeo.community.description}
        path="/community"
        noSuffix
      />

      <div className="page-top">
        <div className="text-center py-8 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-medium mb-4">
            Preview — Full forum coming soon
          </span>
        </div>
        <CommunitySection />
        <div className="text-center pb-16">
          <Link to="/quiz" className="btn-primary inline-block mr-3">Take Plant Quiz</Link>
          <Link to="/shop" className="btn-outline inline-block">Shop Seeds</Link>
        </div>
      </div>
    </>
  );
}
