import React from 'react'
import InfiniteMenu from '../../blocks/Components/InfiniteMenu/InfiniteMenu';
import './SphereDescriptiveCard.css'
import kivoLogo from '../../assets/ProjectLogo/kivo-ai.png';
import lanacashLogo from '../../assets/ProjectLogo/lana.svg';
import siloLogo from '../../assets/ProjectLogo/silo.avif';
import crmKivoLogo from '../../assets/ProjectLogo/crm-kivo-logo.svg';
import biometricLogo from '../../assets/ProjectLogo/bio.svg';
import stebLogo from '../../assets/ProjectLogo/steb.avif';

console.log(stebLogo)
const items = [
    {
        image: kivoLogo,
        link: 'https://www.kivo.ai/',
        title: 'Kivo.ai',
        description: [
            'An all-in-one Employee Management tool featuring:',
            'Social feed',
            'HRMS',
            'Project management board',
            'Employee profiles',
            'Leave management',
            'Attendance tracking',
            'Performance reviews',
            'Payroll',
            'And more...',
        ]
    }
    ,
    {
        image: lanacashLogo,
        link: 'https://www.lana.cash/',
        title: 'Lana Cash',
        description: 'An AI-powered financial platform for easy integrations and smarter decision-making. Built in ROR and React JS'
    },
    {
        image: siloLogo,
        link: 'https://www.silomembers.com/',
        title: 'Silo Members',
        description: 'Car Insurance Platform. Built in ROR and React JS '
    },
    {
        image: crmKivoLogo,
        link: 'https://crm.kivo.ai/',
        title: 'Kivo CRM',
        description: 'A fully automated CRM that handles everything—from lead syncing to sending reminders via WhatsApp, SMS, and email—without any manual effort! Built with Ruby on Rails and Vue.js.'
    },
    {
        image: biometricLogo,
        link: 'https://www.mybiometric.ai/',
        title: 'My Biometric',
        description: 'Book blood tests from home with doorstep sample collection and AI-powered report analysis. Get results via email—fast, easy, and reliable. Built with Spree Commerce and Ruby on Rails.'
    },
    {
        image: stebLogo,
        link: 'https://stebdigital.wixsite.com/testing',
        title: 'Steb Digital',
        description: 'Effortlessly book your perfect party through a smart AI chat! Choose themes, menus, and vendors—all in one conversation. Personalize every detail and check out seamlessly with online payments. Built using Wix Studio and Voiceflow.'
    },
];

function SphereDescriptiveCard() {
    return (
        <div id="SphereDescriptiveCard" style={{ height: '100%',  width: "100%", position: 'relative'}}>
            <p id="title">Projects</p>
            <InfiniteMenu items={items} />
        </div>

    )
}

export default SphereDescriptiveCard