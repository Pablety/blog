export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '62550749008cd274cae06194',
                  title: 'Sanity Studio',
                  name: 'blog-studio-udw4rdyk',
                  apiId: '4de75d64-eaf0-4d88-8729-c92aadf0b930'
                },
                {
                  buildHookId: '62550749190d1679aae46768',
                  title: 'Blog Website',
                  name: 'blog-web-zwvbzpk2',
                  apiId: '9fbef22a-e3a9-430b-8ee1-631f7aef6c49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pablety/blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-web-zwvbzpk2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
