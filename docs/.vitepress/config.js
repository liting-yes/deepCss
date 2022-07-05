import { navbarEN, sidebarEN } from './nav'

export default {
    title: 'Deep CSS',
    description: 'use CSS gracefully',
    themeConfig: {
        siteConfig: 'Deep CSS',
        logo: '/logo.png',
        nav: navbarEN,
        sidebar: sidebarEN,
        socialLinks: [
            {
                icon: 'github', link: 'https://github.com/liting-yes/deepCss'
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present liting'
        }
    }
}