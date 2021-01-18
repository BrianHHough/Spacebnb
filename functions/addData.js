const { createClient } = require("@astrajs/collections")

const collection = "posts"

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  })

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection)

  const data = [
    {
      id: 0,
      name: "planet1",
      img: {planet1},
      location: "Venus",
      title: "Valentines' Day Suite on Venus",
      description: "Enjoy the breath-taking views and vistas from Venus' most scenic location. The vacation of a life-time is one click away.",
      star: 4.83,
      price: "$650/night",
      total: "$1,950 total",
      button_visible: true,
    },
    {
      id: 1,
      name: "planet2",
      img: {planet2},
      location: "Saturn",
      title: "Penthouse on Saturn",
      description="Saturn is known for two things: the largest planetary rings around a planet and the glorious accomodations at the Saturn Holiday Inn.",
      star: "4.94",
      price: "$450/night",
      total: "$3,150 total",
      button_visible: true,
    },
    {
      id: 2,
      name: "planet6",
      img: {planet6},
      location: "Neptune",
      title: "1 Bedroom Apartment on Neptune",
      description: "Neptune's axis of rotation is similar to Earth's, and its seasons last 40+ years. Come now for a year-round summer.",
      star: 4.04,
      price: "$400/night",
      total: "$1,200 total",
      button_visible: true,
    },
    {
      id: 3,
      name: "planet3",
      img: {planet3},
      location: "Earth's Moon",
      title: "1 Bedroom Cybercapsul",
      description: "Since becomming the most inhabited planetary location, the Moon is known for spectacular views and a great community of space travelers.",
      star: 4.32,
      price: "$350/night",
      total: "$2,450 total",
      button_visible: true,
    },
    {
      id: 0,
      name: "planet4",
      img: {planet4},
      location: "Mars",
      title: "Spacious Open-Space Loft for 1",
      description: "Dubbed the most mysterious planet in the Milkey Way Galaxy. Discover if Martians exist on Mars and enjoy an unforgettable getaway on the most famous planet.",
      star: 4.76,
      price: "$750/night",
      total: "$4,190 total",
      button_visible: true,
    },
  ]

  try {
    for (let i = 0; i < data.length; i++) {
      await posts.create(data[i].id, data[i])
    }

    return {
      statusCode: 200,
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}