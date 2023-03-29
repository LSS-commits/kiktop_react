// initial users/posts data
const initialData = [
    {
        id: 0,
        name: "유재석",
        romanized_name:"Yoo Jae Suk",
        username: "jaesukkie1408",
        avatar: "https://6.vikiplatform.com/image/18dac8f2fec5465bbf5e7d6e21be3a3e.jpeg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
        is_followed: true,
        video: "https://i.imgur.com/FTBP02Y.mp4",
        caption: "PD Choi Bo-pil, watching upon us",
        likes: 10,
        comments: 2,
        timestamp: "2022-08-01T09:08:31.020Z",
        button_visible: true
    },
    {
        id: 1,
        name: "지석진",
        romanized_name:"Jee Seok Jin",
        username: "jeeseokjin",
        avatar: "https://6.vikiplatform.com/image/c3da361070f548409412e9b23889b318.jpeg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
        is_followed: false,
        video: "https://i.imgur.com/8TZ6tCl.mp4",
        caption: "TBT: So-min and Se-chan are announced as new cast members",
        likes: 12,
        comments: 2,
        timestamp: "2022-03-10T09:08:31.020Z",
        button_visible: true
    },
    {
        id: 2,
        name: "하하",
        romanized_name:"HAHA",
        username: "quanhaha79",
        avatar: "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201603%2F20160317145311409.jpg",
        is_followed: true,
        video: "https://i.imgur.com/5k3PQ9w.mp4",
        caption: "Jong Kook hyuuuuung",
        likes: 2,
        comments: 4,
        timestamp: "2022-04-03T09:08:31.020Z",
        button_visible: true
    },
    {
        id: 3,
        name: "송지효",
        romanized_name:"Song Ji Hyo",
        username: "my_songjihyo",
        avatar: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fw.namu.la%2Fs%2Fc90d96694984a459c20730bd0447318806202669112b7d0e30a180dbd95b56e4c9a669d938e718617ee320d79fe001538d8babc98e550754fd19daf4ca686973429b45660b0521e49176d60caa881f9ebdf4228d9ce35a0dfebd30b507584d04&type=fff264_180",
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
        name: "김종국",
        romanized_name:"Kim Jong Kook",
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
        name: "전소민",
        romanized_name:"Jeon So Min",
        username: "jsomin86",
        avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMjk4%2FMDAxNjU3MTQwNTYyNTk3.gw8vuwrpmDJiGc_6r_PaE4ApFYHCMLQhLqj5nk-MDPQg.5mmDcmZGwTxbCFNz8odlbOs7WppEaU8HFI-WJnHlQrIg.JPEG.ddungss80%2FIMG_1106.JPG&type=ff332_332",
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
        name: "양세찬",
        romanized_name:"Yang Se Chan",
        username: "yangse2848",
        avatar: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fscontent-nrt1-1.cdninstagram.com%2Fv%2Ft51.2885-19%2F20838754_1571135772951119_6203297192044658688_a.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dscontent-nrt1-1.cdninstagram.com%26_nc_cat%3D111%26_nc_ohc%3DDIgSiTXNyfMAX_xzBYk%26edm%3DABfd0MgBAAAA%26ccb%3D7-5%26oh%3D00_AT_tgaRUqvWiyMh1Vg5mHi8rQuPBt_X50DnfWpyB9lJ9hw%26oe%3D62D01918%26_nc_sid%3D7bff83&type=fff264_180",
        is_followed: true,
        video: "https://i.imgur.com/g8PvJw3.mp4",
        caption: "Art is for everyone",
        likes: 14,
        comments: 7,
        timestamp: "2022-03-18T09:08:31.020Z",
        button_visible: true
    }
];

module.exports = {initialData};