export const NavApps: ISection[] = [
    {
        heading: 'Account',
        key: 'personal-info',
        apps: [
            {
                key: 'app-personal-info',
                heading: 'Personal info',
                to: '/personal-info',
            },
        ],
    },
    {
        heading: 'Account Security',
        key: 'account-security',
        apps: [
            {
                key: 'change-password',
                heading: 'Change Password',
                to: '/account-security/change-password',
            },
            // {
            //     key: 'authenticator',
            //     heading: 'Authenticator',
            //     to: '/account-security/authenticator',
            // },
            // {
            //     key: 'device-activity',
            //     heading: 'Device Activity',
            //     to: '/account-security/device-activity',
            // },
        ],
    },
    // {
    //     heading: 'Applications',
    //     key: 'applications',
    //     apps: [
    //         {
    //             key: 'applications',
    //             heading: 'Applications',
    //             to: '/applications'
    //         }
    //     ],
    // }
];

export interface ISection {
    heading: string;
    key: string;
    extraProps?: { [props: string]: any };
    apps: IApp[];
}

export interface IApp {
    heading: string;
    key: string;
    to?: string;
    href?: string;
    extraProps?: { [props: string]: any };
}
