import React from "react";
import Footer from "./Footer";
import TopBar from './TopBar';
import ContentRowTop from "./ContentRowTop";
function ContentWrapper(){
    return(
        <div>
            {/* <!-- Content Wrapper --> */}
		    <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                </div>
                {/* <!-- End of MainContent --> */}
			        <Footer />
		</div>
		{/* <!-- End of Content Wrapper --> */}
        </div>
    )
}

export default ContentWrapper;