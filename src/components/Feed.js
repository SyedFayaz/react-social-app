import { Box } from "@mui/material"
import { FeedCard } from "./FeedCard"

const feedData = [
    {
        title: "Evening panorama of Bachalp lake",
        subTitle: "Bachalpsee Switzerland",
        imageUrl: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80",
        imageAlt: "panorama",
        description: "Fantastic evening panorama of Bachalp lake / Bachalpsee, Switzerland. Picturesque autumn sunset in Swiss alps, Grindelwald, Bernese Oberland, Europe. Beauty of nature concept background."
    },
    {
        title: "Autumn forest",
        subTitle: "Vivid morning",
        imageUrl: "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
        imageAlt: "autumn-forest",
        description: "Autumn forest nature. Vivid morning in colorful forest with sun rays through branches of trees. Scenery of nature with sunlight"
    },
    {
        title: "Earth Crystal Glass Globe",
        subTitle: "Shutterstock customers love this asset!",
        imageUrl: "https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000",
        imageAlt: "crystal-glass",
        description: "Earth crystal glass globe ball and growing tree in human hand, flying yellow butterfly on green sunny background. Saving environment, save clean planet, ecology concept. Card for World Earth Day."
    },
    {
        title: "Scene of Vorderer ",
        subTitle: "colorful Morning",
        imageUrl: "https://wallpaperaccess.com/full/393735.jpg",
        imageAlt: "vordered",
        description: "Sunny autumn scene of Vorderer ( Gosausee ) lake. Colorful morning view of Austrian Alps, Upper Austria, Europe. Beauty of nature concept background."
    },
    {
        title: "Nature background and table wood",
        subTitle: "empty table wood display",
        imageUrl: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg",
        imageAlt: "table-wood",
        description: "Nature background and table wood for product display template, Empty wooden table and sack tablecloth over blur green tree at park, garden outdoor with bokeh light background"
    }
]

export const Feed = () => {
    return (
        <Box flex={4} p={2}>
            {
                feedData.map((feed) => (
                    <FeedCard feed={feed} key={feed.imageAlt}/>
                ))
            }

        </Box>
    )
}