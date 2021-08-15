const PNG = require('pngjs').PNG

function isValidHex(hex) {
  if (typeof hex !== 'string') {
    return false
  }
  if (hex.match(/^[0-9a-fA-F]{6}$/) === null) {
    return false
  }
  return true
}

exports.handler = async function (event) {
  const hex = event.queryStringParameters['hex']
  if (!isValidHex(hex)) {
    return {
      statusCode: 400,
    }
  }

  // to hex
  const red = parseInt(hex[0] + hex[1], 16)
  const green = parseInt(hex[2] + hex[3], 16)
  const blue = parseInt(hex[4] + hex[5], 16)

  const png = new PNG({
    width: 600,
    height: 314,
    colorType: 2, // RGB
    bgColor: {
      red,
      green,
      blue,
    },
  })

  try {
    const buffer = await new Promise((resolve, reject) => {
      const bufs = []
      png.pack()
      png.on('data', (chunk) => {
        bufs.push(chunk)
      })
      png.on('end', () => {
        resolve(Buffer.concat(bufs))
      })
      png.on('error', (e) => {
        reject(e)
      })
    })
    const base64 = buffer.toString('base64')
    return {
      statusCode: 200,
      body: base64,
      headers: {
        'Content-Type': 'image/png',
      },
      isBase64Encoded: true,
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
    }
  }
}
