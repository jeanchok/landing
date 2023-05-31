import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';

export default function IndexPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <div style={{ marginTop: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1>Mentions Légales</h1>
                        <p>
                            Le site internet www.chatia.fr est édité par M. Jean Choquet, entrepreneur individuel,<br />
                            domicilié à l'adresse suivante : 10 rue d'Armorique, Arzon 56640, France.
                        </p>
                        <p>
                            Vous pouvez nous contacter par email à l'adresse suivante : contact@jeanchoquet.fr
                        </p>
                        <p>
                            Le numéro de SIRET de l'entreprise est le suivant : 88454136800012
                        </p>
                        <p>
                            Ce site est hébergé par OVH dont le siège social est situé 2 rue Kellermann - 59100 Roubaix - France.
                        </p>
                    </div>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
