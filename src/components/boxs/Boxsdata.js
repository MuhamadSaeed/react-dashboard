import {AiOutlineUser, AiOutlineOrderedList, AiOutlineWallet, AiOutlineAntDesign} from "react-icons/ai"
let data = [
    {
        id: 1,
        name: "users",
        amount: 85,
        link: "see all users",
        icon: <AiOutlineUser className="icon" />,
        ismoney: false,
        color: "#009688",
    },
    {
        id: 2,
        name: "orders",
        amount: 20,
        link: "see all orders",
        icon: <AiOutlineOrderedList className="icon" />,
        ismoney: false,
        color: "#f44336",
    },
    {
        id: 3,
        name: "earnings",
        amount: 100,
        link: "see earnings",
        icon: <AiOutlineWallet className="icon" />,
        ismoney: true,
        color: "#ff9800",
    },
    {
        id: 4,
        name: "balance",
        amount: 80,
        link: "see the Balance",
        icon: <AiOutlineAntDesign className="icon" />,
        ismoney: false,
        color: "#3f51b5",
    },
]
export default data;