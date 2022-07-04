import React from "react";
import Footer from "./Footer";
import TopBar from './TopBar';
import ContentRowTop from "./ContentRowTop";
function ContentWrapper(){
    return(
        <div>
            <body>
            <div id="wrapper">
                   {/*  <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">
                    <TopBar />
                   {/*  <!-- Main Content --> */}
                    <div id="content">
                        <ContentRowTop />
                       
                    </div>
                    {/* <!-- End of MainContent --> */}
                </div>
               {/*  <!-- End of Content Wrapper --> */}
            </div>
            {/* <!-- End of Page Wrapper -->  */}
            <Footer />
            </body>
        </div>
        
    )
}

export default ContentWrapper;