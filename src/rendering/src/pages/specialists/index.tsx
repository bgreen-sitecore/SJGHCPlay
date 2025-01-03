import React, { ReactElement } from 'react';
import Head from 'next/head';

import SummitLayout from '../../components/NonSitecore/SummitLayout';
import SPSearchResultsWidget from '../../components/ContentSearch/SPSearchResultsWidget';
import { isSearchSDKEnabled } from '../../services/SearchSDKService';

const Specialists = (): JSX.Element => {
  return isSearchSDKEnabled ? <SPSearchResultsWidget rfkId="rfkid_7" /> : <></>;
};

Specialists.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>PLAY! Summit - Search</title>
      </Head>

      <SummitLayout>{page}</SummitLayout>
    </>
  );
};

export default Specialists;
