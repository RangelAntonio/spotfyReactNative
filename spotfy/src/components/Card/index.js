import React from 'react'
import {
     Container,
     Photo,
     ContainerSubtitle,
     SubtitleTitle,
    SubtitDescription 
} from './styles'


const Card = ({item})=>{
    return(
        <Container>
            <Photo source={{uri: item.photo}}/>
            <ContainerSubtitle>
                <SubtitleTitle>{item.subtitle.title}</SubtitleTitle>
                <SubtitDescription>{item.subtitle.description}</SubtitDescription>
            </ContainerSubtitle>
        </Container>
    )
}
export default Card;