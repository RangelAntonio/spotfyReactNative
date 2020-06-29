import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color:#000;
justify-content:space-between;
`
export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#000', 'transparent', 'transparent','#000']
})`
height:50%
width:100%
justify-content:space-between;

`
export const Photo = styled.Image`
position: absolute;
left:0;
top:30px;
bottom:50%;
right:0;
display:none;

`
export const ContainerNavBar = styled.View`

flex-direction: row;
justify-content: space-between;
align-items: center;
padding:20px;

`
export const GroupItemNavBar = styled.View`
flex-direction: row;
align-items: center;


`
export const ButtonFollow = styled.Text`
margin-right:20px;
color: #fff
border-color:#fff;
border-width: 1px;
padding:6px;
border-radius: 6px;
`
export const ContainerInfoAuthor = styled.View`
justify-content: center;
align-items: center

padding: 20px;

`
export const Author = styled.Text`
font-size:60px;
color:#fff;
font-weight:bold;
padding:10px;
letter-spacing:2px

`
export const AuthorFooter = styled.Text`
font-size:15px;
text-transform:uppercase
color:#e6e6e6;
`
export const Content = styled.View`
    flex:1;
    
    margin-top:20px;
    align-items: center;


`
export const ButtonRandomOrder = styled.TouchableOpacity`
background-color: #1DD15D;
padding:19px 60px;
border-radius: 30px;
`
export const ButtonRandomOrderText = styled.Text`
color: #fff;
text-transform: uppercase; 
font-size: 18px;
font-weight: bold;
letter-spacing:1px;
`
export const InfoCategory= styled.Text`
color: #fff;
padding:20px;
font-size: 20px;
`
export const Music = styled.View`
flex-direction: row;
height:60px;
align-items:center;
justify-content: space-between;


`
export const ContainerMusic = styled.View`
flex:1
width:100%;


`
export const MusicNumber = styled.Text`
color:#e6e6e6;
padding:20px;

`
export const MusicGroupItens = styled.View``
export const MusicGroupAllItens = styled.View`
flex-direction: row;
`


export const MusicName = styled.Text`
color:#fff;
padding: 5px 0px;

`
export const MusicListening = styled.Text`
color:#aaa;
font-size:15px;
`

    
    
