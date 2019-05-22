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
                  buildHookId: '5ce524f87295feacc84b9f94',
                  title: 'Sanity Studio',
                  name: 'sanity-dictionary-studio',
                  apiId: 'f98d98fb-d62d-489f-946a-cc896160dc73'
                },
                {
                  buildHookId: '5ce524f8308b6b7665710a0e',
                  title: 'Blog Website',
                  name: 'sanity-dictionary',
                  apiId: 'e8d25ad8-a113-4960-9a41-ba72400d88ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Thymas1/sanity-dictionary',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-dictionary.netlify.com', category: 'apps'}
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
