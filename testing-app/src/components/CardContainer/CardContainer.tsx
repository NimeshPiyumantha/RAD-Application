import React, { Component } from "react";
import Card from "../Card/Card";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

type CardContainerDetails = {
  id?: string;
  icon:React.ReactNode;
  title: string;
  description: string;
};

type CardContainerProps = {};

type CardContainerState = {
  cardList: CardContainerDetails[];
};

export default class CardContainer extends Component<
  CardContainerProps,
  CardContainerState
> {
  constructor(props: CardContainerDetails) {
    super(props);
    this.state = {
      cardList: [
        {
          id: "1",
          icon:<AccessAlarmIcon/>,
          title: "Card 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "2",
          icon:<AcUnitIcon/>,
          title: "Card 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "3",
          icon:<AccountBalanceIcon/>,
          title: "Card 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "4",
          icon:<AddHomeWorkIcon/>,
          title: "Card 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
      ],
    };
  }

  render() {
    return (
      <div className="mt-3 grid grid-cols-4 gap-x-5 w-full">
        {this.state.cardList.map((card) => (
          <Card icon={card.icon} title={card.title} 
          description={card.description} 
          />
        ))}
      </div>
    );
  }
}