const fs = require('fs')
const chunk = require('lodash.chunk')
const path = require('path')

const baseUrl = 'https://colorbase.app'
const targetDirectory = path.resolve(__dirname, '..', 'static')

function toString(num) {
  const str = num.toString(16)
  if (str.length === 1) {
    return '0' + str
  }
  return str
}

const array = []

for (let r = 0; r < 256; r++) {
  for (let g = 0; g < 256; g++) {
    for (let b = 0; b < 256; b++) {
      array.push(`${toString(r)}${toString(g)}${toString(b)}`)
    }
  }
}

const options = {
  encoding: 'utf-8',
}

/**
 * 0 番として colors 以外を記述
 */
fs.writeFileSync(
  targetDirectory + `/sitemap_0.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://colorbase.app</loc></url>
  <url><loc>https://colorbase.app/about</loc></url>
  <url><loc>https://colorbase.app/privacy</loc></url>
  <url><loc>https://colorbase.app/brand-colors</loc></url>
</urlset>
`,
  options
)

const chunked = chunk(array, 49000)
chunked.forEach((colors, i) => {
  let result =
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  colors.forEach((colorCode) => {
    result += `<url><loc>${baseUrl}/colors/${colorCode}</loc></url>`
  })
  result += '</urlset>'
  fs.writeFileSync(targetDirectory + `/sitemap_${i + 1}.xml`, result, options)
})

let sitemapContent =
  '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

// 0番を追記
sitemapContent += `<sitemap><loc>${baseUrl}/sitemap_0.xml</loc></sitemap>`

chunked.forEach((_, i) => {
  sitemapContent += `<sitemap><loc>${baseUrl}/sitemap_${
    i + 1
  }.xml</loc></sitemap>`
})
sitemapContent += '</sitemapindex>'
fs.writeFileSync(targetDirectory + '/sitemap.xml', sitemapContent, options)
