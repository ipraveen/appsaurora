import * as React from 'react';
// import { AppLayout } from 'components/layout';
import { AppsCatalog } from 'components/panels';

import { Header, Footer } from 'components/layout';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const AgeIndexPagePage = () => {
    return (
        <div className="bg-gray-100">
            <Header />
            <div>
                <main className="container mx-auto my-4 py-6 px-4">
                    <AppsCatalog />
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default AgeIndexPagePage;
