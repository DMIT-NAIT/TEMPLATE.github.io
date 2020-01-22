module.exports = {
    title: 'DMIT-0001 Student Notes',
    description: 'Name_of_Course',
    extendMarkdown(md) {
        config: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-checkbox'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-imsize'))
            md.use(require('markdown-it-kbd'))
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-sup'))
        }
    },
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
            { text: 'Home', link: '/about/' },
            { text: 'Issues/Bugs', link: 'https://github.com/DMIT-0001/DMIT-0001.github.io/issues/new' },
            { text: 'Moodle', link: 'https://moodle.nait.ca' },
        ],
        sidebar: {
            // fallback sidebar
            '/about/': [
                '',
                'todo',
                [ 'https://github.com/DMIT-0001/DMIT-0001.github.io/', 'Source on GitHub' ]
            ]
        }
    },
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true
      },
      '@vuepress/active-header-links': { },
      '@vuepress/back-to-top': { },
      '@vuepress/last-updated': { }
    }
}
