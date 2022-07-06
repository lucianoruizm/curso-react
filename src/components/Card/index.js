import { CardContainer, Image, Text, TimeContainer } from "./card.styled";

export default function Card (props) {
    const { date, day, time, rival, stadium, img, option } = props;

    return (
           <CardContainer option={option} rival={rival}>
               <Text>{rival}</Text>
               <Image src={img} alt={rival}/>
               <TimeContainer>
                   <Text as="p">{date}</Text>
                   <Text as="p">{day}</Text>
                   <Text as="p">{time}</Text>
               </TimeContainer>
               <Text as="h3">{stadium}</Text>
           </CardContainer>
   )
}