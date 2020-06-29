import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { 
    Container,
    ContainerNavBar,
    ContainerHeader,
    GroupItemNavBar,
    Author,
    ButtonRandomOrder,
    ButtonRandomOrderText,
    AuthorFooter,
    InfoCategory,
    ContainerInfoAuthor,
    Photo,
    Content,
    ContainerMusic,
    MusicNumber,
    Music,
    MusicName,
    MusicGroupItens,
    MusicGroupAllItens,
    MusicListening,
    ButtonFollow } from './style'
    import musics from './musics.json'
  
let Musics= () =>{
    return musics && musics.map((music, index) =>(
        <Music key={index++}>
            <MusicGroupAllItens>
            <MusicNumber>{index}</MusicNumber>
            <MusicGroupItens>
             <MusicName>{music.name}</MusicName>
             <MusicListening>{music.listening}</MusicListening>
            </MusicGroupItens> 
            </MusicGroupAllItens>
            <Icon name="ellipsis-v" size={17} color="#fff" style="padding:30px"/>
        </Music>
    ))
    
  }  


const Album = ()=>{
    const [iconConfig] = useState({
        size:20, 
        color:'#fff'
    })



    return(
        <Container>
            <Photo source={{ uri: 'https://ogimg.infoglobo.com.br/in/23205891-0bc-7cf/FT1086A/652/79654047_SCO-grupo-canadense-Nickelback.jpg' }} />
            <ContainerHeader>
           
                <ContainerNavBar>
                    <Icon name="arrow-left" {...iconConfig}  />
                    <GroupItemNavBar>
                        <ButtonFollow>Seguindo</ButtonFollow>
                        <Icon name="ellipsis-v" size={17} color="#fff"/>
                    </GroupItemNavBar>
                </ContainerNavBar>
                <ContainerInfoAuthor>
                    <Author>Nikelback</Author>
                    <AuthorFooter>8.500.752 ouvintes mensais</AuthorFooter>
                </ContainerInfoAuthor>
            </ContainerHeader>
            <Content>
            <ButtonRandomOrder>
                <ButtonRandomOrderText>Ordem Aleatória</ButtonRandomOrderText>
            </ButtonRandomOrder>
            <InfoCategory>Popular</InfoCategory>
            <ContainerMusic>
                    <Musics/>
            </ContainerMusic>
            </Content>

        </Container>
    )
}

export default Album