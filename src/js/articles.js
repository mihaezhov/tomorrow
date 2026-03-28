import Airtable from 'airtable'

Airtable.configure({
  apiKey: process.env.AIRTABLE_TOKEN,
})

const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

function getArticlesTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Table 1')
      .select()
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            content.push({
              title: record.get('Title'),
              description: record.get('Description'),
              url: record.get('URL'),
              image: record.get('Image'),
            })
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            reject(err)
          } else {
            resolve(content)
          }
        }
      )
  })
}

function renderArticles(articles) {
  const grid = document.getElementById('articles-grid')
  if (!grid) return

  grid.innerHTML = articles
    .map(
      (article) => `
    <a href="${article.url || '#'}" class="card card--article">
      <div class="card__image-container">
        <img src="${article.image || ''}" style="width:100%; height:100%; object-fit:cover;" alt="${article.title}">
      </div>
      <div class="card__text">
        <h3 class="card__title">${article.title}</h3>
        <p class="card__subtitle">${article.description}</p>
      </div>
    </a>
  `
    )
    .join('')
}

if (document.getElementById('articles-grid')) {
  getArticlesTeasers()
    .then((articles) => {
      renderArticles(articles)
    })
    .catch((err) => {
      console.error('Ошибка загрузки статей:', err)
    })
}
