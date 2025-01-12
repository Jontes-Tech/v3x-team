type Person = {
    avatar?: `${string}.webp`;
    name: string;
    title?: string;
    url?: `https://${string}` | `http://${string}`;
    slug?: string;
};

export const list: Person[] = [
    {
        name: 'Luc van Kampen',
        title: 'Lead Researcher',
        avatar: '/team/luc.webp',
        slug: 'luc',
    },
    {
        name: 'Antonio Fran Štignjedec',
        title: 'Researcher',
        avatar: '/team/antony.webp',
        slug: 'antony',
    },
    {
        name: 'Jakob Helgesson',
        title: 'Researcher',
        avatar: '/team/jakob.webp',
        slug: 'jakob',
    },
    {
        name: 'Elliot Lindberg',
        title: 'Researcher',
        slug: 'elliot',
    },
    {
        name: 'Ana Howard',
        title: 'Researcher',
        avatar: '/team/ana.webp',
        slug: 'ana',
    },
    {
        name: 'Prokop Schield',
        title: 'Researcher',
        slug: 'prokop',
    },
    {
        name: 'Harry Bairstow',
        title: 'Researcher',
        avatar: '/team/harry.webp',
        slug: 'harry',
    },
    {
        name: 'Dercio Hoffman',
        title: 'Researcher',
        avatar: '/team/dercio.webp',
        slug: 'dercio',
    },
    {
        name: 'Jonatan Holmgren',
        title: 'Researcher',
        avatar: '/team/jonte.webp',
        slug: 'jonte',
    },
];

export const general_contributors: Person[] = [
    {
        name: 'Laith',
        avatar: '/contributor/laith.webp',
        url: 'https://laith.app/',
    },
    {
        name: 'Miguel Piedrafita',
        avatar: '/contributor/miguel.webp',
        url: 'https://miguel.build/',
    },
    {
        name: 'Hattorius',
        avatar: '/contributor/hatty.webp',
        url: 'https://xlogic.sh/',
    },
    {
        name: 'Joshua Hendrix',
        avatar: '/contributor/josh.webp',
        url: 'https://github.com/thejoshuahendrix',
    },
    {
        name: 'Derock',
        avatar: '/contributor/derock.webp',
        url: 'https://derock.dev/',
    },
    {
        name: 'Visen',
        avatar: '/contributor/visen.webp',
        url: 'https://visen.dev/',
    },
    {
        name: 'Alan',
        avatar: '/contributor/vlan.webp',
        url: 'https://github.com/imvlan',
    },
    {
        name: 'Samvel Petrosyan',
        avatar: '/contributor/loidnoir.webp',
        url: 'https://github.com/loidnoir',
    },
    {
        name: 'Jonah "Jay" Y-M',
        avatar: '/contributor/tgtechie.webp',
        url: 'https://github.com/TG-Techie',
    },
    {
        name: 'Michael Desormeaux',
        avatar: '/contributor/michaeldesormeaux.webp',
        url: 'https://home.mikedez.com/',
    },
    {
        name: 'Carlos A',
        avatar: '/contributor/chalkedgoodse.webp',
        url: 'https://www.carlosalba.dev/',
    },
    {
        name: 'Will (0xEquinox)',
        avatar: '/contributor/equinox.webp',
        url: 'https://github.com/0xEquinox',
    },
    {
        name: 'Kristóf Kékesi',
        avatar: '/contributor/kristof.webp',
        url: 'https://kekesi.dev',
    },
    {
        name: 'MilkedCow',
        avatar: '/contributor/milkedcow.webp',
        url: 'https://github.com/MilkedCow',
    },
    {
        name: 'JoelImgu',
        avatar: '/contributor/joelimgu.webp',
        url: 'https://joelimgu.github.io',
    },
    {
        name: 'Oğuz Eray Orhan',
        avatar: '/contributor/oguzeray.webp',
        url: 'https://github.com/oguzeray',
    },
];
