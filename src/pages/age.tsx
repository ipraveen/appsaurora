import * as React from 'react';
import { AppLayout } from '@/layout/index';;
import AgeCalculator from '@/apps/age-calculator/AgeCalculator';
import SEO from '@/components/seo/SEO';
import { HeadProps } from 'gatsby';

const AgePage = () => {
    return (
        <AppLayout appName="age">
            <AgeCalculator />
        </AppLayout>
    );
};

export default AgePage;

export const Head = (props: HeadProps) => {
    const { location } = props;
    return (
        <SEO
            title="Age Calculator"
            description="Calculate your age online"
            pathname={location.pathname}
        />
    );
};

