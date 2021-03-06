import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {




    render() {

        // work out the title - don't have page-specific titles on the homepage, only the full site-wide title
        var title = _.get(this.props, 'pageContext.frontmatter.title');

        if (title=="Home") {
            title = _.get(this.props, 'pageContext.site.siteMetadata.title');
        } else {
            title = _.get(this.props, 'pageContext.frontmatter.title') + ' - ' + _.get(this.props, 'pageContext.site.siteMetadata.title');
        }

        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    <link rel="stylesheet" href={safePrefix('css/notifium.css')}/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" crossOrigin="anonymous" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossOrigin="anonymous" />
                    <script src="https://www.notifium.com/js/ziq-inpage.js" crossOrigin="anonymous"></script>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
                <script src="https://cdn.pagesense.io/js/notifium/7e3b90ff7fa44c37a83fb136376fa443.js"></script>
            </React.Fragment>
        );
    }
}
