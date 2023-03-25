import React, { Component } from "react";
import Card from "../Card/Card";

type CardContainerDetails = {
  id: string;
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
          title: "Card 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "2",
          title: "Card 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "3",
          title: "Card 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "4",
          title: "Card 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
      ],
    };
  }

  render() {
    return (
      <div className="flex justify-center gap-6 p-4">
        {this.state.cardList.map((card) => (
          <Card title={card.title} description={card.description} />
        ))}
        {/* <Card
          title="Card 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
        <Card
          title="Card 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
        <Card
          title="Card 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
        <Card
          title="Card 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        /> */}
      </div>
    );
  }
}