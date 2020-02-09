import { DIALOG_SET } from "../../constants/actions";

const initialState = {
  posts: [
    {
      id: 1,
      type: 0,
      posts: "Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻",
      date: "Вчера, в 12:31"
    },
    {
      id: 2,
      type: 0,
      posts:
        "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝",
      date: "Вчера, в 12:41"
    },
    {
      id: 3,
      type: 1,
      posts: "Салам, брат Цезарь!",
      date: "Вчера, в 13:51"
    },
    {
      id: 4,
      type: 1,
      posts:
        "Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥",
      date: "Вчера, в 13:51"
    },
    {
      id: 5,
      type: 0,
      posts: "Да нзч! Ок, держи в курсе.",
      date: "Вчера, в 13:51"
    },
    {
      id: 6,
      type: 1,
      posts: "Ave Caesar! Morituri te salutant! ☝️",
      date: "Вчера, в 13:51"
    },
    {
      id: 7,
      type: 0,
      posts: "Кек. Ты то меня никогда не предашь 😌️",
      date: "Вчера, в 13:51"
    },
    {
      id: 8,
      type: 0,
      posts: "!!!!!",
      date: "Вчера, в 13:51"
    }
  ]
};
const Dialog = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_SET:
      return { ...state };
    default:
      return state;
  }
};
export default Dialog;
