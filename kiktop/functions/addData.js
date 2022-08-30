/* connect with astra */
const { createClient } = require("@astrajs/collections");

const collection = 'ktposts';

exports.handler = async function (event, context, callback) {
    // create an Astra client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    });

    // access the posts
    const posts = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection);

        const data = [
            {
                id: 0,
                name: "유재석 Yoo Jae Suk",
                username: "jaesukkie1408",
                avatar: "https://6.vikiplatform.com/image/18dac8f2fec5465bbf5e7d6e21be3a3e.jpeg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: true,
                video: "https://i.imgur.com/FTBP02Y.mp4",
                caption: "PD Choi Bo-pil, watching upon us 👋",
                likes: 10,
                comments: 2,
                timestamp: "2022-08-01T09:08:31.020Z",
                button_visible: true
            },
            {
                id: 1,
                name: "지석진 Jee Seok Jin",
                username: "jeeseokjin",
                avatar: "https://6.vikiplatform.com/image/c3da361070f548409412e9b23889b318.jpeg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: false,
                video: "https://i.imgur.com/8TZ6tCl.mp4",
                caption: "TBT: So-min and Se-chan are announced as new cast members on 런닝맨",
                likes: 12,
                comments: 2,
                timestamp: "2022-03-10T09:08:31.020Z",
                button_visible: true
            },
            {
                id: 2,
                name: "하하 HAHA",
                username: "quanhaha79",
                avatar: "https://6.vikiplatform.com/image/d4f7d6e4b5a44306840d0565f1339355.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: true,
                video: "https://i.imgur.com/5k3PQ9w.mp4",
                caption: "Jong Kook hyuuuuung 😂",
                likes: 2,
                comments: 4,
                timestamp: "2022-04-03T09:08:31.020Z",
                button_visible: true
            },
            {
                id: 3,
                name: "송지효 Song Ji Hyo",
                username: "my_songjihyo",
                avatar: "https://6.vikiplatform.com/image/6438c26c059949e0911e91ab71f6254b.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: false,
                video: "https://i.imgur.com/a5TwPEi.mp4",
                caption: "Not working tomorrow",
                likes: 10,
                comments: 2,
                timestamp: "2022-05-25T09:08:31.020Z",
                button_visible: true
            },
            {
                id: 4,
                name: "김종국 Kim Jong Kook",
                username: "kjk76",
                avatar: "https://6.vikiplatform.com/image/a756478ff21e42a3b96849f5313e88a4.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: true,
                video: "https://i.imgur.com/vXBfcUI.mp4",
                caption: "Squat.",
                likes: 231,
                comments: 20,
                timestamp: "2022-07-13T09:08:31.020Z",
                button_visible: true
            },
            {
                id: 5,
                name: "전소민 Jeon So Min",
                username: "jsomin86",
                avatar: "https://6.vikiplatform.com/image/18de3ec9d77546eda009cbc5ef1e8c8e.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: true,
                video: "https://i.imgur.com/LYgQ4o1.mp4",
                caption: "Who's playing dirty?",
                likes: 38,
                comments: 4,
                timestamp: "2022-06-04T09:08:31.020Z",
                button_visible: true
            },
            {
                id: 6,
                name: "양세찬 Yang Se Chan",
                username: "yangse2848",
                avatar: "https://6.vikiplatform.com/image/26ed8e5401d14e3fa658892ddc12b15e.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
                is_followed: true,
                video: "https://i.imgur.com/g8PvJw3.mp4",
                caption: "Art is for everyone",
                likes: 14,
                comments: 7,
                timestamp: "2022-03-18T09:08:31.020Z",
                button_visible: true
            }
        ];
    
        
    // create posts
    try {
        for (let i = 0; i < data.length; i++) {
            await posts.create(data[i].id, data[i]);
        }
        
        return {
            statusCode: 200
        }

    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

}