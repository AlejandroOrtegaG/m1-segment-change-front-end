import { useLocation } from "react-router-dom";
import DetailedAndBackViews from "../components/DetailedAndBackViews";
import Footer from "../components/Footer";
import SegmentActions from "../components/SegmentActions";

import "../styles/DetailedView.css"

const DetailedView = () => {
  const location = useLocation();
  const { segment, adjacentSegments } = location.state || {};

  return (
    <>
      <div className="detailed-view-actions">
        <DetailedAndBackViews
          segment={segment}
          adjacentSegments={adjacentSegments}
        />
        <SegmentActions segment={segment} />
      </div>
      <Footer />
    </>
  );
};

export default DetailedView;
