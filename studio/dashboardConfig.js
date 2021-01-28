export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601278f17d65779bfff9b526',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-upgq7ugj',
                  apiId: 'f7c91de5-f2e1-4c84-aa68-38f7a3d482d1'
                },
                {
                  buildHookId: '601278f2ce29f3a4516b2d73',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zpg1697b',
                  apiId: '9a17ef5a-33d5-4292-ae4a-a364dfdd38fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariuma19/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zpg1697b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
